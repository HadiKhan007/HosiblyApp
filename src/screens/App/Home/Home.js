import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {AppHeader, Spacer} from '../../../components';
import {WP} from '../../../shared/exporter';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader rightIcon />
      <Spacer androidVal={WP('4')} iOSVal={WP('4')} />
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
