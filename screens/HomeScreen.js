import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';

import MenuItem from '../components/MenuItem';
import Colors from '../Colors';
import Logo from '../assets/Logo.svg';
import Ks from '../assets/Wappen_Kradolf.svg';
import Vn from '../assets/Vereine.svg';
import Gn from '../assets/Gewerbe.svg';
import Gan from '../assets/Gastro.svg';
import Fb from '../assets/Feedback.svg';
import Ev from '../assets/Veranstaltungen.svg';
import Sb from '../assets/SBB.svg';

import Slide from '../components/Slide';

const HomeScreen = ({navigation}) => {
  const windowHeight = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const goToScreen = string => {
    navigation.navigate(string);
  };

  return (
    <View style={{height: windowHeight, flex: 1}}>
      <View style={styles.header}>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Logo
            height={45}
            width={'80%'}
            style={{marginVertical: Platform.OS === 'ios' ? 60 : 0}}
          />
        </SafeAreaView>
      </View>
      <View style={styles.slider}>
        <Slide />
      </View>
      <View
        style={styles.claim}
        onStartShouldSetResponder={() => navigation.navigate('Gemeinde-News')}>
        <Ks height={45} width={100} />
        <Text style={{marginTop: 10, color: 'white', fontSize: width / 22}}>
          Gemeinde-News
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.menuContainer}>
          <MenuItem
            icon={<Vn height={40} />}
            title={'Vereins-News'}
            link={'Vereins-News'}
            bgColor={Colors.newsSecond}
            goToScreen={goToScreen}
          />
          <MenuItem
            icon={<Gn height={40} />}
            title={'Gewerbe-News'}
            link={'Gewerbe-News'}
            bgColor={Colors.news}
            goToScreen={goToScreen}
          />
          <MenuItem
            icon={<Gan height={40} />}
            title={'Gastro-News'}
            link={'Gastro-News'}
            bgColor={Colors.newsSecond}
            goToScreen={goToScreen}
          />
          <MenuItem
            icon={<Fb height={40} />}
            title={'Feedback'}
            link={'Feedback'}
            bgColor={Colors.news}
            goToScreen={goToScreen}
          />
          <MenuItem
            icon={<Ev height={40} />}
            title={'Events'}
            link={'Events'}
            bgColor={Colors.newsSecond}
            goToScreen={goToScreen}
          />
          <MenuItem
            icon={<Sb height={40} />}
            title={'SBB-Tageskarte'}
            link={'SBB-Tageskarte'}
            bgColor={Colors.news}
            goToScreen={goToScreen}
          />
        </View>
      </View>
    </View>
  );
};

{
}
const styles = StyleSheet.create({
  header: {
    height: '12%',
    backgroundColor: '#f2f2f2',
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
  },

  slider: {
    height: '30%',
  },
  main: {
    height: '32%',
  },

  claim: {
    height: '16%',
    backgroundColor: Colors.news,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderLeftWidth: 6,
    borderTopWidth: 6,
    borderColor: 'white',
  },

  footer: {
    height: '10%',
  },

  buttonText: {
    color: Colors.news,
    fontSize: 60,
    fontWeight: '600',
  },

  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 3,
    borderColor: 'white',
  },
});

export default HomeScreen;
