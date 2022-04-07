import React from 'react';
import {Text} from 'react-native';

const DszItem = ({onTap, title}) => (
  <>
    <Text style={{color: '#707070', fontSize: 12}} onPress={() => onTap()}>
      {title}
    </Text>
  </>
);

export default DszItem;
