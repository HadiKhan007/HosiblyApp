import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchSupportClosure from '../../screens/App/SearchSupportClosure';
import SupportProfile from '../../screens/App/SupportProfile';
import SupportUserReviews from '../../screens/App/SupportUserReviews';
import SupportReviews from '../../screens/SupportApp/SupportReview';

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
      <Stack.Screen name="SupportReviews" component={SupportReviews} />
    </Stack.Navigator>
  );
}

export default SupportClosureStack;
