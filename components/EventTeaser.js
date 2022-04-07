import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IconFs from 'react-native-vector-icons/FontAwesome';

import * as RootNavigation from '../RootNavigation';
import moment from 'moment';

import Colors from '../Colors';

const fullWidth = Dimensions.get('window').width;
const fullheight = Dimensions.get('window').height;

const EventTeaser = ({item}) => {
  console.log(item);
  let organizer;
  let organizerName;

  try {
    organizer = item.organizers[Object.keys(item.organizers)];
    organizerName = organizer.name;
  } catch (error) {}
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        RootNavigation.navigate('EventDetails', {
          id: item.ID,
          content: item.content,
          img: item.featured_image.gridsquare,
          date: item.date,
          timeStart: item.time.start,
          timeEnd: item.time.end,
          adress: item.address,
          name: item.title,
          price: item.meta.mec_cost,
          organizer: organizerName,
        })
      }>
      <ScrollView style={styles.containerEvent}>
        <View style={styles.eventHead}>
          <Text
            style={(styles.eventTitle, {backgroundColor: 'white', padding: 3})}>
            <Text style={{fontWeight: 'bold'}}>
              {item.date === NaN
                ? moment(new Date(item.date)).format('DD.MM.YYYY')
                : moment(new Date(item.date)).format('DD.MM.YYYY')}
            </Text>
            {item.time.start === '' ? (
              ''
            ) : (
              <Text style={styles.eventTime}> | {item.time.start}</Text>
            )}
            {item.time.end === '' ? (
              ''
            ) : (
              <Text style={styles.eventTime}> - {item.time.end}</Text>
            )}
          </Text>
        </View>
        <View style={styles.eventBody}>
          <View style={styles.newsImg}>
            <Image
              source={{
                uri: item.featured_image.thumblist,
              }}
              style={{
                height: null,
                width: null,
                resizeMode: 'cover',
                flex: 1,
              }}
            />
          </View>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{
              width: fullWidth * 0.6,
              paddingLeft: 15,
              fontSize: 16,
              color: 'white',
            }}
            key={item.term_id}>
            {item.title}
          </Text>
          <IconFs name="angle-right" color={'white'} size={35} />
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerEvent: {
    marginHorizontal: fullWidth * 0.025,
    backgroundColor: Colors.events,
    marginBottom: 20,
  },

  eventHead: {
    backgroundColor: Colors.events,
  },

  eventBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  eventTitle: {
    color: 'white',
    fontSize: 12,
  },

  eventTime: {
    fontWeight: 'normal',
  },

  eventTitleHeading: {
    fontSize: 18,
    fontWeight: '400',
  },
  newsImg: {
    height: 60,
    borderRightWidth: 8,
    borderColor: 'white',
    width: 100,
  },
});

export default EventTeaser;
