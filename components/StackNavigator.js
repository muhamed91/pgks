import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View, Platform} from 'react-native';

import {CardStyleInterpolators} from '@react-navigation/stack';

import {HeaderBackButton} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import GemeindeNachrichten from '../screens/GemeindeNews';
import GewerbeNachrichten from '../screens/GewerbeNachrichten';
import GastroNachrichten from '../screens/GastroNachrichten';
import VereinsNachrichten from '../screens/VereinsNachrichten';
import Veranstaltungen from '../screens/Veranstaltungen';
import SbbTageskarte from '../screens/SbbTageskarte';
import Mitteilungsblatt from '../screens/Mitteilungsblatt';
import Rueckmeldungen from '../screens/Rueckmeldungen';
import customDrawer from '../components/CustomDrawer';
import immpressum from '../screens/immpressum';
import DetailsNews from '../views/DetailsNews';
import GemeindeNews from '../screens/GemeindeNews';
import Browser from '../views/Browser';
import {useNavigation} from '@react-navigation/native';
import Item from '../components/Item';
import SideMenu from '../screens/SideMenu';
import PDFExample from '../views/PDFExample';
import DetailsEvent from '../views/DetailsEvent';
import PDFViewer from '../views/PDFViewer';
import AndroidFullScreen from '../views/AndroidFullScreen';
const Stack = createStackNavigator();

const android = CardStyleInterpolators.forRevealFromBottomAndroid;
const ios = CardStyleInterpolators.forHorizontalIOS;

const StackNavigator = () => (
  <>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Vereins-News"
        component={VereinsNachrichten}
        options={({route, navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Gewerbe-News"
        component={GewerbeNachrichten}
        options={({route, navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Gemeinde-News"
        component={GemeindeNachrichten}
        options={({route, navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Gastro-News"
        component={GastroNachrichten}
        options={({route, navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Events"
        component={Veranstaltungen}
        options={({route, navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.events,
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="SBB-Tageskarte"
        component={SbbTageskarte}
        options={({route, navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#E30613',
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Feedback"
        component={Rueckmeldungen}
        options={({route, navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#E30613',
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Mitteilungsblatt"
        component={Mitteilungsblatt}
        options={({route, navigation}) => ({
          title: 'Mitteilungsblatt',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'black',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'black'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <Stack.Screen name="Immpressum" component={immpressum} />

      <Stack.Screen
        name="Details"
        component={DetailsNews}
        options={({route, navigation}) => ({
          title: route.params.name,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />

      <Stack.Screen
        name="EventDetails"
        component={DetailsEvent}
        options={({route, navigation}) => ({
          title: route.params.name,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.events,
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />

      <Stack.Screen
        name="Browser"
        component={Browser}
        options={({route, navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          title: 'Kradolf-Schönenberg',
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />

      <Stack.Screen
        name="PdfViewer"
        component={PDFExample}
        options={({route, navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          title: '',
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />

      <Stack.Screen
        name="PdfViewPage"
        component={PDFViewer}
        options={({route, navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          title: route.params.name,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'black',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'black'}
              onPress={() => {
                // Do something
                navigation.navigate('Mitteilungsblatt');
              }}
            />
          ),
        })}
      />

      <Stack.Screen
        name="AndroidFullScreen"
        component={AndroidFullScreen}
        options={({route, navigation}) => ({
          headerShown: false,
          title: route.params.src,
          headerTitleStyle: {
            fontWeight: '600',
            maxWidth: 300,
            fontSize: 15,
            color: 'black',
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              tintColor={'black'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  </>
);

export default StackNavigator;
