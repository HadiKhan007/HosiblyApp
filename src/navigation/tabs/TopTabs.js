import React from 'react';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors, family, size} from '../../shared/exporter';

import Conversations from '../../screens/App/Conversations';
import Notifications from '../../screens/App/Notifications';

const Tab = createMaterialTopTabNavigator();

export default TopTabs = ({}) => {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            elevation: 0, // for Android
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
            },
          },
          swipeEnabled: false,
          tabBarLabelStyle: styles.tabLabelStyle,
          tabBarIndicatorStyle: styles.tabBarStyle,
          tabBarActiveTintColor: colors.b1,
          tabBarInactiveTintColor: colors.g43,
        }}
        initialRouteName={'Conversations'}>
        <Tab.Screen name="Messages" component={Conversations} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS == 'android' ? 40 : 0,
  },
  tabLabelStyle: {
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
  },
  tabBarStyle: {
    height: 3,
    backgroundColor: colors.p1,
  },
});
