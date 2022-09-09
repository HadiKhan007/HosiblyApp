import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
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
  ProfileModal,
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
} from '../../../shared/exporter';
import {Divider, Icon} from 'react-native-elements';
import {CetificationCard} from '../../../components/Cards/CertificationCard';
import {
  getSupportReviewsApi,
  getSupportVisitorApi,
} from '../../../shared/service/SupportService';
import RNFS from 'react-native-fs';

const SupportProfie = ({navigation}) => {
  const dispatch = useDispatch(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [viewProfile, setviewProfile] = useState(false);
  const [currentUser, setcurrentUser] = useState(null);
  const [profileVisitors, setProfileVisitors] = useState([]);

  const {support_detail} = useSelector(state => state?.supportReducer);
  const isFocus = useIsFocused(null);
  //Get Data
  useEffect(() => {
    if (isFocus) {
      getRatings();
      getProfileVisitors();
    }
  }, [isFocus]);

  const getRatings = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        const requestBody = {
          support_closer_id: support_detail?.support_closer?.id,
        };

        const res = await getSupportReviewsApi(requestBody);
        if (res) {
          setReviews(res);
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

  const getProfileVisitors = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        const res = await getSupportVisitorApi();
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

  //Download Multiple Files
  const downloadFiles = async item => {
    setIsLoading(true);
    const promise = RNFS.downloadFile({
      fromUrl: item?.certificate,
      toFile: `${RNFS.DownloadDirectoryPath}/download_${Math.random()}.png`,
    });
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Downloading Completed');
    }, 5000);
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Your Profile'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              {support_detail?.support_closer.full_name || 'username'}
            </Text>
            {/* <Text style={styles.h2}>
              Company {support_detail?.support_closer?.full_name || 'username'}
            </Text> */}
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
                navigation?.navigate('PersonChat');
              }}
              style={styles.iconCon}>
              <Image style={styles.iconStyle} source={appIcons.messageIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  `tel:${support_detail?.support_closer?.country_code || ''}${
                    support_detail?.support_closer?.phone_number || '2232131213'
                  }`,
                );
              }}
              style={[styles.iconCon, {top: 75}]}>
              <Image style={styles.iconStyle} source={appIcons.call2} />
            </TouchableOpacity>
          </View>
          <View style={spacing.my4}>
            <Text style={styles.desc}>
              {support_detail?.description || 'Describe something'}
            </Text>
          </View>
          <Divider color={colors.g18} />
          <View style={spacing.py4}>
            {support_detail?.professions?.map(item => {
              return (
                <ProfileField
                  title={'Profession'}
                  subtitle={item?.title || 'Home Inspector, AC Repair'}
                  subColor={colors.p1}
                />
              );
            })}

            <ProfileField
              title={'Email Address'}
              subtitle={
                support_detail?.support_closer?.email || 'email-address'
              }
            />
            <ProfileField
              title={'Phone Number'}
              subtitle={`${support_detail?.support_closer?.country_code || ''}${
                support_detail?.support_closer?.phone_number || '2232131213'
              }`}
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
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      downloadFiles(item);
                    }}>
                    <CetificationCard
                      title={item?.certificate}
                      subtitle={shortenBytes(item?.size)}
                      style={{fontSize: 14}}
                    />
                  </TouchableOpacity>
                );
              })}
            </>
          )}
        </View>
        <View style={styles.secondCon}>
          {profileVisitors?.visitor?.length > 0 && (
            <View style={styles.cardViewCon}>
              <Text style={styles.reviewtext}>Who Viewed Your Profile?</Text>
              <View style={spacing.py4}>
                <FlatList
                  data={profileVisitors?.visitor}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setshowModal(true);
                          setcurrentUser(item);
                        }}
                        style={spacing.pr2}>
                        <UserCard
                          height={61}
                          width={61}
                          image={{uri: item?.visitor_image || profile_uri}}
                        />
                      </TouchableOpacity>
                    );
                  }}
                  horizontal={true}
                />
              </View>
            </View>
          )}
          {reviews?.reviews?.length > 0 && (
            <View style={styles.cardViewCon}>
              <View style={styles.starContainer}>
                <Text style={styles.reviewtext}>
                  Your Reviews ({reviews?.total_reviews || 0})
                </Text>
                <AppStarRating
                  starStyle={styles.starRating}
                  disabled={true}
                  rating={reviews?.average_rating}
                  maxStars={5}
                  fullStarColor={colors.y1}
                  starSize={size.medium}
                />
              </View>
              <FlatList
                data={reviews?.reviews?.slice(0, 3)}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => {
                  return (
                    <ReviewCard
                      id={item.id}
                      title={item?.reviewed_user_name}
                      description={item?.review}
                      rating={item?.rating}
                      star={5}
                      image={{uri: item?.reviewed_user_image || profile_uri}}
                    />
                  );
                }}
              />
            </View>
          )}
          <View style={spacing.my6}>
            <AppButton
              width={'43%'}
              borderColor={colors.p2}
              title="View All Reviews"
              textStyle={{fontSize: size.tiny}}
              onPress={() => {
                navigation?.navigate('SupportUserReviews', {
                  item: reviews,
                });
              }}
            />
          </View>
        </View>
      </ScrollView>
      <ProfileModal
        data={currentUser}
        show={showModal}
        onPressHide={() => {
          setshowModal(false);
          setviewProfile(false);
        }}
        viewProfile={viewProfile}
        setviewProfile={() => {
          setviewProfile(true);
        }}
        onPressMsg={() => {
          setshowModal(false);
          navigation?.navigate('PersonChat');
        }}
      />
      <AppLoader loading={isLoading} />
    </SafeAreaView>
  );
};

export default SupportProfie;
