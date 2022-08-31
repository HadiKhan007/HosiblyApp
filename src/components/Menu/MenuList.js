import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Menu, MenuItem} from 'react-native-material-menu';
import {AppStarRating} from '..';

import {
  appIcons,
  colors,
  family,
  platformOrientedCode,
  scrWidth,
  size,
  WP,
} from '../../shared/exporter';

export const MenuList = ({
  menu_list,
  onSelect,
  setShowMenu,
  hideItemClick,
  showMenu,
}) => {
  return (
    <View style={styles.menuContainer}>
      <Menu
        visible={showMenu}
        style={styles.menuStyle}
        onRequestClose={() => setShowMenu(false)}>
        <FlatList
          data={menu_list}
          renderItem={() => {
            return (
              <MenuItem
                style={styles.menuItemStyle}
                textStyle={styles.menuTxtStyle}
                onPress={() => hideItemClick('Vacant Land')}>
                <View style={styles.menuItemRow}>
                  <AppStarRating
                    starStyle={styles.starRating}
                    disabled={false}
                    maxStars={1}
                    fullStarColor={colors.starcolor}
                    starSize={size.h6}
                  />
                  <Text>Vacant Land</Text>
                </View>
              </MenuItem>
            );
          }}
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    top: 0,
    right: 0,
    paddingLeft: WP('5.2'),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  menuStyle: {
    marginTop: WP('30'),
    marginLeft: -5,
    borderRadius: 8,
    height: WP('31'),
    width: scrWidth / 2.6,
  },
  menuItemStyle: {
    height: WP('10'),
  },
  menuItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: platformOrientedCode(WP('2'), WP('4.5')),
  },
  modelIconStyle: {
    width: 15,
    height: 14,
    marginRight: WP('3'),
  },
  menuTxtStyle: {
    color: colors.b1,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Regular,
    marginTop: platformOrientedCode(WP('2'), WP('3.5')),
  },
  dividerView: {
    top: 5,
    height: 1,
    width: '100%',
    backgroundColor: colors.g24,
  },
  starRating: {
    height: 12,
    width: 12,
    padding: 1,
  },
});
