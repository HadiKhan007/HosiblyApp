import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Conversations from '../../screens/App/Conversations';

const Stack = createNativeStackNavigator();

function MessagingStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Conversations"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Conversations" component={Conversations} />
    </Stack.Navigator>
  );
}

export default MessagingStack;
