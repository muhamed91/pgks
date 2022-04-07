import * as React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Button,
  Linking,
} from 'react-native';
import BottomNavigator from '../components/BottomNavigator';
import {WebView} from 'react-native-webview';

const SbbTages = () => (
  <View style={{flex: 1, marginBottom: 50}}>
    <WebView
      cacheEnabled={true}
      source={{uri: 'https://kradolf-schoenenberg.ch/app-sbb/'}}
      useWebKit={true}
      startInLoadingState={true}
      renderLoading={() => (
        <ActivityIndicator
          color="black"
          size="large"
          style={styles.flexContainer}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  flexContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
});

export default SbbTages;
