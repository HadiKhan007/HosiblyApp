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
        console.log('SUB:  =>  ', res.subscription);
        if (res?.subscription == 'false') {
          return null;
        } else {
          setsubscribedPackage(res?.subscription);
        }

        setloading(false);
      };
      const cbFailure = err => {
        console.log(err);
        setloading(false);
      };
      dispatch(getSubscriptionAction(cbSuccess, cbFailure));
    } catch (error) {
      console.log(' ERROR ', error);
      setloading(false);
    }
  };

  const cancelSubscription = id => {
    setloading(true);
    const data = new FormData();
    data.append('subscription_id', id);
    console.log('FormData:  =>', data);

    try {
      const cbSuccess = res => {
        console.log('RES123==> ', res);
        Alert.alert('Your subscription has been cancelled.');
        setloading(false);
        getSubscribedPackage();
      };
      const cbFailure = () => {
        console.log('RES124==> ', res);
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
        {subscribedPackage != 'false' || null || undefined ? (
          <>
            <View style={spacing.my4}>
              <Text style={styles.textStyle}>
                {subscribedPackage?.status == 'active'
                  ? 'Package Subscribed!'
                  : 'Boost your Profile!'}
              </Text>
              <Text style={styles.newtext}>
                {subscribedPackage?.status == 'active'
                  ? ' Your amount will be deducted automatically after completing selected duration.You can cancel your subscription. '
                  : 'To get more clients easily, you can boost your account and get noticed.'}
              </Text>
            </View>

            {subscribedPackage?.status == 'active' ? (
              <View>
                <View style={styles.cardView}>
                  <View style={styles.cardInnerView}>
                    <Text style={styles.cardTextTitle}>Package</Text>
                    <Text style={styles.cardText}>
                      {subscribedPackage?.subscription_title}
                    </Text>
                  </View>
                  <View style={styles.cardInnerView}>
                    <Text style={styles.cardTextTitle}>Price</Text>
                    <Text style={styles.cardText}>
                      {subscribedPackage?.price}
                    </Text>
                  </View>
                  <View style={styles.cardInnerView}>
                    <Text style={styles.cardTextTitle}>Status</Text>
                    <Text style={styles.cardText}>Active</Text>
                  </View>

                  <View style={styles.cardInnerView}>
                    <Text style={styles.cardTextTitle}>Start Date:</Text>
                    <Text style={styles.cardText}>
                      {moment(subscribedPackage?.current_period_start).format(
                        'DD/MM/YYYY',
                      )}
                    </Text>
                  </View>
                  <View style={styles.cardInnerView}>
                    <Text style={styles.cardTextTitle}>End Date:</Text>
                    <Text style={styles.cardText}>
                      {moment(subscribedPackage?.current_period_end).format(
                        'DD/MM/YYYY',
                      ) || ''}
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: HP('2'), zIndex: 5}}>
                  <AppButton
                    bgColor={colors.r5}
                    borderColor={colors.r5}
                    title={'Cancel Subscription'}
                    width={WP('60')}
                    shadowColor={colors.white}
                    onPress={() =>
                      cancelSubscription(subscribedPackage?.subscription_id)
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
          </>
        ) : (
          <View style={{justifyContent: 'center', flex: 0.6}}>
            <Text style={{alignSelf: 'center', color: 'black'}}>
              There is an Subscription problem
            </Text>
          </View>
        )}
      </View>

      <View style={styles.footercon}>
        <Image style={{zIndex: 0}} source={appImages.rocket} />
        <AppLoader loading={loading} />
      </View>
    </SafeAreaView>
  );
};
