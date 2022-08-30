import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import {
  colors,
  WP,
  family,
  size,
  appIcons,
  appImages,
} from '../../shared/exporter';
import React, {useState} from 'react';
import {AppStarRating} from '../AppButton/AppStarRating';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

const ReviewModal = () => {
  const [visible, setVisible] = useState(false);
  return;
  <View
    style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
    <Menu
      visible={visible}
      anchor={<Text onPress={showMenu}>Show menu</Text>}
      onRequestClose={hideMenu}>
      <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
      <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
      <MenuItem disabled>Disabled item</MenuItem>
      <MenuDivider />
      <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
    </Menu>
  </View>;
};
// const ReviewModal = ({show}) => {
//   console.log(show);
//   return (
//     <Modal visible={show}>
//       <View style={styles.modalContainer}>
//         <View style={styles.Container}>
//           <AppStarRating
//             disabled={false}
//             maxStars={5}
//             fullStarColor={colors.starcolor}
//             starSize={size.small}
//           />
//           <Text style={styles.text}>5</Text>
//         </View>
//         <View style={styles.Container}>
//           <AppStarRating
//             disabled={false}
//             maxStars={4}
//             fullStarColor={colors.starcolor}
//             starSize={size.small}
//           />
//           <Text style={styles.text}>4</Text>
//         </View>
//         <View style={styles.Container}>
//           <AppStarRating
//             disabled={false}
//             maxStars={3}
//             fullStarColor={colors.starcolor}
//             starSize={size.small}
//           />
//           <Text style={styles.text}>3</Text>
//         </View>
//         <View style={styles.Container}>
//           <AppStarRating
//             disabled={false}
//             maxStars={2}
//             fullStarColor={colors.starcolor}
//             starSize={size.small}
//           />
//           <Text style={styles.text}>2</Text>
//         </View>
//         <View style={styles.Container}>
//           <AppStarRating
//             disabled={false}
//             maxStars={1}
//             fullStarColor={colors.starcolor}
//             starSize={size.small}
//           />
//           <Text style={styles.text}>1</Text>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     borderRadius: 8,
//     paddingTop: WP('3.5'),
//     backgroundColor: 'red',
//     marginHorizontal: WP('30'),
//     paddingBottom: WP('2'),
//   },
//   Container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   starRating: {
//     marginLeft: 15,
//     padding: 3,
//     width: 12,
//     height: 12,
//   },
//   text: {
//     paddingRight: 10,
//   },
// });
export default ReviewModal;
