import {View, FlatList, SafeAreaView, Alert} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {
  appImages,
  checkConnected,
  colors,
  commonStyles,
  networkText,
  responseValidator,
  size,
  spacing,
} from '../../../shared/exporter';

import {useState} from 'react';
import {
  AppButton,
  BackHeader,
  MyStatusBar,
  ReviewCard,
  ReviewHeader,
} from '../../../components';
import {get_filter_review_properties} from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/core';
import {getSupportReviewsApi} from '../../../shared/service/SupportService';

const SupportUserReviews = ({navigation, route}) => {
  const [reviews, setReviews] = useState([]);
  const [totalRating, setTotalRating] = useState(0);
  const [choseStar, setchoseStar] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch(null);
  const isFocus = useIsFocused(null);
  const {support_detail} = useSelector(state => state?.supportReducer);

  useEffect(() => {
    if (isFocus) {
      getRatings();
    }
  }, [isFocus]);

  //Get Star Rating
  const getStarRating = async star => {
    const check = await checkConnected();
    if (check) {
      try {
        setVisible(false);
        setchoseStar(star);
        const requestBody = {
          rating: star,
          support_closer_id: support_detail?.support_closer?.id,
        };
        //on Success
        const onSuccess = async res => {
          setVisible(false);
          setReviews(res?.reviews);
          setTotalRating(res?.total_reviews);
        };
        //on Failure
        const onFailure = async res => {
          // Alert.alert('Error', res);
        };
        dispatch(
          get_filter_review_properties(requestBody, onSuccess, onFailure),
        );
      } catch (error) {}
    } else {
      Alert.alert('Error', networkText);
    }
  };
  //Get Rating
  const getRatings = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        const requestBody = {
          support_closer_id: support_detail?.support_closer?.id,
        };
        const res = await getSupportReviewsApi(requestBody);
        if (res) {
          setReviews(res?.reviews);
          setTotalRating(res?.total_reviews);
          setchoseStar('');
        }
      } catch (error) {
        let msg = responseValidator(
          error?.response?.status,
          error?.response?.data,
        );
        // Alert.alert('Error', msg || 'Something went wrong!');
      }
    } else {
      Alert.alert('Error', networkText);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar barStyle={'dark-content'} backgroundColor={colors.w2} />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Reviews'} />
      </View>
      <View style={styles.contentContainer}>
        <ReviewHeader
          showMenu={visible}
          onPresMenu={() => {
            setVisible(!visible);
          }}
          onPressItem={res => {
            getStarRating(res);
          }}
          star={choseStar}
          title={totalRating || 0}
        />

        {/* LIST */}
        <View style={commonStyles.flex1}>
          <FlatList
            data={reviews}
            renderItem={({item}) => {
              return (
                <View>
                  <ReviewCard
                    image={{uri: item?.reviewed_user_image || profile_uri}}
                    title={item?.reviewed_user_name}
                    description={item?.review || ''}
                    star={5}
                    rating={item?.rating}
                  />
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <AppButton
          onPress={() => {
            navigation?.navigate('SupportAddReview');
          }}
          width={'60%'}
          fontSize={size.tiny}
          title={'Add Review'}
          bgColor={colors.p1}
        />
      </View>
    </SafeAreaView>
  );
};

export default SupportUserReviews;
