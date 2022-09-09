import messaging from '@react-native-firebase/messaging';
import PushNotification, {Importance} from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export async function requestPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus == messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus == messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      let token = await getFcmToken();
      return token;
    }
  } catch (error) {
    // User has rejected permissions
    console.log('token permission rejected');
  }
}
const getFcmToken = async () => {
  let oldToken = await AsyncStorage.getItem('fcmToken');
  if (oldToken == null) {
    try {
      messaging()
        .hasPermission()
        .then(async enabled => {
          if (enabled) {
            let token = await messaging().getToken();
            console.log('Token', token);
            AsyncStorage.setItem('fcmToken', token);
          } else {
            messaging()
              .requestPermission()
              .then(() => {
                console.log('+++ PERMISSION REQUESTED +++++');
              })
              .catch(error => {
                console.log(' +++++ ERROR RP ++++ ' + error);
              });
          }
        })
        .catch(error => {
          console.log(' +++++ ERROR +++++ ' + error);
        });
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log(oldToken);
    return oldToken;
  }
};

export const Notification_Listner = (dispatch, navigation) => {
  messaging().onNotificationOpenedApp(async remoteMessage => {
    onClickNotification(remoteMessage, dispatch, navigation);
  });
  messaging().onMessage(async remoteMessage => {
    console.log('Remote Notitifcation', remoteMessage);
    LocalNotification(remoteMessage, dispatch, navigation);
  });
  messaging().getInitialNotification(async remoteMessage => {
    if (remoteMessage) {
      console.log('Initial Notification', remoteMessage.notification);
    }
  });
};

export const LocalNotification = (notify, dispatch, navigation) => {
  PushNotification.localNotification({
    channelId: 'FairFight',
    title: notify?.notification?.title,
    smallIcon: 'ic_notification',
    largeIcon: 'ic_launcher',
    message: notify?.notification?.body,
    vibrate: true, // (optional) default: true
    vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    playSound: true, // (optional) default: true
    soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
  });
  PushNotification.createChannel(
    {
      channelId: 'FairFight', // (required)
      channelName: 'FairFight', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      if (notification.userInteraction) {
        onClickNotification(notify, dispatch, navigation);
      } else {
        console.log('User received notification');
      }
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios' ? true : false,
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  });
};

const onClickNotification = (notify, dispatch, navigation) => {
  console.log('Notification', notify);
  const notificationObj = notify?.data;
  const dataObj = JSON?.parse(notificationObj?.data);
  switch (notificationObj?.type) {
    case 'Event created':
      navigation?.navigate('Notifications', {item: dataObj});
      break;
    case 'Stream started':
      navigation?.navigate('EventDetails', {item: dataObj, showLink: true});
      break;
    case 'Event accepted by opponent':
      navigation?.navigate('Notifications', {item: dataObj});
      break;
    case 'Stream ended':
      navigation?.navigate('StreamEnded', {item: dataObj});
      break;
    // case 'Event accepted by opponent':
    //   navigation?.navigate('NewsFeed', {item: dataObj});
    //   break;

    default:
      break;
  }
};
