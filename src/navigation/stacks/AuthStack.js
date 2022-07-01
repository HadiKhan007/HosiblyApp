import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/Auth/Login';
import PrivacyPolicy from '../../screens/Auth/PrivacyPolicy';
import TermsConditions from '../../screens/Auth/TermsConditions';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import ResetPassword from '../../screens/Auth/ResetPassword';
import VerifyOTP from '../../screens/Auth/VerifyOTP';
import VerifyPhone from '../../screens/Auth/VerifyPhone';

const Stack = createNativeStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
    </Stack.Navigator>
  );
}

export default AuthStack;
