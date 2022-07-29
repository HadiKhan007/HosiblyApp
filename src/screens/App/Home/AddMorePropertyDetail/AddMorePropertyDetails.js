import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
  const [inputList, setInputList] = useState([]);
  const [homeList, sethomeList] = useState([]);
  const [condoList, setcondoList] = useState([]);

  const dispatch = useDispatch(null);

  //On Finish
  const onFinish = () => {
    if (add_property_detail?.save_list) {
      const onSuccess = res => {
        navigation?.navigate('AddPropertyDesc');
      };
      dispatch(add_property_detail_request(add_property_detail, onSuccess));
    } else {
      const list =
        route?.params?.property_type == 'House' ? homeList : condoList;

      add_property_detail.input_data = inputList;
      add_property_detail.other_data =
        route?.params?.property_type == 'House' ? homeList : condoList;
      if (inputList[0].value == '' || inputList[0].value == 0) {
        Alert.alert('Error', 'Number of Bath Rooms is Required');
      } else if (inputList[1].value == '' || inputList[1].value == 0) {
        Alert.alert('Error', 'Number of Bed Rooms is Required');
      } else if (inputList[3].value == '' || inputList[3].value == 0) {
        Alert.alert('Error', 'Parking Space is Required');
      } else if (inputList[4].value == '' || inputList[4].value == 0) {
        Alert.alert('Error', 'Garage Space is Required');
      } else if (list[2].value == '' || !list[2].selected) {
        Alert.alert('Error', 'House Type is Required');
      } else if (list[3].value == '' || !list[3].selected) {
        Alert.alert('Error', 'House Style is Required');
      } else if (
        route?.params?.property_type == 'Vacant Land'
          ? list[10].value == '' || !list[10].selected
          : list[9].value == '' || !list[9].selected
      ) {
        Alert.alert('Error', 'Air Conditioner is Required');
      } else {
        const onSuccess = res => {
          navigation?.navigate('AddPropertyDesc');
        };
        dispatch(add_property_detail_request(add_property_detail, onSuccess));
      }
    }
  };

  useEffect(() => {
    if (add_property_detail?.save_list) {
      setInputList(add_property_detail?.input_data);
      if (route?.params?.property_type == 'House') {
        sethomeList(add_property_detail?.other_data);
      } else {
      }
      setcondoList(add_property_detail?.other_data);
    } else {
      setInputList(inputItems);
      sethomeList(home_items);
      setcondoList(condo_items);
    }
  }, []);

  //On Press Save
  const onPressSave = () => {
    const list = route?.params?.property_type == 'House' ? homeList : condoList;

    add_property_detail.input_data = inputList;
    add_property_detail.other_data =
      route?.params?.property_type == 'House' ? homeList : condoList;
    add_property_detail.save_list = true;
    add_property_detail.save = add_property_detail?.save;

    if (inputList[0].value == '' || inputList[0].value == 0) {
      Alert.alert('Error', 'Number of Bath Rooms is Required');
    } else if (inputList[1].value == '' || inputList[1].value == 0) {
      Alert.alert('Error', 'Number of Bed Rooms is Required');
    } else if (inputList[3].value == '' || inputList[3].value == 0) {
      Alert.alert('Error', 'Parking Space is Required');
    } else if (inputList[4].value == '' || inputList[4].value == 0) {
      Alert.alert('Error', 'Garage Space is Required');
    } else if (list[2].value == '' || !list[2].selected) {
      Alert.alert('Error', 'House Type is Required');
    } else if (list[3].value == '' || !list[3].selected) {
      Alert.alert('Error', 'House Style is Required');
    } else if (
      route?.params?.property_type == 'Vacant Land'
        ? list[10].value == '' || !list[10].selected
        : list[9].value == '' || !list[9].selected
    ) {
      Alert.alert('Error', 'Air Conditioner is Required');
    } else {
      const onSuccess = res => {
        Alert.alert('Success', 'Information Saved Successfully');
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
            data={inputList}
            renderItem={({item, index}) => {
              return (
                <PriceInput
                  text={item?.value}
                  title={item.title}
                  source={item.Img}
                  marginRight={WP('3')}
                  onChangeText={text => {
                    inputList[index].value = text;
                    setInputList([...inputList]);
                  }}
                  tintColor={inputList[index].value ? colors.p1 : colors.b1}
                  keyboardType={'decimal-pad'}
                  value={inputList[index].value}
                  simpleInputPlaceHolder={'0'}
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
              route?.params?.property_type == 'House' ? homeList : condoList
            }
            renderItem={({item, index}) => {
              return (
                <DetailButton
                  onPress={() => {
                    if (route?.params?.property_type == 'House') {
                      homeList[index].value = item?.title;
                      homeList[index].selected = !homeList[index].selected;
                      sethomeList([...homeList]);
                    } else {
                      condoList[index].value = item?.title;
                      condoList[index].selected = !condoList[index].selected;
                      setcondoList([...condoList]);
                    }
                  }}
                  title={item?.title}
                  source={item.Img}
                  tintColor={item?.selected ? colors.p1 : colors.b1}
                />
              );
            }}
            ItemSeparatorComponent={() => {
              return <Divider color={colors.g18} />;
            }}
          />

          <Divider color={colors.g18} />
          <PriceInput
            simpleInputPlaceHolder={'0'}
            title={'Property Taxes'}
            onChangeText={text => {}}
          />
          <Divider color={colors.g18} />
          <PriceInput
            simpleInputPlaceHolder={'0'}
            title={'Taxe Year'}
            onChangeText={text => {}}
          />
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
                onPressSave();
              }}
              shadowColor={colors.white}
            />

            <AppButton
              onPress={() => {
                onFinish();
              }}
              width={'45%'}
              bgColor={colors.p2}
              title={'Next'}
              fontSize={size.tiny}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddMorePropertyDetails;
