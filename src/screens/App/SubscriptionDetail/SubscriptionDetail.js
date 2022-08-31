import {Text, View, TouchableOpacity, Image, StatusBar} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {appIcons, appImages} from '../../../shared/theme/assets';
import styles from './styles';
import { AppButton } from '../../../components';
import {colors} from '../../../shared/exporter';


const SubscriptionDetail = () => {
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
              <Text style={styles.text}>$2.99/1Month</Text>
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
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={styles.footercon}>
          <Image source={appImages.rocket} />
        </View>
      </View>
    </>
  );
};

export {SubscriptionDetail};
