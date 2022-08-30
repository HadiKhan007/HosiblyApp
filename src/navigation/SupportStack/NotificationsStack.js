import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Notifications from '../../screens/App/Notifications';

const Stack = createNativeStackNavigator();

function NotificationsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Notifications"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}

export default NotificationsStack;
