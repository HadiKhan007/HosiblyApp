// import React from 'react';
// import {Image, Platform, StyleSheet} from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {appIcons, colors, WP} from '../../shared/exporter';

// import HomeStack from '../stacks/Fighter/HomeStack';
// import EventStack from '../stacks/Fighter/EventStack';
// import StreamingStack from '../stacks/Fighter/StreamingStack';
// import ChatStack from '../stacks/Fighter/ChatStack';

// const Tab = createBottomTabNavigator();

// export default BottomTabs = ({}) => {
//   let hasNotch = DeviceInfo.hasNotch();

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: Platform.select({
//           android: styles.barStyle,
//           ios: hasNotch ? styles.notchBarStyle : styles.barStyle,
//         }),
//       }}
//       tabBarOptions={{
//         showLabel: false,
//       }}
//       initialRouteName={'Home'}>
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image
//               resizeMode="contain"
//               source={focused ? appIcons.fistSelIcon : appIcons.fistIcon}
//               style={styles.fistIconStyle}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Event"
//         component={EventStack}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image
//               resizeMode="contain"
//               source={focused ? appIcons.eventsSelIcon : appIcons.eventsIcon}
//               style={styles.eventIconStyle}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="AddEvent"
//         component={EventStack}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image
//               resizeMode="contain"
//               source={appIcons.addIcon}
//               style={styles.addIconStyle}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Streaming"
//         component={StreamingStack}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image
//               resizeMode="contain"
//               source={focused ? appIcons.videoSelIcon : appIcons.videoIcon}
//               style={styles.videoIconStyle}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Chat"
//         component={ChatStack}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image
//               resizeMode="contain"
//               source={focused ? appIcons.chatSelIcon : appIcons.chatIcon}
//               style={styles.chatIconStyle}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   barStyle: {
//     height: WP('20'),
//     borderWidth: 0.5,
//     position: 'absolute',
//     paddingHorizontal: 5,
//     borderColor: colors.g22,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     backgroundColor: colors.white,
//   },
//   notchBarStyle: {
//     paddingTop: 20,
//     height: WP('23'),
//     borderWidth: 0.5,
//     position: 'absolute',
//     paddingHorizontal: 5,
//     borderColor: colors.g22,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     backgroundColor: colors.white,
//   },
//   addIconStyle: {
//     width: WP('14.5'),
//     height: WP('14.5'),
//   },
//   fistIconStyle: {
//     width: WP('6'),
//     height: WP('6'),
//   },
//   eventIconStyle: {
//     width: WP('7.2'),
//     height: WP('7.2'),
//   },
//   videoIconStyle: {
//     width: WP('7'),
//     height: WP('7.5'),
//   },
//   chatIconStyle: {
//     width: WP('5.2'),
//     height: WP('5.2'),
//   },
// });
