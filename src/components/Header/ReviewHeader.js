import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {WP, size, colors, family, appIcons} from '../../shared/exporter';
import {AppStarRating} from '..';
import Icon from 'react-native-vector-icons/AntDesign';
import {Menu} from 'react-native-material-menu';

export const ReviewHeader = ({
  title,
  onPressItem,
  showMenu,
  onPresMenu,
  star,
}) => {
  return (
    <View style={styles.starContainer}>
      <Text style={styles.reviewtext}>{title || 'Reviews(43)'}</Text>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.aiRow} onPress={onPresMenu}>
          <AppStarRating
            starStyle={styles.headerStarStyle}
            disabled={true}
            maxStars={1}
            rating={1}
            fullStarColor={colors.starcolor}
            starSize={size.h6}
          />
          <Text style={styles.reviewtext}>{star}</Text>

          <Icon style={styles.iconStyle} name={'down'} size={15} />
        </TouchableOpacity>

        <Menu
          onRequestClose={onPresMenu}
          style={styles.menuStyle}
          visible={showMenu}>
          {[5, 4, 3, 2, 1].map(item => {
            return (
              <TouchableOpacity
                onPress={() => onPressItem(item)}
                style={styles.menuItem}>
                <AppStarRating
                  rating={5}
                  starStyle={[styles.starStyle, {margin: 3}]}
                  disabled={false}
                  maxStars={item}
                  fullStarColor={colors.starcolor}
                  starSize={size.small}
                />

                <Text style={styles.starText}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </Menu>
      </View>
    </View>
  );
};

export default ReviewHeader;

const styles = StyleSheet.create({
  reviewtext: {
    color: colors.b1,
    fontSize: size.medium,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  itemContainer: {
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuItem: {
    paddingHorizontal: 20,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  menuStyle: {
    marginTop: 15,
    height: WP('50'),
    width: WP('42'),
    borderRadius: 10,
    shadowColor: colors.shad1,
    elevation: 8,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 1,
  },

  nameText: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Gilroy_SemiBold,
  },
  starText: {
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: family.Gilroy_Medium,
  },
  iconStyle: {
    paddingHorizontal: 5,
    color: colors.b10,
    border: 1.5,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerStarStyle: {
    height: 16,
    width: 16,
  },
  starStyle: {
    padding: 1,
    width: 12,
    height: 12,
  },
});
