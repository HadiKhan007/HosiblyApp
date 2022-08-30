// import * as RNIap from 'react-native-iap';
// import {Platform} from 'react-native';

// export async function isSubscriptionActive() {
//   try {
//     if (Platform.OS === 'ios') {
//       const availablePurchases = await RNIap?.getAvailablePurchases();
//       const sortedAvailablePurchases = availablePurchases.sort(
//         (a, b) => b.transactionDate - a.transactionDate,
//       );
//       const latestAvailableReceipt =
//         sortedAvailablePurchases[0]?.transactionReceipt;
//       const isTestEnvironment = __DEV__;
//       const decodedReceipt = await RNIap?.validateReceiptIos(
//         {
//           'receipt-data': latestAvailableReceipt,
//           password: '09eab6f73a2f440680d98b0c98bb2815',
//         },
//         true,
//       );
//       const {latest_receipt_info} = decodedReceipt;
//       const isSubValid = !!latest_receipt_info?.find(receipt => {
//         const expirationInMilliseconds = Number(receipt.expires_date_ms);
//         const nowInMilliseconds = Date?.now();
//         return expirationInMilliseconds > nowInMilliseconds;
//       });
//       const check = {
//         validation: isSubValid,
//         receipt: availablePurchases[0],
//       };
//       return check;
//     }

//     if (Platform.OS === 'android') {
//       const availablePurchases = await RNIap?.getAvailablePurchases();

//       let check;
//       for (let i = 0; i < availablePurchases.length; i++) {
//         if (
//           availablePurchases[i].productId &&
//           availablePurchases[i].autoRenewingAndroid
//         ) {
//           check = {
//             validation: true,
//             receipt: availablePurchases[i],
//           };
//         }
//       }
//       return check;
//     }
//   } catch (error) {
//     return false;
//   }
// }
