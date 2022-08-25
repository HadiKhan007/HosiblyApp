import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SupportHome from '../../screens/App/Home';

const Stack = createNativeStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SupportHome" component={SupportHome} />
      </Stack.Navigator>
  );
}

export default HomeStack;
