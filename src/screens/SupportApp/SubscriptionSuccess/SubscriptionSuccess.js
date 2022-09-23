import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {appImages} from '../../../shared/theme/assets';
import styles from './styles';
import {colors} from '../../../shared/exporter';
import {BackHeader, MyStatusBar} from '../../../components';

const SubscriptionSuccess = ({navigation, route}) => {
  const [item, setItem] = useState(route?.params?.item);

  return (
    <View style={styles.rootContainer}>
      <MyStatusBar backgroundColor={colors.bl1} barStyle={'light-content'} />

      <View style={styles.rootContainer}>
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
              <Text style={styles.subtext}>Subcribed</Text>
            </View>
          </LinearGradient>
          <View style={styles.midContainer}>
            <Text style={styles.textStyle}>Congratulations!</Text>
            <Text style={styles.newtext}>
              Your account is now subscribed to account booster. This will
              attract more potential clients.
            </Text>
          </View>
        </View>
        <View style={styles.footercon}>
          <Image source={appImages.rocketluancher} />
        </View>
      </View>
    </View>
  );
};

export default SubscriptionSuccess;
