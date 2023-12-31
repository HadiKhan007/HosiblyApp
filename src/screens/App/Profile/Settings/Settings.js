import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import {AppButton, AppHeader, BackHeader, Spacer} from '../../../../components';
import {colors, settings, WP} from '../../../../shared/exporter';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';
import {logoutRequset} from '../../../../redux/actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/routers';

const Settings = ({navigation}) => {
  const dispatch = useDispatch(null);

  const logout = async () => {
    const token = await AsyncStorage.getItem('fcmToken');
    const body = {
      mtoken: token,
    };
    dispatch(
      logoutRequset(body, () => {
        GoogleSignin.signOut();
        AsyncStorage.removeItem('usertoken');
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Auth'}],
          }),
        );
      }),
    );
  };

  const shareLink = async () => {
    const result = await Share.share({
      title: 'Housibly',
      message: `www.playstore.com/register/bryan-123/regi...`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader subtitle={'Settings'} />
      <BackHeader title={'Settings'} />
      <Spacer androidVal={WP('12')} iOSVal={WP('12')} />
      {settings?.map(item => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (item?.id == 1) {
                shareLink();
              } else {
                navigation.navigate(item.screen);
              }
            }}
            style={styles.rowContainer}>
            <View style={styles.innerRow}>
              <Image
                resizeMode="contain"
                source={item.icon}
                style={styles.iconStyle}
              />
              <Text style={styles.txtStyle}>{item.title}</Text>
            </View>
            <Icon
              name={'right'}
              type={'antdesign'}
              size={20}
              color={colors.g35}
            />
          </TouchableOpacity>
        );
      })}
      <View style={styles.bottomView}>
        <AppButton
          bgColor={colors.r3}
          borderColor={colors.r3}
          shadowColor={colors.white}
          title={'Logout'}
          onPress={() => logout()}
          textColor={colors.r1}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
