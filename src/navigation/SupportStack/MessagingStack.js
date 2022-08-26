import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SupportMessaging from '../../screens/SupportApp/SupportMessaging';

const Stack = createNativeStackNavigator();

function MessagingStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SupportMessaging"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="supportMessaging" component={SupportMessaging} />
    </Stack.Navigator>
  );
}

export default MessagingStack;
