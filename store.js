import React, {Component, useState, useEffect} from 'react';
import {AppState} from 'react-native';

export const Context = React.createContext();

const Store = ({children}) => {
  const [state, setState] = useState();
  const [mtlBlatt, setMtlBlatt] = useState();

  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = nextAppState => {
    if (nextAppState === 'active') {
      fetchData();
      mittelungen();
    }
    return;
  };

  const fetchData = () => {
    fetch('https://kradolf-schoenenberg.ch/wp-json/wp/v2/news?_embed')
      .then(res => res.json())
      .then(data => setState(data))
      .catch(err => console.log(err));
  };

  const mittelungen = () => {
    fetch('https://kradolf-schoenenberg.ch/wp-json/wp/v2/cust_mitteilungsblatt')
      .then(res => res.json())
      .then(data => {
        setMtlBlatt(data);
      });
  };

  return (
    <Context.Provider
      value={{state: [state, setState], mtlBlatt: [mtlBlatt, setMtlBlatt]}}>
      {children}
    </Context.Provider>
  );
};

export default Store;
