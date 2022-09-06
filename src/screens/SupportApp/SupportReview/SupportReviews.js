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
import {useDispatch} from 'react-redux';

const SupportReviews = ({route}) => {
  const [reviews, setReviews] = useState([]);
  const [totalRating, setTotalRating] = useState(0);
  const [choseStar, setchoseStar] = useState(5);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch(null);

  useEffect(() => {
    setReviews(route?.params?.item?.reviews?.filter(item => item?.rating == 5));
  }, []);

  const getStarRating = async star => {
    const check = await checkConnected();
    if (check) {
      try {
        const requestBody = {
          rating: star,
        };
        //on Success
        const onSuccess = async res => {
          setchoseStar(star);
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

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
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
