import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import styles from './styles';
import {
  AppButton,
  AppLoader,
  AppStarRating,
  BackHeader,
  GalleryCard,
  MyStatusBar,
  ProfileField,
  UserCard,
  ReviewCard,
} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  appIcons,
  appImages,
  checkConnected,
  colors,
  networkText,
  profile_uri,
  responseValidator,
  shortenBytes,
  size,
  spacing,
  WP,
} from '../../../shared/exporter';
import {Divider, Icon} from 'react-native-elements';
import {CetificationCard} from '../../../components/Cards/CertificationCard';
import {selected_suuport_user_data} from '../../../redux/actions';
import {
  getSupportReviewsApi,
  getSupportVisitorApi,
} from '../../../shared/service/SupportService';

const SupportHome = ({navigation}) => {
  const dispatch = useDispatch(null);
  const [data, setData] = useState([]);
  const [userImage, setUserImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [profileVisitors, setProfileVisitors] = useState([]);
  const {userInfo} = useSelector(state => state?.auth);
  const {support_detail} = useSelector(state => state?.supportReducer);
  const isFocus = useIsFocused(null);

  useEffect(() => {
    if (isFocus) {
      getprofileData();
      getRatings();
      getProfileVisitors();
    }
  }, [isFocus]);

  //Get Profile Data
  const getprofileData = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        const onSuccess = async res => {
          console.log('get Support Success');
        };
        const onFailure = async res => {
          console.log('Error', res);
          Alert.alert('Error', res);
        };
        const requestBody = {
          support_closer_id: userInfo?.user?.id,
        };
        dispatch(selected_suuport_user_data(requestBody, onSuccess, onFailure));
      } catch (error) {}
    } else {
      Alert.alert('Error', networkText);
    }
  };

  const getRatings = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        const requestBody = {
          support_closer_id: userInfo?.user?.id,
        };
        const res = await getSupportReviewsApi(requestBody);
        if (res) {
          setReviews(res);
        }
      } catch (error) {
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
  const getProfileVisitors = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        const requestBody = {
          support_closer_id: userInfo?.user?.id,
        };
        const res = await getSupportVisitorApi(requestBody);
        if (res) {
          setProfileVisitors(res);
        }
      } catch (error) {
        console.log(error);
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
      <View style={spacing.my2}>
        <BackHeader
          noBackIcon={true}
          subtitle={'Your Profile'}
          rightIcon={
            <Icon
              type={'ionicons'}
              name={'settings'}
              onPress={() => {
                navigation?.navigate('Settings');
              }}
            />
          }
        />
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: WP('15')}}>
        <View style={styles.contentContainer}>
          <View style={spacing.py4}>
            <View style={styles.imgCon}>
              <Image
                style={styles.imgStyle}
                source={{
                  uri:
                    support_detail?.support_closer?.profile_images ||
                    profile_uri,
                }}
              />
            </View>
            <Text style={styles.h1}>
              {support_detail?.support_closer?.full_name || 'username'}
            </Text>
            <Text style={styles.h2}>
              Company {support_detail?.support_closer?.full_name || 'username'}
            </Text>
            <View style={styles.aiRow}>
              <View style={styles.starCon}>
                <Image style={styles.starStyle} source={appIcons.star} />
              </View>
              <View style={styles.textCon}>
                <Text style={styles.text1}>Ratings</Text>
                <Text style={styles.text2}>
                  {support_detail?.support_closer?.rating || 0}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('SupportEditProfile');
              }}
              style={styles.iconCon}>
              <Image style={styles.iconStyle} source={appIcons.bgPencil} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('ClosureStack');
              }}
              style={[styles.iconCon, {top: 75, backgroundColor: colors.y1}]}>
              <Image style={styles.iconStyle} source={appIcons.yellowStar} />
            </TouchableOpacity>
          </View>
          <View style={spacing.my4}>
            <Text style={styles.desc}>
              {support_detail?.support_closer?.description ||
                'Describe something'}
            </Text>
          </View>
          <Divider color={colors.g18} />
          <View style={spacing.py4}>
            {
              <FlatList
                data={support_detail?.support_closer?.professions}
                renderItem={({item}) => {
                  return (
                    <ProfileField
                      title={'Profession'}
                      subtitle={item?.title || 'Home Inspector, AC Repair'}
                      subColor={colors.p1}
                    />
                  );
                }}
                keyExtractor={index => index?.toString()}
              />
            }

            <ProfileField
              title={'Email Address'}
              subtitle={
                support_detail?.support_closer?.email || 'email-address'
              }
            />
            <ProfileField
              title={'Phone Number'}
              subtitle={`+${
                support_detail?.support_closer?.country_code || ''
              }${support_detail?.support_closer?.phone_number || '2232131213'}`}
            />
            <ProfileField
              title={'Hourly Rate ($)'}
              subtitle={support_detail?.support_closer?.hourly_rate || 0}
            />
          </View>
          <Divider color={colors.g18} />
          {support_detail?.support_closer?.uploded_images.length > 0 && (
            <>
              <Text style={styles.text3}>Uploaded Photos</Text>
              <GalleryCard
                noUploadIcon={true}
                imageArray={support_detail?.support_closer?.uploded_images}
              />
            </>
          )}
          {support_detail?.support_closer?.certificates.length > 0 && (
            <>
              <Text style={styles.text3}>Uploaded Documents</Text>
              {support_detail?.support_closer?.certificates?.map(item => {
                return (
                  <CetificationCard
                    title={item?.certificate}
                    subtitle={shortenBytes(item?.size)}
                    style={{fontSize: 14}}
                  />
                );
              })}
            </>
          )}
        </View>
        <View>
          {profileVisitors?.visitor?.length > 0 && (
            <View style={styles.cardViewCon}>
              <Text style={styles.reviewtext}>Who Viewed Your Profile?</Text>
              <View style={spacing.py4}>
                <FlatList
                  data={profileVisitors?.visitor}
                  renderItem={() => {
                    return (
                      <View style={spacing.pr2}>
                        <UserCard
                          height={61}
                          width={61}
                          image={appImages.hanna}
                        />
                      </View>
                    );
                  }}
                  horizontal={true}
                />
              </View>
            </View>
          )}
          {reviews?.length > 0 && (
            <View style={styles.cardViewCon}>
              <View style={styles.starContainer}>
                <Text style={styles.reviewtext}>Your Reviews(43)</Text>
                <AppStarRating
                  starStyle={styles.starRating}
                  disabled={true}
                  rating={support_detail?.support_closer?.rating}
                  maxStars={5}
                  fullStarColor={colors.y1}
                  starSize={size.medium}
                />
              </View>
              <FlatList
                data={reviews}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => {
                  return (
                    <ReviewCard
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  );
                }}
                ListFooterComponent={() => {
                  return (
                    <AppButton
                      width={'43%'}
                      borderColor={colors.p2}
                      title="View All Reviews"
                      textStyle={{fontSize: size.tiny}}
                      onPress={() => {
                        navigation?.navigate('SupportReviews');
                      }}
                    />
                  );
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <AppLoader loading={isLoading} />
    </SafeAreaView>
  );
};

export default SupportHome;
