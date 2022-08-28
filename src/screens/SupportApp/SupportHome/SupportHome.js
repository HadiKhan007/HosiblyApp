import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import {
  AppButton,
  AppLoader,
  BackHeader,
  MyStatusBar,
  ProfileField,
} from '../../../components';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  appIcons,
  colors,
  profile_uri,
  size,
  spacing,
} from '../../../shared/exporter';
import {Divider, Icon} from 'react-native-elements';

const SupportHome = ({navigation}) => {
  const dispatch = useDispatch(null);
  const [data, setData] = useState([]);
  const [userImage, setUserImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isFocus = useIsFocused(null);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader
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
          <Text style={styles.h2}>Company {data?.full_name || 'username'}</Text>
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

      <AppLoader loading={isLoading} />
    </SafeAreaView>
  );
};

export default SupportHome;
