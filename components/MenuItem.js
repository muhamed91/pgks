import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Colors from '../Colors';

const MenuItem = ({icon, title, bgColor, goToScreen, link}) => {
  const width = Dimensions.get('screen').width;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => goToScreen(link)}
      style={{
        justifyContent: 'center',
        backgroundColor: bgColor,
        width: '33.333%',

        borderColor: 'white',
        borderWidth: 3,
        height: '50%',
      }}>
      {icon}
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: 10,
          fontSize: width / 30,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
