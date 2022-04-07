import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  Switch,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import Logo from '../assets/Logo.svg';
import Item from '../components/Item';
import * as RootNavigation from '../RootNavigation';

import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import DszItem from '../components/DszItem';

const links = [
  {
    id: 1,
    link: 'Gemeinde-News',
    ref: 'Gemeinde-News',
  },

  {
    id: 2,
    link: 'Vereins-News',
    ref: 'Vereins-News',
  },

  {
    id: 3,
    link: 'Gewerbe-News',
    ref: 'Gewerbe-News',
  },
  {
    id: 4,
    link: 'Gastro-News',
    ref: 'Gastro-News',
  },
  {
    id: 5,
    link: 'Feedback',
    ref: 'Feedback',
  },

  {
    id: 6,
    link: 'Events',
    ref: 'Events',
  },
  {
    id: 7,
    link: 'SBB-Tagseskarte',
    ref: 'SBB-Tageskarte',
  },
  {
    id: 8,
    link: 'Mitteilungsblatt',
    ref: 'Mitteilungsblatt',
  },
];

const SideMenu = ({goToScreen, goToScreenParams}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.logo}>
        <Logo height={150} width={200} />
      </View>
      <FlatList
        data={links}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Item title={item.link} onTap={() => goToScreen(item.ref)} />
        )}
      />
      <View style={styles.dsz}>
        <DszItem
          title="Impressum |"
          onTap={() =>
            goToScreenParams(
              'Browser',
              'https://kradolf-schoenenberg.ch/impressum/',
            )
          }
        />

        <DszItem
          title=" Datenschutz"
          onTap={() =>
            goToScreenParams(
              'Browser',
              'https://kradolf-schoenenberg.ch/datenschutz/',
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dsz: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 90,
  },

  safeAreaView: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  container: {
    margin: 12,
    flex: 1,
  },
  title: {
    marginTop: 15,
    marginBottom: 10,
    color: '#444',
    fontSize: 14,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default SideMenu;
