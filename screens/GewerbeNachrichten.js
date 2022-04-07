import React, {Component, useContext, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import NewsCard from '../components/NewsCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as RootNavigation from '../RootNavigation';
import moment from 'moment';
import {Context} from '../store';
import getFullDateString from '../module/getDateString';

const GewerbeNachrichten = () => {
  const [loading, setLoading] = useState(false);

  const {state, slider} = useContext(Context);
  const [stateValue, setStateValue] = state;

  const fetchData = async () => {
    try {
      await fetch('https://kradolf-schoenenberg.ch/wp-json/wp/v2/news?_embed')
        .then(res => res.json())
        .then(data => {
          setStateValue(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {stateValue === undefined || stateValue.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <View style={{height: '90%'}}>
          <FlatList
            refreshing={loading}
            onRefresh={fetchData}
            style={{marginTop: 15}}
            data={stateValue.filter(data => data.rubrik[0] === 119)}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  RootNavigation.navigate('Details', {
                    name: item.title.rendered.replace(/<\/?[^>]+(>|$)/g, ''),
                    content: item.content.rendered,
                    img: item._embedded['wp:featuredmedia']['0'].source_url,

                    date: getFullDateString(item.date),
                  })
                }>
                <NewsCard
                  item={item}
                  title={item.title.rendered}
                  img={
                    item._embedded['wp:featuredmedia']['0'].media_details.sizes
                      .gridsquare.source_url
                  }
                  date={moment(new Date(item.date)).format('DD.MM.YYYY')}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerLogo: {
    height: 80,
    width: '100%',
    opacity: 0.9,
  },
});

export default GewerbeNachrichten;

// <Consumer>
//   {value => {
//     if (value.dataSource.length === 0 || value.dataSource === '') {
//       return <ActivityIndicator />;
//     } else {
//       return (
//         <View style={{height: '90%'}}>
//           <FlatList
//             style={{marginTop: 15}}
//             data={value.dataSource.filter(data => data.rubrik[0] === 119)}
//             keyExtractor={item => item.id.toString()}
//             renderItem={({item}) => (
//               <TouchableOpacity
//                 activeOpacity={0.8}
//                 onPress={() =>
//                   RootNavigation.navigate('Details', {
//                     name: item.title.rendered.replace(
//                       /<\/?[^>]+(>|$)/g,
//                       '',
//                     ),
//                     content: item.content.rendered,
//                     img: item._embedded['wp:featuredmedia']['0'].source_url,

//                     date: getFullDateString(item.date),
//                   })
//                 }>
//                 <NewsCard
//                   item={item}
//                   title={item.title.rendered}
//                   img={
//                     item._embedded['wp:featuredmedia']['0'].media_details
//                       .sizes.gridsquare.source_url
//                   }
//                   date={moment(new Date(item.date)).format('DD.MM.YYYY')}
//                 />
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       );
//     }
//   }}
// </Consumer>
