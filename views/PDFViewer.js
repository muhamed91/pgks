import React from 'react';
import {StyleSheet, Dimensions, View, Platform, ScrollView} from 'react-native';

import Pdf from 'react-native-pdf';
import PDFView from 'react-native-view-pdf/lib/index';

export default class PDFViewer extends React.Component {
  render() {
    const source = {
      uri: this.props.route.params.href,
      cache: true,
    };

    const resources = {
      file:
        Platform.OS === 'ios'
          ? 'downloadedDocument.pdf'
          : '/sdcard/Download/downloadedDocument.pdf',
      url: this.props.route.params.href,
      base64: 'JVBERi0xLjMKJcfs...',
    };
    //const source = require('./test.pdf');  // ios only
    //const source = {uri:'bundle-assets://test.pdf'};

    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

    const resourceType = 'url';

    console.log(this.props.route);

    return (
      <View style={{flex: 1, marginBottom: 50}}>
        {/* Some Controls to change PDF resource */}
        <PDFView
          style={{flex: 1}}
          resource={resources[resourceType]}
          resourceType={resourceType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    height: Dimensions.get('window').height,
    marginTop: -50,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
