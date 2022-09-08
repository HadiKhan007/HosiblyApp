import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {appIcons, appImages} from '../../../shared/theme/assets';
import styles from './styles';
import {colors, spacing} from '../../../shared/exporter';
import {BackHeader, MyStatusBar} from '../../../components';

export default SubscriptionPlan = ({navigation}) => {
  const [price, setprice] = useState('2.99');
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={styles.contentContainer}>
        <BackHeader />
        <Image source={appImages.bookmark} />
        <View style={spacing.my4}>
          <Text style={styles.textStyle}>Boost your profile!</Text>
          <Text style={styles.newtext}>
            To get more clients easily, you can boost your account and get
            noticed.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.touchOpac}
          onPress={() => {
            setprice('2.99');
            navigation?.navigate('SubscriptionDetail', {
              item: {price: 2.99, title: '$2.99/1Month'},
            });
          }}>
          <LinearGradient
            start={{x: 0.3, y: 0.3}}
            end={{x: 5, y: 5.0}}
            locations={[0, 0.1, 0.9]}
            colors={price != '2.99' ? colors.gr1 : colors.gr2}
            style={styles.linearGradient}>
            <Text style={styles.btntext}>$2.99/1Month</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setprice('5.99');
            navigation?.navigate('SubscriptionDetail', {
              item: {price: 5.99, title: '$5.99/1Quarter'},
            });
          }}
          style={styles.touch2Opac}>
          <LinearGradient
            start={{x: 0.3, y: 0.3}}
            end={{x: 5, y: 5.0}}
            locations={[0, 0.1, 0.9]}
            colors={price != '5.99' ? colors.gr1 : colors.gr2}
            style={styles.linearGradient}>
            <Text style={styles.btn2text}>$5.99/1Quarter</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setprice('7.99');
            navigation?.navigate('SubscriptionDetail', {
              item: {price: 7.99, title: '$5.99/1Year'},
            });
          }}
          style={styles.touch2Opac}>
          <LinearGradient
            start={{x: 0.3, y: 0.3}}
            end={{x: 5, y: 5.0}}
            locations={[0, 0.1, 0.9]}
            colors={price != '7.99' ? colors.gr1 : colors.gr2}
            style={styles.linearGradient}>
            <Text style={styles.btn3text}>$7.99/1Year</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.footercon}>
        <Image source={appImages.rocket} />
      </View>
    </SafeAreaView>
  );
};