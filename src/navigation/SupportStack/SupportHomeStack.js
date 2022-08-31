import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SupportHome from '../../screens/SupportApp/SupportHome';
import SupportReviews from '../../screens/SupportApp/SupportReview';

const Stack = createNativeStackNavigator();

function SupportHomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SupportHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SupportHome" component={SupportHome} />
      <Stack.Screen name="SupportReviews" component={SupportReviews} />
    </Stack.Navigator>
  );
}

export default SupportHomeStack;
