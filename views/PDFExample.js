import React from 'react';
import {StyleSheet, Dimensions, View, Platform, ScrollView} from 'react-native';

import Pdf from 'react-native-pdf';
import PDFView from 'react-native-view-pdf/lib/index';

export default class PDFExample extends React.Component {
  render() {
    const resources = {
      file:
        Platform.OS === 'ios'
          ? 'downloadedDocument.pdf'
          : '/sdcard/Download/downloadedDocument.pdf',
      url: this.props.route.params.href,
      base64: 'JVBERi0xLjMKJcfs...',
    };

    const resourceType = 'url';

    console.log(this.props.route);

    return (
      <View style={{flex: 1, marginBottom: 50}}>
        {/* Some Controls to change PDF resource */}
        <PDFView
          fadeInDuration={250.0}
          style={{flex: 1}}
          resource={resources[resourceType]}
          resourceType={resourceType}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={error => console.log('Cannot render PDF', error)}
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
