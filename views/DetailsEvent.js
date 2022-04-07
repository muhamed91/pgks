import React from 'react';
import {View, ScrollView, Linking, Button, Alert} from 'react-native';
import * as RootNavigation from '../RootNavigation';

import {Text, Image, Dimensions, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HTML from 'react-native-render-html';
import IconEv from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFS from 'react-native-vector-icons/FontAwesome';
import Colors from '../Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

const DetailsEvent = ({route}) => {
  const {
    id,
    content,
    img,
    date,
    timeStart,
    timeEnd,
    price,
    organizer,
    adress,
    name,
  } = route.params;

  const getDateString = date => {
    let jetzt = new Date(date),
      tag = jetzt.getDate(),
      tagZahl = jetzt.getDay(),
      wochentag = [
        'Sonntag',
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
      ],
      monatZahl = jetzt.getMonth(monat),
      monat = [
        'Januar',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember',
      ],
      jahr = jetzt.getFullYear();

    let postingDatum;

    return (postingDatum = `${wochentag[tagZahl]}, ${tag}. ${
      monat[monatZahl]
    } ${jahr}`);
  };

  const onLinkPress = (evt, href, htmlAttribs) => {
    if (href.match(/(tel:)/)) {
      Linking.openURL(href);
    } else if (href.match(/\.pdf$/) && Platform.OS === 'android') {
      RootNavigation.navigate('PdfViewer', {
        href: href.match(/\.pdf$/) ? href : href,
      });
    } else if (href.match(/(mailto:)/)) {
      Linking.openURL(href);
    } else if (href) {
      RootNavigation.navigate('Browser', {url: href});
    }
  };

  // Check if content is here

  const ContentHtml = () => {
    if (content) {
      return (
        <HTML
          renderers={{}}
          listsPrefixesRenderers={{
            ul: (htmlAttribs, children, convertedCSSStyles, passProps) => {
              return (
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 16,
                  }}
                />
              );
            },
          }}
          html={content}
          onLinkPress={onLinkPress}
          classesStyles={{}}
          tagsStyles={{
            img: {},

            a: {
              color: '#de2a39',
            },

            div: {
              marginTop: 10,
              lineHeight: 22,
              fontSize: 14,
            },

            p: {
              marginTop: 10,
              marginBottom: 10,
              lineHeight: 22,
              fontSize: 14,
            },
          }}
        />
      );
    } else {
      return null;
    }
  };

  const Time = () => {
    if (timeStart === '' || undefined || null) {
      return null;
    } else if (timeStart) {
      return (
        <View style={styles.eventHeader}>
          <View style={styles.icon}>
            <IconE color={'white'} size={20} name="clock" />
            <Text style={{color: 'white', fontSize: 12}}>Zeit</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.time}>{timeStart}</Text>
            {timeEnd ? <Text style={styles.time}> - {timeEnd}</Text> : null}
          </View>
        </View>
      );
    }
  };

  const Price = () => {
    if (price === '' || undefined || null) {
      return null;
    } else {
      return (
        <View style={styles.eventHeader}>
          <View style={styles.icon}>
            <Icon color={'white'} size={20} name="wallet" />
            <Text style={{color: 'white', fontSize: 12}}>Preis</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {price ? <Text style={styles.time}>CHF {price}.-</Text> : null}
          </View>
        </View>
      );
    }
  };

  const Organizer = () => {
    if (organizer === undefined || organizer === '') {
      return null;
    } else {
      return (
        <View style={styles.eventHeader}>
          <View style={styles.icon}>
            <Icon color={'white'} size={20} name="home" />
            <Text style={{color: 'white', fontSize: 12}}>Veranstalter</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flex: 1,
            }}>
            {organizer ? <Text style={styles.time}>{organizer}</Text> : null}
          </View>
        </View>
      );
    }
  };

  const Address = () => {
    if (adress === undefined || adress === '') {
      return null;
    } else {
      return (
        <View style={styles.eventHeader}>
          <View style={styles.icon}>
            <Icon color={'white'} size={20} name="location-pin" />
            <Text style={{color: 'white', fontSize: 12}}>Ort</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flex: 1,
              textAlign: 'center',
            }}>
            {adress ? <Text style={styles.time}>{adress}</Text> : null}
          </View>
        </View>
      );
    }
  };

  return (
    <View styles={{height: fullHeight}}>
      <ScrollView>
        <View style={{marginHorizontal: fullWidth * 0.025, marginVertical: 10}}>
          <Image source={{uri: img}} style={{height: 200}} />
        </View>

        <View style={styles.eventHeader}>
          <View style={styles.icon}>
            <IconEv color={'white'} size={20} name="calendar" />
            <Text style={{color: 'white', fontSize: 12}}>Datum</Text>
          </View>
          <Text style={styles.time}>{getDateString(date)}</Text>
        </View>
        {<Time />}
        {<Price />}
        <Organizer />
        <Address />
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              `https://kradolf-schoenenberg.ch/?method=ical&id=${id}`,
            )
          }
          style={styles.eventBtn}>
          <View style={styles.icon}>
            <IconFS color={'white'} size={20} name="calendar-plus-o" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flex: 1,
              textAlign: 'center',
            }}>
            <Text style={(styles.time, {color: 'white', fontWeight: 'bold'})}>
              Zum Kalender hinzufügen
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <ScrollView style={{flex: 1}} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <ContentHtml />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  eventHeader: {
    marginHorizontal: fullWidth * 0.025,
    backgroundColor: '#e3e3e3',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  eventBtn: {
    marginHorizontal: fullWidth * 0.025,
    backgroundColor: Colors.events,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 5,
  },

  icon: {
    backgroundColor: Colors.events,
    padding: 10,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 95,
  },

  contentContainer: {
    marginTop: 8,
    marginHorizontal: fullWidth * 0.025,
    marginBottom: 100,
  },

  time: {
    fontSize: 15,
  },
});

export default DetailsEvent;
