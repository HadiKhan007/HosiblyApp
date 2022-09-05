import {Text, View, Image, FlatList, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  appImages,
  checkConnected,
  colors,
  networkText,
  responseValidator,
  size,
  spacing,
} from '../../../shared/exporter';

import {
  AppButton,
  AppLoader,
  AppStarRating,
  BackHeader,
  MyStatusBar,
  TextBox,
} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {addSupportReviewApi} from '../../../shared/service/SupportService';

export default SupportAddReview = ({navigation}) => {
  const [rating, setrating] = useState(0);
  const [description, setdescription] = useState('');
  const [loading, setLoading] = useState(false);
  const {support_detail} = useSelector(state => state?.supportReducer);

  const dispatch = useDispatch(null);

  //On Add Reviews
  const onAddReviewa = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        if (rating && description) {
          setLoading(true);
          const form = new FormData();
          form.append('support_closer_id', support_detail?.id);
          form.append('review[description]', description);
          form?.append('review[rating]', rating);
          const res = await addSupportReviewApi(form);
          if (res) {
            setLoading(false);
            Alert.alert('Success', 'Review added successfully!', [
              {
                text: 'OK',
                onPress: () => {
                  navigation?.goBack();
                },
              },
            ]);
          }
        } else {
          Alert.alert('Error', 'Please add reviews!');
        }
      } catch (error) {
        setLoading(false);
        let msg = responseValidator(
          error?.response?.status,
          error?.response?.data,
        );
        Alert.alert('Error', msg || 'Something went wrong!');
      }
    } else {
      Alert.alert('Error', networkText);
    }
  };
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
            <TextBox
              onChangeText={text => {
                setdescription(text);
              }}
              value={description}
              placeholder={'Type here'}
            />
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
            onPress={onAddReviewa}
            title="Post Review"
            width="40%"
            shadowColor=""
            marginVertical={40}
            fontSize={size.tiny}
          />
          <AppLoader loading={loading} />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
