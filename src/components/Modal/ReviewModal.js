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

export default ReviewModal;
