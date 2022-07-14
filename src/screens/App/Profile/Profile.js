import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  BackHeader,
  MyStatusBar,
  ProfileField,
  ProfileImageBox,
} from '../../../components';
import {appIcons, colors, spacing} from '../../../shared/exporter';
import {Divider, Icon} from 'react-native-elements';

const Profile = ({navigation}) => {
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
          <ProfileImageBox />
          <Text style={styles.h1}>Davis Vaccaro</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
            style={styles.iconCon}>
            <Image style={styles.iconStyle} source={appIcons.bgPencil} />
          </TouchableOpacity>
        </View>
        <View style={spacing.my4}>
          <Text style={styles.desc}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation. More...
          </Text>
        </View>
        <Divider color={colors.g18} />
        <View style={spacing.py4}>
          <ProfileField
            title={'Email Address'}
            subtitle={'hardenausaff@gmail.com'}
          />
          <ProfileField title={'Phone Number'} subtitle={'+123 456 789'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
