import React, {Component} from 'react';
import {View, Dimensions, Platform, ActivityIndicator} from 'react-native';
import Colors from '../Colors';

import {Container, Header, Content, Icon, Picker, Form} from 'native-base';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import EventTeaser from '../components/EventTeaser';
import * as RootNavigation from '../RootNavigation';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

class Veranstaltungen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      items: [],
      isActive: false,
      cats: [],
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value,
      isActive: true,
    });

    if (value === 'reset') {
      this.setState({
        isActive: false,
      });
    }
  }

  componentDidMount() {
    fetch(
      'https://kradolf-schoenenberg.ch//wp-json/mecexternal/v1/calendar/5906',
    )
      .then(response => response.json())
      .then(data => {
        var items = [];

        var loca;
        var date;
        for (var date in data.content_json) {
          for (var item of data.content_json[date]) {
            try {
              loca = item.data.locations[Object.keys(item.data.locations)];
              date = item.date.start;
            } catch (error) {
              //report
            }

            let category = item.data;
            try {
              const newData =
                item.data.categories[Object.keys(item.data.categories)];
              let newObject = Object.assign(category, loca, date, newData);
              delete newObject.categories;
              delete newObject.locations;

              items.push(newObject);
            } catch (error) {
              console.log(error);
            }
          }
        }
        this.setState({
          items: items,
        });
      });

    this.fetchData();
  }

  fetchData = () => {
    fetch(
      'https://kradolf-schoenenberg.ch/wp-json/wp/v2/veranstaltungen/kategorien',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({cats: responseJson});
      })
      .catch(error => console.log(error)); //to catch the errors if any
  };

  render() {
    const allData = this.state.items.map((item, i) => {
      return <EventTeaser key={i} item={item} />;
    });

    const filteredData = this.state.items
      .filter(data => data.name === this.state.selected)
      .map((item, i) => <EventTeaser key={i} item={item} />);

    return (
      <>
        <Form
          style={{
            marginHorizontal: fullWidth * 0.025,
            borderBottomWidth: 1,
            marginTop: 15,
            marginBottom: 15,
            paddingHorizontal: 5,
            paddingLeft: Platform.OS === 'android' ? 10 : 0,
            zIndex: 1,
          }}>
          <Picker
            style={{
              color: '#000000',
              height: Platform.OS === 'android' ? 40 : 45,
              paddingRight: 10,
              zIndex: 1,
            }}
            mode="dropdown"
            placeholder="Kategorie Filtern"
            iosHeader={'Kategorie'}
            iosIcon={<Icon style={{color: '#000000'}} name="arrow-down" />}
            style={{width: undefined}}
            textStyle={{color: '#000000'}}
            placeholderStyle={{color: '#000000'}}
            itemTextStyle="#000000"
            placeholderTextColor="#000000"
            selectedValue={this.state.selected}
            itemStyle={{color: '#000000'}}
            onValueChange={this.onValueChange.bind(this)}>
            <Picker.Item label="Alle Kategorien" value="reset" />
            {this.state.cats.map((cats, i) => {
              return (
                <Picker.Item key={i} value={cats.name} label={cats.name} />
              );
            })}
          </Picker>
        </Form>
        <ScrollView style={{flex: 1}}>
          {this.state.items.length === 0 || this.state.items === undefined ? (
            <View
              style={{
                flex: 1,
                zIndex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ActivityIndicator color={Colors.events} />
            </View>
          ) : (
            <View style={{marginBottom: fullHeight * 0.1}}>
              {this.state.isActive ? filteredData : allData}
            </View>
          )}
        </ScrollView>
      </>
    );
  }
}

export default Veranstaltungen;
