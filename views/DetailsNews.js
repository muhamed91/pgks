import React from 'react';
import * as RootNavigation from '../RootNavigation';
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
  Linking,
  Alert,
  Dimensions,
  Modal,
} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

import Colors from '../Colors';
import HTML from 'react-native-render-html';
import {IGNORED_TAGS} from 'react-native-render-html/src/HTMLUtils';

export default class DetailsNews extends React.Component {
  state = {
    linkUrl: '',
    currentTime: 0,
    duration: 0.1,
    paused: true,
    overlay: false,
    controls: true,
    visible: false,
  };

  onLinkPress = (evt, href, htmlAttribs) => {
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

  render() {
    const {content, img, rubrik, name, date} = this.props.route.params;
    const {paused, controls} = this.state;
    return (
      <SafeAreaView>
        <ScrollView style={{height: '90%'}}>
          <View style={{width: '100%'}}>
            <Image source={{uri: img}} style={{height: 200}} />
          </View>
          <Text style={[styles.rubrik, styles.contentContainer]}>{date}</Text>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{name}</Text>

            <ScrollView style={{flex: 1}}>
              <HTML
                imagesMaxWidth={Dimensions.get('window').width}
                imagesInitialDimensions={{
                  width: Dimensions.get('window').width,
                }}
                alterChildren={node => {
                  if (node.name === 'iframe') {
                    delete node.attribs.width;
                    delete node.attribs.height;
                  }
                  return node.children;
                }}
                ignoredTags={IGNORED_TAGS.filter(tag => tag !== 'video')}
                renderers={{
                  video: ({src, poster}) =>
                    Platform.OS === 'android' ? (
                      <View style={{flex: 1, height: 400}}>
                        <VideoPlayer
                          paused={paused}
                          source={{uri: src}}
                          navigator={this.props.navigator}
                          disableVolume="false"
                          disableBack="false"
                          poster={poster ? poster : img}
                          toggleResizeModeOnFullscreen="true"
                          onEnterFullscreen={() => {
                            RootNavigation.navigate('AndroidFullScreen', {
                              src: src,
                            });
                          }}
                        />
                      </View>
                    ) : (
                      <View>
                        <Video
                          place
                          controls={controls}
                          paused={paused}
                          source={{uri: src}}
                          style={{
                            flex: 1,
                            height: 300,
                          }}
                        />
                      </View>
                    ),

                  // <VideoPlayer
                  //   video={{
                  //     uri: src,
                  //   }}
                  //   videoWidth={1600}
                  //   videoHeight={900}
                  //   thumbnail={{
                  //     uri: poster ? poster : img,
                  //   }}
                  // />
                }}
                listsPrefixesRenderers={{
                  ul: (
                    htmlAttribs,
                    children,
                    convertedCSSStyles,
                    passProps,
                  ) => {
                    return (
                      <Text
                        style={{
                          color: 'blue',
                          marginLeft: -20,
                          fontSize: 16,
                        }}
                      />
                    );
                  },
                }}
                html={content}
                debug={true}
                onLinkPress={this.onLinkPress}
                classesStyles={{
                  'gallery-columns-4': {
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  },

                  'blocks-gallery-grid': {},

                  'gallery-item': {
                    width: '20%',
                  },
                }}
                tagsStyles={{
                  video: {
                    height: 100,
                    width: 100,
                  },

                  img: {},
                  p: {
                    marginBottom: 10,
                    marginTop: 10,
                    lineHeight: 20,
                    fontSize: 14,
                  },

                  a: {
                    color: '#de2a39',
                  },
                }}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  rubrik: {
    backgroundColor: Colors.news,
    color: 'white',
    padding: 6,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 20,
  },

  contentContainer: {
    paddingHorizontal: 12,
    marginBottom: 25,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  date: {
    fontWeight: 'bold',
    paddingTop: 25,
  },
});
