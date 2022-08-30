import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
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
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  appIcons,
  appImages,
  colors,
  profile_uri,
  size,
  spacing,
} from '../../../shared/exporter';
import {Divider, Icon} from 'react-native-elements';
import {CetificationCard} from '../../../components/Cards/CertificationCard';

const SupportHome = ({navigation}) => {
  const dispatch = useDispatch(null);
  const [data, setData] = useState([]);
  const [userImage, setUserImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 0,
      title: 'Hanna Torff',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...',
      image: appImages.hanna,
    },
    {
      id: 1,
      title: 'Carter Kenter',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...',
      image: appImages.Carter,
    },
    {
      id: 2,
      title: 'Hanna Press',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...',

      image: appImages.Press,
    },
    {
      id: 4,
      title: 'James George',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...',
      image: appImages.James,
    },
  ]);

  const isFocus = useIsFocused(null);
  return (
    <ScrollView>
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
        <View style={styles.contentContainer}>
          <View style={spacing.py4}>
            <View style={styles.imgCon}>
              <Image
                style={styles.imgStyle}
                source={{uri: userImage === '' ? profile_uri : userImage}}
              />
            </View>
            <Text style={styles.h1}>{data?.full_name || 'username'}</Text>
            <Text style={styles.h2}>
              Company {data?.full_name || 'username'}
            </Text>
            <View style={styles.aiRow}>
              <View style={styles.starCon}>
                <Image style={styles.starStyle} source={appIcons.star} />
              </View>
              <View style={styles.textCon}>
                <Text style={styles.text1}>Ratings</Text>
                <Text style={styles.text2}>5</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.iconCon}>
              <Image style={styles.iconStyle} source={appIcons.bgPencil} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconCon, {top: 75, backgroundColor: colors.y1}]}>
              <Image style={styles.iconStyle} source={appIcons.yellowStar} />
            </TouchableOpacity>
          </View>
          <View style={spacing.my4}>
            <Text style={styles.desc}>
              {data?.description || 'Describe something'}
            </Text>
          </View>
          <Divider color={colors.g18} />
          <View style={spacing.py4}>
            <ProfileField
              title={'Profession'}
              subtitle={data?.email || 'Home Inspector, AC Repair'}
              subColor={colors.p1}
            />

            <ProfileField
              title={'Email Address'}
              subtitle={data?.email || 'email-address'}
            />
            <ProfileField
              title={'Phone Number'}
              subtitle={`+${data?.country_code || ''}${
                data?.phone_number || '2232131213'
              }`}
            />
          </View>
          <Divider color={colors.g18} />
          <Text style={styles.text3}>Uploaded Photos</Text>
          <GalleryCard noUploadIcon={true} imageArray={[1, 2, 3, 4]} />
          <Text style={styles.text3}>Uploaded Documents</Text>

          <CetificationCard
            title="my_certification.pdf"
            subtitle="12.32mb"
            style={{fontSize: 14}}
          />
        </View>
        <View style={styles.cardViewCon}>
          <Text style={styles.reviewtext}>Who Viewed Your Profile?</Text>
          <View style={spacing.py4}>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              renderItem={() => {
                return (
                  <View style={spacing.pr2}>
                    <UserCard height={61} width={61} image={appImages.hanna} />
                  </View>
                );
              }}
              horizontal={true}
            />
          </View>
        </View>
        <View style={styles.cardViewCon}>
          <View style={styles.starContainer}>
            <Text style={styles.reviewtext}>Your Reviews(43)</Text>
            <AppStarRating
              style={styles.starRating}
              disabled={true}
              maxStars={5}
              fullStarColor={colors.starcolor}
              starSize={size.medium}
            />
          </View>
          <View>
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
            />
          </View>

          <AppButton
            width={'43%'}
            borderColor={colors.p2}
            title="View All Reviews"
            textStyle={{fontSize: size.tiny}}
            onPress={() => {
              navigation?.navigate('SupportReviews');
            }}
          />
        </View>

        <AppLoader loading={isLoading} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SupportHome;
