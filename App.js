import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/redux/store';
import {colors} from './src/shared/exporter';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// ignore warnings
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

GoogleSignin.configure({
  webClientId:
    '859276342696-gm0lnsee2kjh5pvpj85gcm5enrkdgfr2.apps.googleusercontent.com',
});

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.s1}
        barStyle={'dark-content'}
      />
      <PersistGate persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
