import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import StarRating from 'react-native-star-rating';
import {appIcons, colors} from '../../shared/exporter';

const AppStarRating = ({
  disabled,
  maxStars,
  rating,
  starStyle,
  onChangeStar,
  onPressStar,
}) => {
  return (
    <View style={styles.starRating}>
      <StarRating
        disabled={disabled}
        maxStars={maxStars}
        rating={rating}
        emptyStarColor={colors.g46}
        fullStar={appIcons.starIcon}
        emptyStar={appIcons.emptyStar}
        starStyle={starStyle}
        selectedStar={onPressStar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export {AppStarRating};
