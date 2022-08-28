import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {appIcons, appImages, colors, size} from '../../../shared/exporter';
import StarRating from 'react-native-star-rating';

import {useState} from 'react';
import {AppButton, AppStarRating} from '../../../components';

const AddReview = () => {
  return (
    <View>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.topContainer}>
        <View style={styles.arrowcon}>
          <TouchableOpacity onPress={() => {}}>
            <Image style={styles.imgIcon} source={appIcons.backArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewtext}>Add Reviews</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.imagestyle} source={appImages.personImg} />
      </View>

      <Text style={styles.nametext}>Harden Eusaff</Text>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Type here"
          placeholderTextColor={colors.b1}
          multiline={true}
          numberOfLines={12}
          style={{textAlignVertical: 'top', padding: 10}}
        />
      </View>
      <View style={styles.starRating}>
        <AppStarRating
          disabled={false}
          maxStars={5}
          fullStarColor={colors.starcolor}
          starSize={size.h6}
        />
      </View>
      <AppButton
        title="Post Review"
        width="40%"
        shadowColor=""
        marginVertical={40}
      />
    </View>
  );
};

export {AddReview};
