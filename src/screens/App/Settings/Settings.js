import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppButton, BackHeader, MyStatusBar} from '../../../components';
import {colors, spacing} from '../../../shared/exporter';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {logoutRequset} from '../../../redux/actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Settings = ({navigation}) => {
  const dispatch = useDispatch(null);
  const logout = async () => {
    dispatch(
      logoutRequset(null, () => {
        navigation?.replace('Auth');
        GoogleSignin.signOut();
      }),
    );
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />

      <View style={spacing.my2}>
        <BackHeader subtitle={'Settings'} />
      </View>
      <View style={styles.contentContainer}>
        <AppButton
          bgColor={colors.r1}
          borderColor={colors.r1}
          shadowColor={colors.white}
          title={'Logout'}
          onPress={() => {
            logout();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
