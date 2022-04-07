import * as React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const Rueckmeldungen = () => (
  <>
    <View style={{flex: 1, marginBottom: 50}}>
      <WebView
        cacheEnabled={true}
        source={{uri: 'https://kradolf-schoenenberg.ch/app-feedback/'}}
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
  </>
);

const styles = StyleSheet.create({
  flexContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
});

export default Rueckmeldungen;
