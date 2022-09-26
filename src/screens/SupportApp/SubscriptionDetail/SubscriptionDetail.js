import React, {useState} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {appImages} from '../../../shared/theme/assets';
import styles from './styles';
import {
  AppButton,
  BackHeader,
  MyStatusBar,
  AppLoader,
} from '../../../components';
import {colors} from '../../../shared/exporter';
import {useDispatch} from 'react-redux';
import {createSubscriptionAction} from '../../../redux/actions/support-app-actions/support-app-actions';

const SubscriptionDetail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState(route?.params?.item);

  const proceedToPayment = () => {
    try {
      setIsLoading(true);
      const data = new FormData();
      data.append('price_id', item?.stripe_price_id);
      const cbSuccess = res => {
        setIsLoading(false);
        console.log('Subscribe Package Res ==> ', res);
        navigation.navigate('SubscriptionSuccess', {item: item});
      };
      const cbFailure = err => {
        setIsLoading(false);
        Alert.alert('Add Card', 'Please enter your card first', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
          },
          {text: 'OK', onPress: () => navigation.navigate('AllCards')},
        ]);
        console.log('ERROR => ', err);
      };
      dispatch(createSubscriptionAction(data, cbSuccess, cbFailure));
    } catch (error) {
      setIsLoading(false);
      console.log('ERROR ', error);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <AppLoader loading={isLoading} />
      <MyStatusBar backgroundColor={colors.bl1} barStyle={'light-content'} />
      <View style={styles.midContainer}>
        <View style={styles.gradientContainer}>
          <LinearGradient
            style={styles.lineargradient}
            start={{x: 0.3, y: 0.3}}
            end={{x: 5, y: 5.0}}
            locations={[0, 0.1, 0.9]}
            colors={colors.gr2}>
            <View style={styles.arrowcon}>
              <BackHeader tintColor={colors.white} />
              <Text style={styles.text}>
                ${item?.price}/{item?.name}
              </Text>
            </View>
          </LinearGradient>
          <View style={styles.midContainer}>
            <Text style={styles.textStyle}>Boost your profile!</Text>
            <Text style={styles.newtext}>
              Boosting your account might attract more attention and client.
            </Text>
            <Text style={styles.bottomtext}>
              Are you sure you want to boost your profile?
            </Text>
            <AppButton
              title="Proceed To Payment"
              width="80%"
              shadowColor={colors.btn_shadow}
              onPress={() => proceedToPayment()}
            />
          </View>
        </View>
        <View style={styles.footercon}>
          <Image source={appImages.rocket} />
        </View>
      </View>
    </View>
  );
};

export default SubscriptionDetail;
