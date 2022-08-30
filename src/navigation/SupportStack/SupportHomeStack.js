import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SupportHome from '../../screens/SupportApp/SupportHome';
import SupportReviews from '../../screens/SupportApp/SupportReview';
import SupportEditProfile from '../../screens/SupportApp/SupportEditProfile';
import SubscriptionPlan from '../../screens/SupportApp/SubscriptionPlan';
import SubscriptionDetail from '../../screens/SupportApp/SubscriptionDetail';

const Stack = createNativeStackNavigator();

function SupportHomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SupportHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SupportHome" component={SupportHome} />
      <Stack.Screen name="SupportReviews" component={SupportReviews} />
      <Stack.Screen name="SupportEditProfile" component={SupportEditProfile} />
      <Stack.Screen name="SubscriptionPlan" component={SubscriptionPlan} />
      <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail} />
    </Stack.Navigator>
  );
}

export default SupportHomeStack;
