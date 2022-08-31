import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SubscriptionPlan from '../../screens/SupportApp/SubscriptionPlan';
import SubscriptionDetail from '../../screens/SupportApp/SubscriptionDetail';
import SubscriptionSuccess from '../../screens/SupportApp/SubscriptionSuccess';

const Stack = createNativeStackNavigator();

function ClosureStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="ClosureStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SubscriptionPlan" component={SubscriptionPlan} />
      <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail} />
      <Stack.Screen
        name="SubscriptionSuccess"
        component={SubscriptionSuccess}
      />
    </Stack.Navigator>
  );
}

export default ClosureStack;
