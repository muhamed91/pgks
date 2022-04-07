import React from 'react';
import IconFs from 'react-native-vector-icons/FontAwesome5';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Item = ({title, goToScreen, link, onTap}) => {
  return (
    <>
      <TouchableHighlight
        style={styles.item}
        underlayColor={'#dedede'}
        onPress={() => onTap()}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>{title}</Text>
          <IconFs color={'#117295'} size={25} name={'angle-right'} />
        </View>
      </TouchableHighlight>
      <View />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 0.3,
    borderColor: '#c1c1c1',
  },
  title: {
    fontSize: 15,
    color: '#707070',
    marginLeft: 20,
  },
});

export default Item;
