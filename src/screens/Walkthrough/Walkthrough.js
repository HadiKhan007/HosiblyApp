import React from 'react';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {Spacer, AppButton} from '../../components';
import {slidesData} from '../../shared/utilities/constant';
import {colors} from '../../shared/exporter';

const Walkthrough = ({navigation}) => {
  let slider = AppIntroSlider;

  const renderItem = ({item, index}) => {
    return <Image source={item.image} style={styles.bgImgStyle(index)} />;
  };

  const keyExtractor = item => item.title;

  return (
    <View style={styles.rootContainer}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View style={{flex: 1}}>
        <AppIntroSlider
          data={slidesData}
          ref={ref => (slider = ref)}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          dotStyle={styles.dotStyle}
          showSkipButton={false}
          showNextButton={false}
          showDoneButton={false}
          activeDotStyle={styles.activeDotStyle}
        />
        <View style={styles.contentContainer}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollViewStyle}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.titleTextStyle}>
              Matching Sellers &{'\n'}Buyers
            </Text>
            <Text style={styles.descTextStyle}>
              Schedule your match in just a few clicks
            </Text>
            <Spacer androidVal={54} iOSVal={54} />
            <AppButton
              shadowColor={colors.btn_shadow}
              title="Get Started"
              onPress={() => navigation.navigate('Auth')}
            />
            <Text style={styles.haveAccTxtStyle}>
              If you have an account,{' '}
              <Text
                style={styles.underlineTxtStyle}
                onPress={() => navigation.navigate('Auth')}>
                Sign in
              </Text>
            </Text>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </View>
  );
};

export default Walkthrough;
