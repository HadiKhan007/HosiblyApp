import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {appImages} from '../../../shared/theme/assets';
import styles from './styles';
import {colors, family, HP, spacing, WP} from '../../../shared/exporter';
import {useIsFocused} from '@react-navigation/core';

import {
  BackHeader,
  MyStatusBar,
  AppButton,
  AppLoader,
} from '../../../components';
import {
  getPaymentPackagesAction,
  getSubscriptionAction,
  cancelSubscriptionAction,
} from '../../../redux/actions/support-app-actions/support-app-actions';
import {useDispatch} from 'react-redux';
import moment from 'moment';

export default SubscriptionPlan = ({navigation}) => {
  const [price, setprice] = useState(false);
  const dispatch = useDispatch();
  const [paymentPackage, setPaymentPackage] = useState([]);
  const [subscription, setSubscription] = useState([]);
  const [subscribedPackage, setsubscribedPackage] = useState([]);
  const [loading, setloading] = useState(false);
  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      getPaymentPackage();
      getSubscribedPackage();
    }
  }, [isFocus]);

  const getPaymentPackage = () => {
    setloading(true);
    try {
      const cbSuccess = res => {
        setSubscription(res?.message);
        setloading(false);
      };
      const cbFailure = () => {
        setloading(false);
      };
      dispatch(getPaymentPackagesAction(cbSuccess, cbFailure));
    } catch (error) {
      console.log('ERROR ', error);
      setloading(false);
    }
  };

  const handleOnPress = item => {
    navigation.navigate('SubscriptionDetail', {item: item});
  };

  const getSubscribedPackage = () => {
    setloading(true);
    try {
      const cbSuccess = res => {
        setsubscribedPackage(res?.subscription);
        setloading(false);
      };
      const cbFailure = err => {
        console.log(err);
        setloading(false);
      };
      dispatch(dispatch(getSubscriptionAction(cbSuccess, cbFailure)));
    } catch (error) {
      console.log(' ERROR ', error);
      setloading(false);
    }
  };

  const cancelSubscription = id => {
    setloading(true);
    const data = new FormData();
    data.append('subscription_id', id);
    try {
      const cbSuccess = res => {
        Alert.alert('Your subscription has been cancelled.');
        setloading(false);
        getSubscribedPackage();
      };
      const cbFailure = () => {
        setloading(false);
      };
      dispatch(cancelSubscriptionAction(data, cbSuccess, cbFailure));
    } catch (error) {
      setloading(false);
      console.log('ERROR ', error);
    }
  };

  const SubscriptionButton = ({item, index, onPress}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.touchOpac}>
        <LinearGradient
          start={{x: 0.3, y: 0.3}}
          end={{x: 5, y: 5.0}}
          locations={[0, 0.1, 0.9]}
          colors={!price ? colors.gr1 : colors.gr2}
          style={styles.linearGradient}>
          <Text style={styles.btntext}>
            ${item?.price ? item?.price : ''}/ {item?.name}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={styles.contentContainer}>
        <BackHeader />
        <Image source={appImages.bookmark} />
        <View style={spacing.my4}>
          <Text style={styles.textStyle}>
            {subscribedPackage[0]?.status == 'active'
              ? 'Package Subscribed!'
              : 'Boost your Profile!'}
          </Text>
          <Text style={styles.newtext}>
            {subscribedPackage[0]?.status == 'active'
              ? ' Your amount will be deducted automatically after completing selected duration.You can cancel your subscription. '
              : 'To get more clients easily, you can boost your account and get noticed.'}
          </Text>
        </View>
        {subscribedPackage[0]?.status == 'active' ? (
          <View>
            <View style={styles.cardView}>
              <View style={styles.cardInnerView}>
                <Text style={styles.cardTextTitle}>Package</Text>
                <Text style={styles.cardText}>
                  {subscribedPackage[0]?.subscription_title}
                </Text>
              </View>
              <View style={styles.cardInnerView}>
                <Text style={styles.cardTextTitle}>Price</Text>
                <Text style={styles.cardText}>
                  {subscribedPackage[0]?.price}
                </Text>
              </View>
              <View style={styles.cardInnerView}>
                <Text style={styles.cardTextTitle}>Status</Text>
                <Text style={styles.cardText}>
                  {/* {subscribedPackage[0]?.status} */}
                  Active
                </Text>
              </View>

              <View style={styles.cardInnerView}>
                <Text style={styles.cardTextTitle}>Start Date:</Text>
                <Text style={styles.cardText}>
                  {moment(subscribedPackage[0]?.current_period_start).format(
                    'L',
                  )}
                </Text>
              </View>
              <View style={styles.cardInnerView}>
                <Text style={styles.cardTextTitle}>End Date:</Text>
                <Text style={styles.cardText}>
                  {moment(subscribedPackage[0]?.current_period_start).format(
                    'L',
                  )}
                </Text>
              </View>
            </View>
            <View style={{marginTop: HP('2')}}>
              <AppButton
                bgColor={colors.r5}
                borderColor={colors.r5}
                title={'Cancel Subscription'}
                width={WP('60')}
                shadowColor={colors.white}
                onPress={
                  // () => cancelSubscription(23)
                  () =>
                    cancelSubscription(subscribedPackage[0]?.subscription_id)
                }
              />
            </View>
          </View>
        ) : (
          subscription?.map((item, index) => {
            return (
              <SubscriptionButton
                item={item}
                index={index}
                onPress={() => handleOnPress(item)}
              />
            );
          })
        )}
      </View>
      <View style={styles.footercon}>
        <Image source={appImages.rocket} />
        <AppLoader loading={loading} />
      </View>
    </SafeAreaView>
  );
};
