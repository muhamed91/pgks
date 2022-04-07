import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import IconFs from 'react-native-vector-icons/FontAwesome';

const fullWidth = Dimensions.get('window').width;

const MittelungsItem = ({blatt}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{blatt.post_title}</Text>
        <TouchableHighlight style={styles.btn}>
          <>
            <Text style={{color: 'white', fontSize: 12, padding: 8}}>
              PDF Anschauen
            </Text>
            <IconFs
              name="angle-down"
              color={'white'}
              size={20}
              style={{padding: 5}}
            />
          </>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f6f6f6',
    marginHorizontal: fullWidth * 0.025,
  },

  btn: {
    flexDirection: 'row',
    backgroundColor: '#26b273',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRef: {
    backgroundColor: '#26b273',
  },
  title: {
    fontSize: 14,
    flex: 1,
  },
});

export default MittelungsItem;
