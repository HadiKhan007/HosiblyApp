import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import Walkthrough from '../screens/Walkthrough';
import AuthStack from '../navigation/stacks/AuthStack';
import BottomTabs from '../navigation/tabs/BottomTabs';
import FilterScreen from '../screens/App/FilterScreen';
import SubFilterScreen from '../screens/App/SubFilterScreen';
import Profile from '../screens/App/Profile';
import EditProfile from '../screens/App/EditProfile';
import Settings from '../screens/App/Profile/Settings';
import Notifications from '../screens/App/Profile/Notifications';
import NewMessages from '../screens/App/Profile/NewMessages';
import Terms from '../screens/App/Profile/Terms';
import PrivacyPolicy from '../screens/App/Profile/PrivacyPolicy';
import FAQ from '../screens/App/Profile/FAQ';
import MapScreen from '../screens/App/Home/MapScreen';
import AddPropertyDetails from '../screens/App/Home/AddPropertyDetails';

const AppStack = createNativeStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="App"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'Walkthrough'} component={Walkthrough} />
        <AppStack.Screen name={'Auth'} component={AuthStack} />
        <AppStack.Screen name={'App'} component={BottomTabs} />
        <AppStack.Screen name={'FilterScreen'} component={FilterScreen} />
        <AppStack.Screen name={'SubFilterScreen'} component={SubFilterScreen} />
        <AppStack.Screen name={'Profile'} component={Profile} />
        <AppStack.Screen name={'EditProfile'} component={EditProfile} />
        <AppStack.Screen name={'Settings'} component={Settings} />
        <AppStack.Screen name={'Notifications'} component={Notifications} />
        <AppStack.Screen name={'Terms'} component={Terms} />
        <AppStack.Screen name={'PrivacyPolicy'} component={PrivacyPolicy} />
        <AppStack.Screen name={'FAQ'} component={FAQ} />
        <AppStack.Screen name={'NewMessages'} component={NewMessages} />
        <AppStack.Screen name={'MapScreen'} component={MapScreen} />
        <AppStack.Screen
          name={'AddPropertyDetails'}
          component={AddPropertyDetails}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
