import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchSupportClosure from '../../screens/App/SearchSupportClosure';

const Stack = createNativeStackNavigator();

function SupportClosureStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SupportClosureStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SearchSupportClosure"
        component={SearchSupportClosure}
      />
    </Stack.Navigator>
  );
}

export default SupportClosureStack;
