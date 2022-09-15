import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MapScreen from '../../screens/App/Home/MapScreen';

const Stack = createNativeStackNavigator();

function SearchStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="MapScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default SearchStack;
