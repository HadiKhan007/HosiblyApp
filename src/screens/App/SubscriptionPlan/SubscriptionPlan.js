import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {appIcons, appImages} from '../../../shared/theme/assets';
import React from 'react';
import styles from './styles';
import {colors} from '../../../shared/exporter';

const SubscriptionPlan = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.rootContainer}>
        <View style={styles.arrowcon}>
          <TouchableOpacity onPress={() => {}}>
            <Image style={styles.imgIcon} source={appIcons.backArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <Image source={appImages.bookmark} />
          <Text style={styles.textStyle}>Boost your profile!</Text>
          <Text style={styles.newtext}>
            To get more clients easily, you can boost your account and get
            noticed.
          </Text>
          <TouchableOpacity style={styles.touchOpac} onPress={() => {}}>
            <LinearGradient
              start={{x: 0.3, y: 0.3}}
              end={{x: 5, y: 5.0}}
              locations={[0, 0.1, 0.9]}
              colors={colors.gr2}
              style={styles.linearGradient}>
              <Text style={styles.btntext}>$2.99/1Month</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch2Opac} onPress={() => {}}>
            <Text style={styles.btn2text}>$5.99/1Quarter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch2Opac} onPress={() => {}}>
            <Text style={styles.btn3text}>$7.99/1Year</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footercon}>
          <Image source={appImages.rocket} />
        </View>
      </View>
    </>
  );
};

export {SubscriptionPlan};
