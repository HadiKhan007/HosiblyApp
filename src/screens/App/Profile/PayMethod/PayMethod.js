import React, {useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {AppButton, AppHeader, BackHeader, Spacer} from '../../../../components';
import {appIcons, colors, WP} from '../../../../shared/exporter';
import styles from './styles';

const PayMethod = ({navigation}) => {
  const [method, setMethod] = useState('cards');

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader subtitle={'Payment Method'} />
      <BackHeader
        // isBox={true}
        title={'Payment Method'}
        // boxIcon={
        //   <Icon name={'plus'} type={'entypo'} size={22} color={colors.white} />
        // }
      />
      <Spacer androidVal={WP('5.5')} iOSVal={WP('5.5')} />
      <View style={styles.contentContainer}>
        <Text style={styles.descTxtStyle}>
          Please setup your paymant method to get better delivery service
        </Text>
        <Text style={styles.payTxtStyle}>Payment Methods</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.itemContainer}
          onPress={() => setMethod('cards')}>
          <View style={styles.innerRow}>
            <Image
              resizeMode="contain"
              source={appIcons.cards}
              style={styles.iconStyle}
            />
            <View>
              <Text style={styles.titleTxtStyle}>Credit Card</Text>
              <Text style={styles.valTxtStyle}>**** **** **** 3456 Visa</Text>
            </View>
          </View>
          <Image
            resizeMode="contain"
            source={method === 'cards' ? appIcons.checked : appIcons.unchecked}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.itemContainer}
          onPress={() => setMethod('apple')}>
          <View style={styles.innerRow}>
            <Image
              resizeMode="contain"
              source={appIcons.apple}
              style={styles.iconStyle}
            />
            <View>
              <Text style={styles.titleTxtStyle}>Apple Pay</Text>
              <Text style={styles.valTxtStyle}>myemail.com</Text>
            </View>
          </View>
          <Image
            resizeMode="contain"
            source={method === 'apple' ? appIcons.checked : appIcons.unchecked}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.itemContainer}
          onPress={() => setMethod('google')}>
          <View style={styles.innerRow}>
            <Image
              resizeMode="contain"
              source={appIcons.cards}
              style={styles.iconStyle}
            />
            <View>
              <Text style={styles.titleTxtStyle}>Google Wallet</Text>
              <Text style={styles.valTxtStyle}>myemail.com</Text>
            </View>
          </View>
          <Image
            resizeMode="contain"
            source={method === 'google' ? appIcons.checked : appIcons.unchecked}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
      {method === 'cards' && (
        <View style={styles.bottomView}>
          <AppButton
            title="Continue"
            borderColor={colors.white}
            shadowColor={colors.white}
            onPress={() => navigation.navigate('AllCards')}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PayMethod;
