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
import Support from '../screens/App/Profile/Support';
import SupportQuery from '../screens/App/Profile/SupportQuery';
import SupportChat from '../screens/App/Profile/SupportChat';
import AdminChat from '../screens/App/Home/AdminChat';
import FAQ from '../screens/App/Profile/FAQ';
import BlockedList from '../screens/App/Profile/BlockedList';
import MapScreen from '../screens/App/Home/MapScreen';
import MapProperty from '../screens/App/Home/MapProperty';
import AddPropertyDetails from '../screens/App/Home/AddPropertyDetails';
import PayMethod from '../screens/App/Profile/PayMethod';
import AllCards from '../screens/App/Profile/AllCards';
import CardDetails from '../screens/App/Profile/CardDetails';
import AddCard from '../screens/App/Payment/AddCard';
import EditCard from '../screens/App/Payment/EditCard';
import AddMorePropertyDetail from '../screens/App/Home/AddMorePropertyDetail';
import AddPropertyDes from '../screens/App/Home/AddPropertyDes';
import PropertyDetail from '../screens/App/Home/PropertyDetail';
import AddAddress from '../screens/App/Home/AddAddress';
import Chat from '../screens/App/Chat';
import Video from '../screens/App/Video';
import PropertyInfo from '../screens/App/Home/PropertyInfo';
import SupportBottomTab from './tabs/SupportBottomTab';
import ClosureStack from './SupportStack/ClosureStack';
import PersonChat from '../screens/App/Home/PersonChat';
import SupportEditProfile from '../screens/SupportApp/SupportEditProfile';
import SupportProfile from '../screens/App/SupportProfile';
import SearchSupportClosure from '../screens/App/SearchSupportClosure';
import SupportUserReviews from '../screens/App/SupportUserReviews';
import SupportAddReview from '../screens/App/SupportAddReview';
import ViewProperty from '../screens/App/Home/ViewProperty';
import SchoolDetails from '../screens/App/Home/SchoolDetails';

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
        {/* Buyer Screens */}
        <AppStack.Screen name={'FilterScreen'} component={FilterScreen} />
        <AppStack.Screen name={'SubFilterScreen'} component={SubFilterScreen} />
        <AppStack.Screen name={'Settings'} component={Settings} />
        <AppStack.Screen name={'Profile'} component={Profile} />
        <AppStack.Screen name={'EditProfile'} component={EditProfile} />

        <AppStack.Screen name={'Notifications'} component={Notifications} />
        <AppStack.Screen name={'Terms'} component={Terms} />
        <AppStack.Screen name={'PrivacyPolicy'} component={PrivacyPolicy} />
        <AppStack.Screen name={'Support'} component={Support} />
        <AppStack.Screen name={'SupportQuery'} component={SupportQuery} />
        <AppStack.Screen name={'SupportChat'} component={SupportChat} />
        <AppStack.Screen name={'AdminChat'} component={AdminChat} />
        <AppStack.Screen name={'FAQ'} component={FAQ} />
        <AppStack.Screen name={'BlockedList'} component={BlockedList} />
        <AppStack.Screen name={'NewMessages'} component={NewMessages} />
        <AppStack.Screen name={'MapScreen'} component={MapScreen} />
        <AppStack.Screen name={'MapProperty'} component={MapProperty} />
        <AppStack.Screen name={'AddCard'} component={AddCard} />
        <AppStack.Screen name={'EditCard'} component={EditCard} />
        <AppStack.Screen name={'AddPropertyDesc'} component={AddPropertyDes} />
        <AppStack.Screen name={'PropertyDetail'} component={PropertyDetail} />
        <AppStack.Screen name={'AddAddress'} component={AddAddress} />
        <AppStack.Screen name={'Chat'} component={Chat} />
        <AppStack.Screen name={'Video'} component={Video} />
        <AppStack.Screen name={'PropertyInfo'} component={PropertyInfo} />

        <AppStack.Screen
          name={'AddPropertyDetails'}
          component={AddPropertyDetails}
        />
        <AppStack.Screen name={'PayMethod'} component={PayMethod} />
        <AppStack.Screen name={'AllCards'} component={AllCards} />
        <AppStack.Screen name={'CardDetails'} component={CardDetails} />
        <AppStack.Screen
          name={'AddMorePropertyDetails'}
          component={AddMorePropertyDetail}
        />

        <AppStack.Screen name="SupportProfile" component={SupportProfile} />
        <AppStack.Screen
          name="SearchSupportClosure"
          component={SearchSupportClosure}
        />
        <AppStack.Screen
          name="SupportUserReviews"
          component={SupportUserReviews}
        />
        <AppStack.Screen name="SupportAddReview" component={SupportAddReview} />

        {/* Support Closure Screens */}
        <AppStack.Screen name={'SupportApp'} component={SupportBottomTab} />
        <AppStack.Screen
          name="SupportEditProfile"
          component={SupportEditProfile}
        />
        <AppStack.Screen name={'ClosureStack'} component={ClosureStack} />
        {/* Chat */}
        <AppStack.Screen name={'PersonChat'} component={PersonChat} />
        <AppStack.Screen name={'ViewProperty'} component={ViewProperty} />
        <AppStack.Screen name={'SchoolDetails'} component={SchoolDetails} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
