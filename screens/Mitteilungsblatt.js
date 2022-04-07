import React, {Component, useContext} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MittelungsItem from '../components/MittelungsItem';
import {Context} from '../store';
import * as RootNavigation from '../RootNavigation';

const Mitteilungsblatt = () => {
  const {mtlBlatt} = useContext(Context);
  const [mtlBlattValue, setMtlBlattValue] = mtlBlatt;

  return (
    <>
      <FlatList
        style={{marginTop: 15}}
        data={mtlBlattValue}
        keyExtractor={item => item.ID.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              RootNavigation.navigate('PdfViewPage', {
                href: item.URL,
                name: item.post_title,
              })
            }>
            <MittelungsItem blatt={item} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerLogo: {
    height: 80,
    width: '100%',
    opacity: 0.9,
  },
});

export default Mitteilungsblatt;
