import React, {useState} from 'react';
import {Text, View, Image, SafeAreaView, ImageBackground} from 'react-native';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppHeader, BackHeader, Spacer} from '../../../../components';
import {
  appIcons,
  appImages,
  appLogos,
  colors,
  WP,
} from '../../../../shared/exporter';
import styles from './styles';

const CardDetails = ({navigation}) => {
  const [method, setMethod] = useState('cards');

  const RenderRow = ({title, value}) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.titleTxtStyle}>{title}</Text>
        <Text style={styles.valueTxtStyle}>{value}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader subtitle={'Credit Card Details'} />
      <BackHeader
        isBox={true}
        title={'Credit Card Details'}
        boxIcon={
          <Icon
            name={'dots-three-horizontal'}
            type={'entypo'}
            size={18}
            color={colors.white}
          />
        }
      />

      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          resizeMode="contain"
          source={appImages.cardBg}
          style={styles.bgImgStyle}>
          <View style={styles.imgView}>
            <View>
              <Image
                resizeMode="contain"
                source={appIcons.visa}
                style={styles.iconStyle}
              />
              <Text style={styles.catTxtStyle}>Platinum</Text>
            </View>
            <Text style={styles.numTxtStyle}>• • • • 0212</Text>
          </View>
        </ImageBackground>
        <RenderRow title="Card Holder Name" value="Harden Eusaff" />
        <RenderRow title="Ending in" value="0212" />
        <RenderRow title="Expiry" value="01/23" />
        <RenderRow
          title="Card Holder Address"
          value="31901 Thornridge Cir. Shiloh, Hawaii 81063"
        />
        <Text style={styles.transTxtStyle}>Last Transactions</Text>
        <View style={styles.itemContainer}>
          <View style={styles.row}>
            <View style={styles.logoContainer}>
              <Image source={appLogos.appLogo} style={styles.imgStyle} />
            </View>
            <View>
              <Text style={styles.txtStyle}>Housibly</Text>
              <Text style={styles.timeTxtStyle}>2 hr ago</Text>
            </View>
          </View>
          <Text style={styles.valTxtStyle}>$100.00</Text>
        </View>
        <Spacer androidVal={WP('5.5')} iOSVal={WP('5.5')} />
      </KeyboardAwareScrollView>
      <View style={styles.bottomView}>
        <AppButton
          title="Proceed"
          onPress={() => handleNavigation()}
          borderColor={colors.white}
          shadowColor={colors.white}
        />
      </View>
    </SafeAreaView>
  );
};

export default CardDetails;
