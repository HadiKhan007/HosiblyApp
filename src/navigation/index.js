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
import Settings from '../screens/App/Settings';
import MapScreen from '../screens/App/Home/MapScreen';
import AddPropertyDetails from '../screens/App/Home/AddPropertyDetails';
import AddMorePropertyDetail from '../screens/App/Home/AddMorePropertyDetail';
import AddPropertyDes from '../screens/App/Home/AddPropertyDes';
import PropertyDetail from '../screens/App/Home/PropertyDetail';
import AddAddress from '../screens/App/Home/AddAddress';

const AppStack = createNativeStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
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
        <AppStack.Screen name={'MapScreen'} component={MapScreen} />
        <AppStack.Screen name={'AddPropertyDesc'} component={AddPropertyDes} />
        <AppStack.Screen name={'PropertyDetail'} component={PropertyDetail} />
        <AppStack.Screen name={'AddAddress'} component={AddAddress} />

        <AppStack.Screen
          name={'AddPropertyDetails'}
          component={AddPropertyDetails}
        />
        <AppStack.Screen
          name={'AddMorePropertyDetails'}
          component={AddMorePropertyDetail}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
