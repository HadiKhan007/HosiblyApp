import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SupportNotification from '../../screens/SupportApp/SupportNotification';

const Stack = createNativeStackNavigator();

function NotificationStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SupportNotification"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SupportNotification"
        component={SupportNotification}
      />
    </Stack.Navigator>
  );
}

export default NotificationStack;
