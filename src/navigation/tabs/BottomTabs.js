import React from 'react';
import {View, Image, Platform, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {appIcons, colors, WP} from '../../shared/exporter';

import HomeStack from '../stacks/HomeStack';
import SearchStack from '../stacks/SearchStack';
import BookMarksStack from '../stacks/BookMarksStack';
import TopTabs from '../tabs/TopTabs';

const Tab = createBottomTabNavigator();

export default BottomTabs = ({}) => {
  let hasNotch = DeviceInfo.hasNotch();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          android: styles.barStyle,
          ios: hasNotch ? styles.notchBarStyle : styles.barStyle,
        }),
        borderTopColor: 'transparent',
        shadowColor: 'transparent',
        borderTopWidth: 0,
        elevation: 0,
      }}
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                resizeMode="contain"
                source={appIcons.homeIcon}
                style={styles.iconStyle(focused)}
              />
              <View style={styles.barViewStyle(focused)} />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                resizeMode="contain"
                source={appIcons.searchIcon}
                style={styles.iconStyle(focused)}
              />
              <View style={styles.barViewStyle(focused)} />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="BookMarks"
        component={BookMarksStack}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                resizeMode="contain"
                source={appIcons.bookmarksIcon}
                style={styles.bookmarksIconStyle(focused)}
              />
              <View style={styles.barViewStyle(focused)} />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="TopTabs"
        component={TopTabs}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                resizeMode="contain"
                source={appIcons.messageIcon}
                style={styles.iconStyle(focused)}
              />
              <View style={styles.barViewStyle(focused)} />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    height: WP('17'),
    borderTopWidth: 0,
    position: 'absolute',
    paddingHorizontal: 5,
    backgroundColor: colors.white,
  },
  notchBarStyle: {
    paddingTop: 20,
    borderTopWidth: 0,
    height: WP('20.5'),
    paddingHorizontal: 5,
    backgroundColor: colors.white,
  },
  iconStyle: isFocused => {
    return {
      width: 24,
      height: 24,
      tintColor: isFocused ? colors.p2 : colors.g13,
    };
  },
  bookmarksIconStyle: isFocused => {
    return {
      width: 21,
      height: 24,
      tintColor: isFocused ? colors.p2 : colors.g13,
    };
  },
  barViewStyle: isFocused => {
    return {
      width: 14,
      height: 3,
      marginTop: 6,
      borderRadius: 1.5,
      backgroundColor: isFocused ? colors.p1 : colors.white,
    };
  },
});
