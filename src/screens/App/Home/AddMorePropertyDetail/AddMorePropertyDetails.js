import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  AppButton,
  BackHeader,
  DetailButton,
  MyStatusBar,
  PriceInput,
} from '../../../../components';
import styles from './styles';
import {
  colors,
  condo_items,
  home_items,
  inputItems,
  size,
  spacing,
  WP,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {add_property_detail_request} from '../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const AddMorePropertyDetails = ({navigation, route}) => {
  const {add_property_detail} = useSelector(state => state?.appReducer);
  const dispatch = useDispatch(null);

  //On Finish
  const onFinish = () => {
    const selectedItems = home_items.filter(
      item => item != undefined && item?.value != '',
    );
    const selectedInputs = inputItems.filter(
      item => item != undefined && item?.value != '0',
    );
    const finalArray = selectedInputs.concat(selectedItems);
    add_property_detail['opition_data'] = finalArray;
    if (inputItems[0].value == '0') {
      Alert.alert('Error', 'Number of Bath Rooms is Required');
    } else if (inputItems[1].value == '0') {
      Alert.alert('Error', 'Number of Bed Rooms is Required');
    } else if (inputItems[3].value == '0') {
      Alert.alert('Error', 'Parking Space is Required');
    } else if (inputItems[4].value == '0') {
      Alert.alert('Error', 'Garage Space is Required');
    } else if (home_items[2].value == '') {
      Alert.alert('Error', 'House Type is Required');
    } else if (home_items[3].value == '') {
      Alert.alert('Error', 'House Style is Required');
    } else if (home_items[9].value == '') {
      Alert.alert('Error', 'Air Conditioner is Required');
    } else {
      const onSuccess = res => {
        navigation?.navigate('AddPropertyDesc');
      };
      dispatch(add_property_detail_request(add_property_detail, onSuccess));
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Add More Detaiils'} />
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: WP('2')}}>
        <View style={styles.contentContainer}>
          <FlatList
            data={inputItems}
            renderItem={({item, index}) => {
              return (
                <PriceInput
                  text={item?.value}
                  title={item.title}
                  source={item.Img}
                  marginRight={WP('3')}
                  onChangeText={text => {
                    inputItems[index].value = text;
                  }}
                />
              );
            }}
            ItemSeparatorComponent={() => {
              return <Divider color={colors.g18} />;
            }}
          />

          <Divider color={colors.g18} />

          <FlatList
            data={
              route?.params?.property_type == 'House' ? home_items : condo_items
            }
            renderItem={({item, index}) => {
              return (
                <DetailButton
                  onPress={() => {
                    home_items[index].value = item?.title;
                  }}
                  title={item?.title}
                  source={item.Img}
                />
              );
            }}
            ItemSeparatorComponent={() => {
              return <Divider color={colors.g18} />;
            }}
          />

          <Divider color={colors.g18} />
          <PriceInput text={'0'} title={'Property Taxes'} />
          <Divider color={colors.g18} />
          <PriceInput text={'0'} title={'Taxe Year'} />
          <Divider color={colors.g18} />
          {/*Buttons */}
          <View style={styles.spacRow}>
            <AppButton
              width={'45%'}
              bgColor={colors.g21}
              title={'Save'}
              fontSize={size.tiny}
              borderColor={colors.g21}
              onPress={() => {
                onFinish();
              }}
              shadowColor={colors.white}
            />

            <AppButton
              onPress={() => {
                onFinish();
              }}
              width={'45%'}
              bgColor={colors.p2}
              title={'Done'}
              fontSize={size.tiny}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddMorePropertyDetails;
