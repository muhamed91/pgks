import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

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
import dsz from '../screens/dsz';
import Colors from '../Colors';

import {useNavigation} from '@react-navigation/native';
import CustomDrawer from '../components/CustomDrawer';
import DetailsNews from '../views/DetailsNews';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator();

export function Start() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export function vNews({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Vereins-News"
        component={VereinsNachrichten}
        options={{
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
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
        }}
      />
    </Stack.Navigator>
  );
}

export function gNews({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Gewerbe-News"
        component={GewerbeNachrichten}
        options={{
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
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
        }}
      />
    </Stack.Navigator>
  );
}

export function gaNews({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Gastro-News"
        component={GastroNachrichten}
        options={{
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
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
        }}
      />
    </Stack.Navigator>
  );
}

export function geNews({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Gemeinde-News"
        component={GemeindeNachrichten}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
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
        }}
      />
    </Stack.Navigator>
  );
}

export function events({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Veranstaltungen"
        component={Veranstaltungen}
        options={{
          headerStyle: {
            backgroundColor: Colors.events,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
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
        }}
      />
    </Stack.Navigator>
  );
}

export function sbb({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SBB Tageskarte"
        component={SbbTageskarte}
        options={{
          headerStyle: {
            backgroundColor: Colors.sbb,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
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
        }}
      />
    </Stack.Navigator>
  );
}

export function feedback({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rückmeldungen"
        component={Rueckmeldungen}
        options={{
          headerStyle: {
            backgroundColor: '#E30613',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
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
        }}
      />
    </Stack.Navigator>
  );
}

export function mitteil({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mitteilungsblatt"
        component={Mitteilungsblatt}
        options={{
          headerStyle: {
            backgroundColor: Colors.mitteilung,
          },
          headerTintColor: 'grey',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
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
        }}
      />
    </Stack.Navigator>
  );
}

export function customDrawernScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Custom Drawer" component={CustomDrawer} />
    </Stack.Navigator>
  );
}

export function immpr({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Immpressum"
        component={immpressum}
        options={{
          headerStyle: {
            backgroundColor: Colors.news,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <HeaderBackButton
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export function datenschutz({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dsz" component={dsz} />
    </Stack.Navigator>
  );
}

export function detail({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details"
        component={DetailsNews}
        options={({route}) => ({title: Moxi})}
      />
    </Stack.Navigator>
  );
}
