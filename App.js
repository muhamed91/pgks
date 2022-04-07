import React from 'react';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import SplashScreen from 'react-native-splash-screen';
import {View, Dimensions, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import * as RootNavigation from './RootNavigation';

import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './components/StackNavigator';

import BottomNavigator from './components/BottomNavigator';
import SideMenu from './screens/SideMenu';
import {navigationRef} from './RootNavigation';
import Rueckmeldungen from './screens/SbbTageskarte';
import {WebView} from 'react-native-webview';
import Store from './store';

const winHeight = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  constructor(properties) {
    super(properties);
    //Remove this method to stop OneSignal Debugging
    OneSignal.setLogLevel(6, 0);

    // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
    OneSignal.init('a726c868-9f3b-4d80-b03a-67e2ffec6fca', {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.

    // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
    OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    function myiOSPromptCallback(permission) {
      // do something with permission value
    }
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    // console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    // console.log('Message: ', openResult.notification.payload.body);
    // console.log('Data: ', openResult.notification.payload.additionalData);
    // console.log('isActive: ', openResult.notification.isAppInFocus);
    // console.log('openResult: ', openResult);
  }

  onIds(device) {}

  state = {
    isSideMenuVisible: false,
  };

  toggleSideMenu = () => {
    this.setState({isSideMenuVisible: !this.state.isSideMenuVisible});
  };

  goToScreen = string => {
    RootNavigation.navigate(string);

    this.setState({isSideMenuVisible: false});
  };

  goToScreenParams = (screen, url) => {
    RootNavigation.navigate(screen, {
      url: url,
    });

    this.setState({isSideMenuVisible: false});
  };

  render() {
    return (
      <Store>
        <NavigationContainer ref={navigationRef}>
          <StackNavigator />
        </NavigationContainer>
        <View>
          <BottomNavigator
            height={winHeight * 0.1}
            showModal={this.toggleSideMenu}
          />
        </View>
        <Modal
          isVisible={this.state.isSideMenuVisible}
          animationInTiming={400}
          animationIn="slideInLeft" // Has others, we want slide in from the left
          animationOut="slideOutLeft" // When discarding the drawer
          onBackdropPress={this.toggleSideMenu}
          useNativeDriver={true}
          style={styles.sideMenuStyle}>
          <SideMenu
            goToScreen={this.goToScreen}
            goToScreenParams={this.goToScreenParams}
          />
        </Modal>
      </Store>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  sideMenuStyle: {
    margin: 0,
    width: width * 0.75, // SideMenu width
  },
});

export default App;
