import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MapScreen from '../../screens/App/Home/MapScreen';
import AllMatches from '../../screens/App/Home/AllMatches';

const Stack = createNativeStackNavigator();

function SearchStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="MapScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="AllMatches" component={AllMatches} />
    </Stack.Navigator>
  );
}

export default SearchStack;
