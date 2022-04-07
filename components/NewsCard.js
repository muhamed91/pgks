import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Alert,
  Platform,
} from 'react-native';
import Colors from '../Colors';
import IconFs from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

const NewsCard = ({item, title, date, img, navigation}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{width: width}}>
      <View style={[styles.container]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View>
            <View style={styles.newsImg}>
              <Image
                source={{uri: img}}
                style={{
                  height: null,
                  width: null,
                  resizeMode: 'cover',
                  flex: 1,
                }}
              />
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{width: width * 0.6, paddingLeft: 15, fontSize: 15}}>
            {title.replace(/<\/?[^>]+(>|$)/g, '')}
          </Text>
        </View>
        <IconFs name="angle-right" color={Colors.news} size={35} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: width * 0.025,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: '#B7B7B7',
  },

  newsImg: {
    height: 65,
    width: 100,
  },

  date: {
    backgroundColor: Colors.news,
    color: 'white',
    padding: 3,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default NewsCard;
