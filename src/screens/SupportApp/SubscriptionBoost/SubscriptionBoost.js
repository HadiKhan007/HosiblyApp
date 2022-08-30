import {Text, View, TouchableOpacity, Image, StatusBar} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {appIcons, appImages} from '../../../shared/theme/assets';
import styles from './styles';
import {colors} from '../../../shared/exporter';

const SubscriptionBoost = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={styles.rootContainer}>
        <View style={styles.gradientContainer}>
          <LinearGradient
            style={styles.lineargradient}
            start={{x: 0.3, y: 0.3}}
            end={{x: 5, y: 5.0}}
            locations={[0, 0.1, 0.9]}
            colors={colors.gr2}>
            <View style={styles.arrowcon}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={styles.iconstyle}
                  source={appIcons.whitebackarrow}
                />
              </TouchableOpacity>
              <Text style={styles.text}>$15.00</Text>
              <Text style={styles.subtext}>What you paid</Text>
            </View>
          </LinearGradient>
          <View style={styles.midContainer}>
            <Text style={styles.textStyle}>Congratulations!</Text>
            <Text style={styles.newtext}>
              Your account is now subscribed to account booster.
            </Text>
            <Text style={styles.boosttext}>Your account is boosted until:</Text>
            <Text style={styles.datetext}> April 23, 2022 </Text>
          </View>
        </View>
        <View style={styles.footercon}>
          <Image source={appImages.rocketluancher} />
        </View>
      </View>
    </>
  );
};

export {SubscriptionBoost};
