import React, {useState} from 'react';
import {View, Text, StatusBar, ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, Spacer} from '../../../components';
import {appIcons, appImages, colors, WP} from '../../../shared/exporter';
import styles from './styles';

const SignupPurpose = ({navigation, route}) => {
  const [selected, setSelected] = useState('want_sell');

  const handleNavigation = () => {
    navigation.navigate('SignUp', {
      regPurpose: selected,
      item: route?.params?.modelItem,
    });
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <ImageBackground source={appImages.homeImg} style={styles.bgImgStyle}>
        <Text style={styles.helloTxtStyle}>Hello, roberto</Text>
        <Text style={styles.chooseTxtStyle}>
          Choose, What do you want to do?{' '}
        </Text>
      </ImageBackground>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.btnsContainer}>
          <AppButton
            borderRadius={32}
            height={WP('16.4')}
            title="I want to Sell"
            icon={appIcons.sellHome}
            style={styles.iconStyle}
            borderColor={colors.white}
            shadowColor={colors.white}
            onPress={() => setSelected('want_sell')}
            bgColor={selected === 'want_sell' ? colors.p1 : colors.g12}
            textColor={selected === 'want_sell' ? colors.white : colors.b1}
          />
          <AppButton
            borderRadius={32}
            height={WP('16.4')}
            title="I want to Buy"
            icon={appIcons.buyHome}
            style={styles.iconStyle}
            borderColor={colors.white}
            shadowColor={colors.white}
            onPress={() => setSelected('want_buy')}
            bgColor={selected === 'want_buy' ? colors.p1 : colors.g12}
            textColor={selected === 'want_buy' ? colors.white : colors.b1}
          />
          <AppButton
            borderRadius={32}
            height={WP('16.4')}
            title="I am a Support Closer"
            style={styles.iconStyle}
            borderColor={colors.white}
            shadowColor={colors.white}
            onPress={() => setSelected('contractor')}
            bgColor={selected === 'contractor' ? colors.s2 : colors.g12}
            textColor={selected === 'contractor' ? colors.white : colors.b1}
            icon={
              selected === 'contractor'
                ? appIcons.buyHome
                : appIcons.contractorHome
            }
          />
        </View>
        <View style={styles.bottomView}>
          <AppButton title="Next" onPress={() => handleNavigation()} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignupPurpose;
