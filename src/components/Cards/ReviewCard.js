import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colors, family, size, WP} from '../../shared/exporter';
import {AppStarRating, UserCard} from '..';

export const ReviewCard = ({id, title, description, image, star}) => {
  return (
    <View key={id} style={styles.topView}>
      <UserCard image={image} height={61} width={61} />
      <View style={styles.innerView}>
        <View style={styles.centerView}>
          <Text style={styles.nameText}>{title}</Text>
          {star && (
            <AppStarRating
              style={styles.starRating}
              disabled={true}
              maxStars={star}
              fullStarColor={colors.starcolor}
              starSize={size.tiny}
            />
          )}
        </View>
        <View style={styles.commitContainer}>
          <Text style={styles.commenttext}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    padding: WP('2'),
    marginVertical: 5,
  },
  starRating: {
    flexDirection: 'row',
    padding: 1,
    width: 12,
    height: 12,
  },
  innerView: {
    marginLeft: 10,
  },
  centerView: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Gilroy_SemiBold,
    marginRight: 10,
  },
  starRating: {
    flexDirection: 'row',
    marginLeft: 1,
    padding: 1,
    width: 12,
    height: 12,
  },
  commitContainer: {
    marginRight: 50,
    marginLeft: 2,
  },
  commenttext: {
    paddingRight: 10,
    fontSize: size.tiny,
    color: colors.g42,
    fontFamily: family.Gilroy_Regular,
  },
});
