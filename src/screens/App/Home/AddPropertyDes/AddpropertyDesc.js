import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, BackHeader, MyStatusBar} from '../../../../components';
import {colors, size, spacing, WP} from '../../../../shared/exporter';
import Textarea from 'react-native-textarea';
import {Divider} from 'react-native-elements/dist/divider/Divider';

const AddpropertyDesc = ({navigation}) => {
  const [propertyDesc, setpropertyDesc] = useState('');
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Add Details'} />
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.inputCon}>
        <View style={styles.contentContainer}>
          <Divider color={colors.g18} />
          <Textarea
            containerStyle={[styles.textareaContainer]}
            style={styles.textarea}
            placeholder={'Property description'}
            placeholderTextColor={colors.g19}
            underlineColorAndroid={'transparent'}
            onChangeText={text => {
              setpropertyDesc(text);
            }}
          />
          <Divider color={colors.g18} />
          <Textarea
            containerStyle={[styles.textareaContainer]}
            style={styles.textarea}
            placeholder={'Appliances & Other Items'}
            placeholderTextColor={colors.g19}
            underlineColorAndroid={'transparent'}
            onChangeText={text => {
              setpropertyDesc(text);
            }}
          />
        </View>
        <View style={styles.spacRow}>
          <AppButton
            width={'45%'}
            bgColor={colors.g21}
            title={'Save'}
            fontSize={size.tiny}
            borderColor={colors.g21}
            onPress={() => {
              navigation?.goBack();
            }}
            shadowColor={colors.white}
          />
          <AppButton
            onPress={() => {
              navigation?.navigate('PropertyDetail');
            }}
            width={'45%'}
            bgColor={colors.p2}
            title={'Next'}
            fontSize={size.tiny}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddpropertyDesc;
