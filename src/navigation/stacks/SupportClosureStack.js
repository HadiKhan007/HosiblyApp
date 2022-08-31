import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchSupportClosure from '../../screens/App/SearchSupportClosure';
import SupportProfile from '../../screens/App/SupportProfile';
import SupportUserReviews from '../../screens/App/SupportUserReviews';
import SupportAddReview from '../../screens/App/SupportAddReview';

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
      <Stack.Screen name="SupportProfile" component={SupportProfile} />
      <Stack.Screen name="SupportUserReviews" component={SupportUserReviews} />
      <Stack.Screen name="SupportAddReview" component={SupportAddReview} />
    </Stack.Navigator>
  );
}

export default SupportClosureStack;
