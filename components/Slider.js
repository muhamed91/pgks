import React from 'react';
import {
  View,
  Text,
  StyleSheet$,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';

const Slider = ({img, title}) => (
  <>
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: img}} />
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {},

  image: {
    height: 190,
  },

  title: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: '100%',
  },

  titleText: {
    color: 'white',
    paddingVertical: 20,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default Slider;
