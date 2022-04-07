import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  Linking,
} from '@react-navigation/drawer';
import {View, Text, Platform} from 'react-native';
import Logo from '../assets/Logo.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFs from 'react-native-vector-icons/FontAwesome5';

import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../Colors';
import Sizes from '../Sizes';

const CustomDrawer = ({...props}) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label=""
        onPress={() => props.navigation.closeDrawer()}
        activeTintColor={Colors.news}
        icon={({focused, color, size}) => (
          <Icon
            color={color}
            size={size}
            name={'close'}
            style={{
              position: 'absolute',
              right: 0,
            }}
          />
        )}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 3,
          marginBottom: 65,
        }}>
        <Logo height={50} width={'80%'} />
      </View>
      <DrawerItem
        style={{
          marginVertical: Sizes.mv,
          paddingBottom: 10,
          borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 0.5,
          borderBottomColor: '#B7B7B7',
        }}
        label="Home"
        labelStyle={{
          position: 'absolute',
          top: -10,
          left: -30,
          fontSize: 16,
        }}
        onPress={() => props.navigation.navigate('Home')}
        icon={({focused, color, size}) => (
          <IconFs
            color={'#117295'}
            size={size}
            name={'angle-right'}
            style={{
              fontWeight: '100',
              position: 'absolute',
              right: 30,
            }}
          />
        )}
      />
      <DrawerItem
        style={{
          marginVertical: Sizes.mv,
          paddingBottom: 10,
          borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 0.5,
          borderBottomColor: '#B7B7B7',
        }}
        label="Gemeinde-Nachrichten"
        labelStyle={{
          position: 'absolute',
          top: -10,
          left: -30,
          fontSize: 16,
        }}
        onPress={() => props.navigation.navigate('Gemeinde-Nachrichten')}
        icon={({focused, color, size}) => (
          <IconFs
            color={'#117295'}
            size={size}
            name={'angle-right'}
            style={{
              fontWeight: '100',
              position: 'absolute',
              right: 30,
            }}
          />
        )}
      />
      <DrawerItem
        style={{
          marginVertical: Sizes.mv,
          paddingBottom: 10,
          borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 0.5,
          borderBottomColor: '#B7B7B7',
        }}
        label="Vereins-Nachrichten"
        labelStyle={{
          position: 'absolute',
          top: -10,
          left: -30,
          fontSize: 16,
        }}
        onPress={() => props.navigation.navigate('Vereins-Nachrichten')}
        icon={({focused, color, size}) => (
          <IconFs
            color={'#117295'}
            size={size}
            name={'angle-right'}
            style={{
              fontWeight: '100',
              position: 'absolute',
              right: 30,
            }}
          />
        )}
      />
      <DrawerItem
        style={{
          marginVertical: Sizes.mv,
          paddingBottom: 10,
          borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 0.5,
          borderBottomColor: '#B7B7B7',
        }}
        label="Gewerbe-Nachrichten"
        labelStyle={{
          position: 'absolute',
          top: -10,
          left: -30,
          fontSize: 16,
        }}
        onPress={() => props.navigation.navigate('Vereins-Nachrichten')}
        icon={({focused, color, size}) => (
          <IconFs
            color={'#117295'}
            size={size}
            name={'angle-right'}
            style={{
              fontWeight: '100',
              position: 'absolute',
              right: 30,
            }}
          />
        )}
      />
      <DrawerItem
        style={{
          marginVertical: Sizes.mv,
          paddingBottom: 10,
          borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 0.5,
          borderBottomColor: '#B7B7B7',
        }}
        label="Gastro-Nachrichten"
        labelStyle={{
          position: 'absolute',
          top: -10,
          left: -30,
          fontSize: 16,
        }}
        onPress={() => props.navigation.navigate('Gastro-Nachrichten')}
        icon={({focused, color, size}) => (
          <IconFs
            color={'#117295'}
            size={size}
            name={'angle-right'}
            style={{
              fontWeight: '100',
              position: 'absolute',
              right: 30,
            }}
          />
        )}
      />
      <DrawerItem
        style={{
          marginVertical: Sizes.mv,
          paddingBottom: 10,
          borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 0.5,
          borderBottomColor: '#B7B7B7',
        }}
        label="Rückmeldungen"
        labelStyle={{
          position: 'absolute',
          top: -10,
          left: -30,
          fontSize: 16,
        }}
        onPress={() => props.navigation.navigate('Rückmeldungen')}
        icon={({focused, color, size}) => (
          <IconFs
            color={'#117295'}
            size={size}
            name={'angle-right'}
            style={{
              fontWeight: '100',
              position: 'absolute',
              right: 30,
            }}
          />
        )}
      />
      <DrawerItem
        style={{
          marginVertical: Sizes.mv,
          paddingBottom: 10,
          borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 0.5,
          borderBottomColor: '#B7B7B7',
        }}
        label="Veranstaltungen"
        labelStyle={{
          position: 'absolute',
          top: -10,
          left: -30,
          fontSize: 16,
        }}
        onPress={() => props.navigation.navigate('Veranstaltungen')}
        icon={({focused, color, size}) => (
          <IconFs
            color={'#117295'}
            size={size}
            name={'angle-right'}
            style={{
              fontWeight: '100',
              position: 'absolute',
              right: 30,
            }}
          />
        )}
      />
      <DrawerItem
        style={{
          marginVertical: Sizes.mv,
          paddingBottom: 10,
          borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 0.5,
          borderBottomColor: '#B7B7B7',
        }}
        label="SBB-Tagekstarte"
        labelStyle={{
          position: 'absolute',
          top: -10,
          left: -30,
          fontSize: 16,
        }}
        onPress={() => props.navigation.navigate('SBBTageskarte')}
        icon={({focused, color, size}) => (
          <IconFs
            color={'#117295'}
            size={size}
            name={'angle-right'}
            style={{
              fontWeight: '100',
              position: 'absolute',
              right: 30,
            }}
          />
        )}
      />

      <DrawerItem
        style={{
          marginVertical: Sizes.mv,
          paddingBottom: 10,
          borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 0.5,
          borderBottomColor: '#B7B7B7',
        }}
        label="Mitteilungblatt"
        labelStyle={{
          position: 'absolute',
          top: -10,
          left: -30,
          fontSize: 16,
        }}
        onPress={() => props.navigation.navigate('Mitteilungsblatt')}
        icon={({focused, color, size}) => (
          <IconFs
            color={'#117295'}
            size={size}
            name={'angle-right'}
            style={{
              fontWeight: '100',
              position: 'absolute',
              right: 30,
            }}
          />
        )}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 65,
          marginTop: 75,
        }}>
        <DrawerItem
          label="Impressum |"
          onPress={() => props.navigation.navigate('Immpressum')}
        />
        <DrawerItem
          label="Datenschutz "
          onPress={() => props.navigation.navigate('Datenschutz')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
