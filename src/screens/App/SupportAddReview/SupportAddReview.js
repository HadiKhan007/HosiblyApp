import {Text, View, Image, FlatList, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {appImages, colors, size, spacing} from '../../../shared/exporter';

import {
  AppButton,
  AppStarRating,
  BackHeader,
  MyStatusBar,
  TextBox,
} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default SupportAddReview = () => {
  const [rating, setrating] = useState(0);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <BackHeader subtitle={'Add Review'} />
      <View style={styles.contentContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image style={styles.imagestyle} source={appImages.personImg} />
          </View>

          <Text style={styles.nametext}>Harden Eusaff</Text>

          <View style={spacing.my4}>
            <TextBox placeholder={'Type here'} />
            <AppStarRating
              onPressStar={rating => {
                setrating(rating);
              }}
              starStyle={styles.starRating}
              fullStarColor={colors.y1}
              disabled={false}
              rating={rating}
            />
          </View>
          <AppButton
            title="Post Review"
            width="40%"
            shadowColor=""
            marginVertical={40}
            fontSize={size.tiny}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
