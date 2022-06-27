import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {appLogos} from '../../shared/theme/assets';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = () => {
    setTimeout(() => {
      navigation.replace('Walkthrough');
    }, 2500);
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <Image
        resizeMode="contain"
        source={appLogos.appLogo}
        style={styles.logoStyle}
      />
      <Text style={styles.logoTxtStyle}>Housibly</Text>
    </View>
  );
};

export default Splash;
