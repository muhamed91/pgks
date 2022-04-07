import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,
  Linking,
  SafeAreaView,
} from 'react-native';
import Web from '../assets/wwwsvg.svg';
import Phone from '../assets/phonesvg.svg';
import More from '../assets/more.svg';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import {abs} from 'react-native-reanimated';
import * as RootNavigation from '../RootNavigation';

const BottomNavigator = ({height, showModal}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            position: 'absolute',
            radius: 3,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            x: 0,
            y: 0,
            bottom: 0,
            width: '100%',
            height: height,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              backgroundColor: '#1AB4ED',
            }}>
            <TouchableOpacity
              onPress={() => {
                RootNavigation.navigate('Browser', {
                  url: 'https://www.kradolf-schoenenberg.ch',
                  name: 'Kradolf-Schönenberg',
                });
              }}>
              <Web height={35} width={60} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              backgroundColor: '#4E9FBE',
            }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('tel://0583469000');
              }}>
              <Phone height={35} width={60} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              backgroundColor: '#117295',
            }}
            onPress={() => {
              // navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <TouchableOpacity
              onPress={() => {
                showModal();
              }}>
              <More height={35} width={60} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
