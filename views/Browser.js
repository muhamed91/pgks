import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import Colors from '../Colors';

class Browser extends Component {
  render() {
    return (
      <View style={{flex: 1, marginBottom: 50}}>
        <WebView
          cacheEnabled={true}
          source={{uri: this.props.route.params.url}}
          useWebKit={true}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color={Colors.news}
              size="large"
              style={styles.flexContainer}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
});

export default Browser;
