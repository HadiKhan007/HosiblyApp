import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, Switch} from 'react-native';
import {AppHeader, AppLoader, BackHeader, Spacer} from '../../../../components';
import {colors, WP} from '../../../../shared/exporter';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {getNotifyStatus, changeNotifyStatus} from '../../../../redux/actions';

const NewMessages = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [pushNotify, setPushNotify] = useState(false);
  const [inAppNotify, setInAppNotify] = useState(false);

  // redux stuff
  const dispatch = useDispatch();

  useEffect(() => {
    getPrevStatus();
  }, []);

  const getPrevStatus = () => {
    setLoading(true);
    try {
      const cbSuccess = res => {
        setLoading(false);
        setPushNotify(res?.push_notification);
        setInAppNotify(res?.inapp_notification);
      };
      const cbFailure = err => {
        setLoading(false);
      };
      dispatch(getNotifyStatus(cbSuccess, cbFailure));
    } catch (error) {
      setLoading(false);
    }
  };

  const togglePushNotify = () => {
    setLoading(true);
    try {
      const params = new FormData();
      params.append('push_notification', !pushNotify);
      const cbSuccess = res => {
        setLoading(false);
        alert(res?.message);
        setPushNotify(previousState => !previousState);
      };
      const cbFailure = err => {
        setLoading(false);
      };
      dispatch(changeNotifyStatus(params, cbSuccess, cbFailure));
    } catch (error) {
      setLoading(false);
    }
  };

  const toggleInAppNotify = () => {
    setLoading(true);
    try {
      const params = new FormData();
      params.append('inapp_notification', !inAppNotify);
      const cbSuccess = res => {
        setLoading(false);
        alert(res?.message);
        setInAppNotify(previousState => !previousState);
      };
      const cbFailure = err => {
        setLoading(false);
      };
      dispatch(changeNotifyStatus(params, cbSuccess, cbFailure));
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppLoader loading={loading} />
      <AppHeader subtitle={'New Messages'} />
      <BackHeader title={'New Messages'} />
      <Spacer androidVal={WP('8.2')} iOSVal={WP('8.2')} />
      <View style={styles.contentContainer}>
        <Text style={styles.descTxtStyle}>
          If you disable this notification, you will not get notify when someone
          messages you
        </Text>
        <View style={styles.rowContainer}>
          <Text style={styles.txtStyle}>Push Notifications</Text>
          <Switch
            value={pushNotify}
            thumbColor={colors.white}
            ios_backgroundColor={colors.g4}
            onValueChange={togglePushNotify}
            trackColor={{false: colors.g1, true: colors.p1}}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.txtStyle}>In-app Notifications</Text>
          <Switch
            value={inAppNotify}
            thumbColor={colors.white}
            ios_backgroundColor={colors.g4}
            onValueChange={toggleInAppNotify}
            trackColor={{false: colors.g1, true: colors.p1}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewMessages;
