import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, BackHeader, MyStatusBar} from '../../../../components';
import {colors, size, spacing, WP} from '../../../../shared/exporter';
import Textarea from 'react-native-textarea';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {useDispatch, useSelector} from 'react-redux';
import {add_property_detail_request} from '../../../../redux/actions';

const AddpropertyDesc = ({navigation}) => {
  const [propertyDesc, setpropertyDesc] = useState('');
  const [otherDesc, setOtherDesc] = useState('');
  const dispatch = useDispatch();
  const {add_property_detail} = useSelector(state => state?.appReducer);
  //On Press Next
  const onPressNext = async () => {
    add_property_detail.property_desc = propertyDesc;
    add_property_detail.other_desc = otherDesc;
    const selectedInputs = add_property_detail?.input_data?.filter(item => {
      return item?.value != '' || item?.value != undefined;
    });
    const selectedItems = add_property_detail?.other_data?.filter(item => {
      return item?.value != '' || item?.value != undefined;
    });

    const finalArray = selectedInputs.concat(selectedItems);
    add_property_detail['option_data'] = finalArray;
    const onSuccess = res => {
      console.log('ok');
      navigation?.navigate('PropertyDetail');
    };
    dispatch(add_property_detail_request(add_property_detail, onSuccess));
  };
  //On Press Save
  const onPressSave = async () => {
    add_property_detail.property_desc = propertyDesc;
    add_property_detail.other_desc = otherDesc;
    add_property_detail.save_desc = true;

    const onSuccess = res => {
      console.log('ok');
      Alert.alert('Success', 'Information Saved Successfully');
    };
    dispatch(add_property_detail_request(add_property_detail, onSuccess));
  };

  useEffect(() => {
    if (add_property_detail?.save_desc) {
      setpropertyDesc(add_property_detail.property_desc);
      setOtherDesc(add_property_detail.other_desc);
    }
  }, []);

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
            value={propertyDesc}
          />
          <Divider color={colors.g18} />
          <Textarea
            containerStyle={[styles.textareaContainer]}
            style={styles.textarea}
            placeholder={'Appliances & Other Items'}
            placeholderTextColor={colors.g19}
            underlineColorAndroid={'transparent'}
            onChangeText={text => {
              setOtherDesc(text);
            }}
            value={otherDesc}
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
              onPressSave();
            }}
            shadowColor={colors.white}
          />
          <AppButton
            onPress={() => {
              onPressNext();
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
