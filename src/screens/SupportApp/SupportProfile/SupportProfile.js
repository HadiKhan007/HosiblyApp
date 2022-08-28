import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ProfileModal} from '../../../components/Modal/ProfileModel';
import {FullProfileModal} from '../../../components/Modal/FullViewProfile';

const SupportProfile = () => {
  return (
      <View>
          <ProfileModal show/>
    </View>
  );
};

export default SupportProfile;

const styles = StyleSheet.create({});
