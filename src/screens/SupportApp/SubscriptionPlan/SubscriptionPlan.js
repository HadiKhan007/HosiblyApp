import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {appImages} from '../../../shared/theme/assets';
import styles from './styles';
import {colors, spacing} from '../../../shared/exporter';
import {BackHeader, MyStatusBar} from '../../../components';
import {getPaymentPackagesAction} from '../../../redux/actions/support-app-actions/support-app-actions';
import {useDispatch} from 'react-redux';

export default SubscriptionPlan = ({navigation}) => {
  const [price, setprice] = useState(false);
  const dispatch = useDispatch();
  const [paymentPackage, setPaymentPackage] = useState([]);
  const [subscription, setSubscription] = useState([]);

  useEffect(() => {
    getPaymentPackage();
  }, []);

  const getPaymentPackage = () => {
    try {
      const cbSuccess = res => {
        console.log('Res is ==> ', res?.message);
        setSubscription(res?.message);
      };
      const cbFailure = () => {};
      dispatch(getPaymentPackagesAction(cbSuccess, cbFailure));
    } catch (error) {
      console.log('ERROR ', error);
    }
  };

  const handleOnPress = item => {
    navigation.navigate('SubscriptionDetail', {item: item});
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
          <Text style={styles.textStyle}>Boost your profile!</Text>
          <Text style={styles.newtext}>
            To get more clients easily, you can boost your account and get
            noticed.
          </Text>
        </View>
        {subscription?.map((item, index) => {
          return (
            <SubscriptionButton
              item={item}
              index={index}
              onPress={() => handleOnPress(item)}
            />
          );
        })}
      </View>
      <View style={styles.footercon}>
        <Image source={appImages.rocket} />
      </View>
    </SafeAreaView>
  );
};
