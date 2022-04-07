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
} from 'react-native';
import Web from '../assets/wwwsvg.svg';
import Phone from '../assets/phonesvg.svg';
import More from '../assets/more.svg';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

const BottomNavigatorHome = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          position: 'absolute',
          border: 2,
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
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
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
              navigation.navigate('Root', {
                screen: 'Browser',
                params: {
                  url: 'http://www.kradolf-schoenenberg.ch',
                },
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
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <More height={35} width={60} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomNavigatorHome;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
