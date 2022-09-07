import {View, FlatList, SafeAreaView, Alert} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {
  checkConnected,
  colors,
  networkText,
  profile_uri,
  size,
  spacing,
} from '../../../shared/exporter';

import {useState} from 'react';
import {
  AppLoader,
  BackHeader,
  MyStatusBar,
  ReviewCard,
  ReviewHeader,
} from '../../../components';
import {get_filter_review_properties} from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/core';

const SupportReviews = ({route}) => {
  const [reviews, setReviews] = useState([]);
  const [totalRating, setTotalRating] = useState(0);
  const [choseStar, setchoseStar] = useState(5);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch(null);
  const isFocus = useIsFocused(null);
  const {userInfo} = useSelector(state => state?.auth);

  useEffect(() => {
    if (isFocus) {
      setReviews(
        route?.params?.item?.reviews?.filter(item => item?.rating == 5),
      );
    }
  }, [isFocus]);

  const getStarRating = async star => {
    const check = await checkConnected();
    if (check) {
      try {
        setVisible(false);
        setchoseStar(star);
        const requestBody = {
          rating: star,
          support_closer_id: userInfo?.user?.id,
        };
        //on Success
        const onSuccess = async res => {
          console.log(res);
          setReviews(res?.reviews);
          setTotalRating(res?.total_reviews);
        };
        //on Failure
        const onFailure = async res => {
          Alert.alert('Error', res);
        };
        dispatch(
          get_filter_review_properties(requestBody, onSuccess, onFailure),
        );
      } catch (error) {}
    } else {
      Alert.alert('Error', networkText);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar backgroundColor={colors.w2} />
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
        <View style={{flex: 1}}>
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
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SupportReviews;
