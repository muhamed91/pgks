import React, {useState} from 'react';
import {View, Text} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

const AndroidFullScreen = ({route}) => {
  const [paused, setPaused] = useState(false);
  const navigation = useNavigation();

  const {src} = route.params;
  return (
    <View style={{height: '90%'}}>
      <VideoPlayer
        paused={paused}
        source={{uri: src}}
        disableVolume="false"
        showOnStart="true"
        disableFullscreen="true"
        onBack={() => {
          navigation.dispatch(CommonActions.goBack());
        }}
      />
    </View>
  );
};

export default AndroidFullScreen;
