import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {appIcons, appImages} from '../../../shared/theme/assets';
import styles from './styles';
import {AppButton, BackHeader, MyStatusBar} from '../../../components';
import {colors} from '../../../shared/exporter';
import {useDispatch} from 'react-redux';
import {createSubscriptionAction} from '../../../redux/actions/support-app-actions/support-app-actions';
import {err} from 'react-native-svg/lib/typescript/xml';

const SubscriptionDetail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [item, setitem] = useState(route?.params?.item);
  const proceedToPayment = () => {
    try {
      const data = new FormData();
      data.append('price_id', item?.stripe_price_id);
      const cbSuccess = res => {
        console.log('Subscribe PACKAGE Success ==> ', res);
      };
      const cbFailure = err => {
        console.log('ERROR ', err);
      };
      dispatch(createSubscriptionAction(data, cbSuccess, cbFailure));
    } catch (error) {
      console.log('ERROR ', error);
    }
  };
  {
    console.log('ROUTE ', item);
  }
  return (
    <View style={styles.rootContainer}>
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
              onPress={
                () => proceedToPayment()
                // navigation.navigate('SubscriptionSuccess', route?.params?.item);
              }
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
