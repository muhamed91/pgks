import React, {Component, useContext, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import getFullDateString from '../module/getDateString';
import ignoreWarnings from 'react-native-ignore-warnings';
import {Context} from '../store';

ignoreWarnings('Setting a timer');

const {width} = Dimensions.get('window');

const SliderS = ({item, goToDetail, uri, heading, navigation}) => (
  <TouchableOpacity
    activeOpacity={0.9}
    style={styles.container}
    onPress={() =>
      goToDetail(
        item.title.rendered.replace(/<\/?[^>]+(>|$)/g, ''),
        item.content.rendered,
        item._embedded['wp:featuredmedia']['0'].source_url,
        getFullDateString(item.date),
      )
    }>
    <View style={{width: '100%'}}>
      <Image source={{uri: uri}} style={{height: '100%'}} />
    </View>
    <View style={styles.title}>
      <Text style={styles.titleText}>{heading}</Text>
    </View>
  </TouchableOpacity>
);

const styles = {
  container: {
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
  },

  title: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: '100%',
  },

  titleText: {
    color: 'white',
    paddingVertical: 20,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 10,
  },

  buttonText: {
    color: Colors.news,
    fontSize: 60,
    fontWeight: '600',
  },
};

const Slide = () => {
  const {slider, state} = useContext(Context);
  const [stateValue, setStateValue] = state;

  const goToDetail = (name, content, img, date) => {
    navigation.navigate('Details', {
      name: name,
      content: content,
      img: img,
      date: date,
    });
  };

  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      {stateValue === undefined ? (
        <View style={{flex: 1}}>
          <ActivityIndicator />
        </View>
      ) : (
        <Swiper
          showsButtons={true}
          showsPagination={false}
          autoplayTimeout={4.5}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}
          autoplay={true}>
          {stateValue
            .map((item, i) => {
              return (
                <SliderS
                  item={item}
                  goToDetail={goToDetail}
                  uri={item._embedded['wp:featuredmedia']['0'].source_url}
                  heading={item.title.rendered.replace(/<\/?[^>]+(>|$)/g, '')}
                  key={i}
                />
              );
            })
            .slice(0, 5)}
        </Swiper>
      )}

      {/* <Consumer>
        {value => {
          if (value.slideData === undefined) {
            return (
              <View style={{flex: 1}}>
                <ActivityIndicator />
              </View>
            );
          } else {
            return (
              <Swiper
                loadMinimalLoader={<ActivityIndicator />}
                showsButtons={true}
                showsPagination={false}
                autoplayTimeout={4.5}
                nextButton={<Text style={styles.buttonText}>›</Text>}
                prevButton={<Text style={styles.buttonText}>‹</Text>}
                autoplay={true}>
                {value.slideData.map((item, i) => {
                  return (
                    <SliderS
                      item={item}
                      goToDetail={goToDetail}
                      uri={item._embedded['wp:featuredmedia']['0'].source_url}
                      heading={item.title.rendered.replace(
                        /<\/?[^>]+(>|$)/g,
                        '',
                      )}
                      key={i}
                    />
                  );
                })}
              </Swiper>
            );
          }
        }}
      </Consumer> */}
    </View>
  );
};

export default Slide;
