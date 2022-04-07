import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Colors from '../Colors';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsNews from '../views/DetailsNews';
import {HeaderBackButton} from '@react-navigation/stack';
import Browser from '../views/Browser';
import PDFExample from '../views/PDFExample';
import BottomNavigatorHome from './BottomNavigatorHome';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function Root({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details"
        component={DetailsNews}
        options={({route}) => ({
          title: route.params.name,
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
                this.props.navigation.dispatch(NavigationActions.back());
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Browser"
        component={Browser}
        options={({route}) => ({
          title: route.params.url,
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
        options={({route}) => ({
          title: route.params.url,
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
              tintColor={'white'}
              onPress={() => {
                // Do something
                navigation.navigate('Details');
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function NavDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={Root}
      drawerContentOptions={{
        activeTintColor: Colors.news,
        itemStyle: {borderBottomWidth: 0.25, borderBottomColor: 'grey'},
        activeBackgroundColor: 'transparent',
      }}
      drawerStyle={{
        backgroundColor: '#EBEBEB',
        width: 320,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="BottomNav" component={BottomNavigatorHome} />
    </Drawer.Navigator>
  );
}

export default NavDrawer;
