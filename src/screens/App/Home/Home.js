import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import {Menu, MenuItem} from 'react-native-material-menu';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppHeader,
  PersonDetailsModal,
  Spacer,
} from '../../../components';
import {
  WP,
  colors,
  scrWidth,
  appIcons,
  appImages,
  scrHeight,
  networkText,
  checkConnected,
} from '../../../shared/exporter';
import styles from './styles';
// Tabs
import BuyTab from './Tabs/BuyTab/BuyTab';
import MatchesTab from './Tabs/MatchesTab/MatchesTab';
import SellTab from './Tabs/SellTab/SellTab';
import {useIsFocused} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {
  get_buyer_properties,
  get_recent_properties,
} from '../../../redux/actions';
import {localNotificationService} from '../../../shared/service/notification-service/LocalNotificationService';
import {fcmService} from '../../../shared/service/notification-service/FCMService';

const Home = ({navigation}) => {
  const carouselRef = useRef(null);
  const [hideAds, setHideAds] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState('buy');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const isFocus = useIsFocused(null);
  const dispatch = useDispatch();
  const {recent_properties, buyer_data} = useSelector(
    state => state?.appReducer,
  );
  const {userInfo} = useSelector(state => state?.auth);
  const {userProfile} = useSelector(state => state?.settings);

  const hideItemClick = () => {
    setShowMenu(false);
    setHideAds(true);
  };

  const seeAllItemClick = () => {
    setShowMenu(false);
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation?.navigate('SupportClosureStack');
        }}
        style={styles.itemContainer}>
        <View style={styles.itemInnerRow}>
          <Image source={appImages.personImg} style={styles.personImgStyle} />
          <View style={styles.txtContainer}>
            <Text style={styles.itemNameStyle}>Harden Eusaff</Text>
            <Text style={styles.h1TxtStyle}>Corporate Home X</Text>
            <Text style={styles.h2TxtStyle}>Home Inspector</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.iconContainer}
            onPress={() => setShowMenu(true)}>
            <Icon
              type={'entypo'}
              name={'dots-three-horizontal'}
              size={16}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    //  console.log("OK")
    setupNotifications();
  }, []);

  // ==== Notification Code ========
  const setupNotifications = () => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);
  };

  const onRegister = async token => {
    try {
      sendFCMTokenToServer(token);
    } catch (err) {}
  };

  const onNotification = async (notifyRes, remoteMessage) => {
    console.log('[remoteMessage home]', remoteMessage);
    console.log('[notifyRes home]', notifyRes);
    try {
      let notify = {
        ...remoteMessage.data,
        ...remoteMessage.notification,
      };

      const options = {
        soundName: 'default',
        playSound: true,
      };

      localNotificationService.showNotification(
        '0',
        notify.title,
        notify.body,
        notify,
        options,
      );
    } catch (err) {
      console.log('[errrr]', err);
      //  alert("err in home!!", err);
    }
  };

  const onOpenNotification = async (notify, remoteMessage) => {
    console.log('NOTIFICATION PAYLOAD  ', notify);
  };

  const sendFCMTokenToServer = async fcmToken => {
    console.log('[FCM TOKEN==>]', fcmToken);
    // try {
    //   if (fcmToken) {
    //     console.log('[FCM Token]\n\n\n\n', fcmToken);
    //     try {
    //       let data = new FormData();
    //       data.append('token', fcmToken);
    //       const cbSuccess = res => {
    //         console.log('[Notification sent to server Yeaaaaaaaah!!!!]');
    //       };
    //       const cbFailure = err => {};
    //       dispatch(sendFCMtoken(data, token, cbSuccess, cbFailure));
    //     } catch (err) {
    //       setLoading(false);
    //     }
    //   }
    // } catch (error) {
    //   console.log('[error]', error);
    // }
  };

  //Get Properties
  useEffect(() => {
    if (isFocus) {
      getProperties();
    }
  }, [isFocus]);

  //Get Properties
  const getProperties = () => {
    if (selected == 'sell') {
      getRecentProperties();
    } else if (selected == 'buy') {
      getbuyerProperties();
    }
  };

  //Get Recent Properties
  const getRecentProperties = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const onSuccess = res => {
          setLoading(false);
        };
        const onFailure = res => {
          setLoading(false);
          Alert.alert('Error', res);
          console.log('On Recent prop Failure', res);
        };
        dispatch(get_recent_properties(null, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  //Get Buyer Properties
  const getbuyerProperties = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const onSuccess = res => {
          setLoading(false);
          console.log('On Buyer prop Success');
        };
        const onFailure = res => {
          setLoading(false);
          Alert.alert('Error', res);
          console.log('On Buyer prop Failure', res);
        };
        dispatch(get_buyer_properties(null, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader
        onPressIcon={() => {
          navigation.navigate('Profile');
        }}
        rightIcon
        img={userProfile?.user?.image || userInfo?.user?.image}
      />
      <Spacer androidVal={WP('4')} iOSVal={WP('4')} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.innerViewStyle}>
          <View style={styles.rowContainer}>
            <View>
              <Text style={styles.propertyTxtStyle}>Find a property</Text>
              <View style={styles.innerRow}>
                <Image source={appIcons.locIcon} style={styles.locIconStyle} />
                <Text style={styles.locTxtStyle}>New York, US</Text>
                <Icon
                  type={'feather'}
                  name={'chevron-down'}
                  size={16}
                  color={colors.g2}
                  onPress={() => {}}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <Image source={appImages.personPh1} style={styles.phImgStyle} />
          </View>
          {!hideAds && (
            <Carousel
              ref={carouselRef}
              sliderWidth={scrWidth}
              sliderHeight={scrHeight}
              itemWidth={scrWidth / 1.15}
              data={[1, 2, 3]}
              renderItem={renderItem}
            />
          )}
          <View style={styles.menuContainer}>
            <Menu
              visible={showMenu}
              style={styles.menuStyle}
              onRequestClose={() => setShowMenu(false)}>
              <MenuItem
                style={styles.menuItemStyle}
                textStyle={styles.menuTxtStyle}
                onPress={() => hideItemClick()}>
                Hide this ad
              </MenuItem>
              <MenuItem
                style={styles.menuItemStyle}
                textStyle={styles.menuTxtStyle}
                onPress={() => seeAllItemClick()}>
                See All
              </MenuItem>
            </Menu>
          </View>
          <View style={styles.paddingView}>
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSelected('buy')}
                style={styles.tabStyle(selected === 'buy')}>
                <Text style={styles.tabTxtStyle(selected === 'buy')}>
                  I Want To Buy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSelected('matches')}
                style={styles.tabStyle(selected === 'matches')}>
                <Text style={styles.tabTxtStyle(selected === 'matches')}>
                  My Matches
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setSelected('sell');
                  getRecentProperties();
                }}
                style={styles.tabStyle(selected === 'sell')}>
                <Text style={styles.tabTxtStyle(selected === 'sell')}>
                  I Want To Sell
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {selected === 'buy' && (
            <BuyTab buyer_data={buyer_data} navigation={navigation} />
          )}
          {selected === 'matches' && <MatchesTab navigation={navigation} />}
          {selected === 'sell' && (
            <View style={{height: scrWidth / 1.2}}>
              <SellTab properties={recent_properties} navigation={navigation} />

              <View style={styles.bottomView}>
                <AppButton
                  width="38.5%"
                  height={WP('10.3')}
                  title="Enter Address"
                  borderColor={colors.p2}
                  shadowColor={colors.white}
                  textStyle={styles.btnTxtStyle}
                />
                <View style={{width: WP('3')}} />
                <AppButton
                  onPress={() => {
                    navigation?.navigate('AddPropertyDetails');
                  }}
                  width="38.5%"
                  height={WP('10.3')}
                  borderColor={colors.p2}
                  title="List A New Property"
                  textStyle={styles.btnTxtStyle}
                />
              </View>
            </View>
          )}
        </View>
        <PersonDetailsModal
          show={showModal}
          onPressHide={() => setShowModal(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
