import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  AppButton,
  BackHeader,
  FilterButton,
  FilterInput,
  GalleryCard,
  HomeInput,
  ImagePickerModal,
  ListModal,
  LivingSpaceInput,
  MyStatusBar,
  PriceInput,
  TextBox,
} from '../../../../components';
import styles from './styles';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {
  colors,
  image_options,
  property_type_list,
  size,
  spacing,
  WP,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
import Textarea from 'react-native-textarea';
import {useDispatch, useSelector} from 'react-redux';
import {
  add_property_detail_request,
  set_address_request,
} from '../../../../redux/actions';
import {useIsFocused} from '@react-navigation/core';

const currency_list = ['CA$'];
const lot_list = ['meter', 'feet'];
const depth_list = ['meter', 'feet'];
const size_list = ['sqm', 'sqft'];

const AddPropertyDetails = ({navigation}) => {
  //States for form
  const [propertyType, setPropertyType] = useState({text: 'House'});
  const [title, setTitle] = useState('');
  const [imageArray, setimageArray] = useState([]);
  const [price, setPrice] = useState('');
  const [yeardBuild, setYearBuilt] = useState('');
  const [unit, setUnit] = useState('');
  const [lot, setLot] = useState(0);
  const [depth, setDepth] = useState(0);
  const [propertySize, setPropertySize] = useState(0);
  const [description, setDescription] = useState('');
  const [lotRegular, setlotRegular] = useState(null);
  const [propertyTax, setpropertyTax] = useState('');
  const [taxYear, settaxYear] = useState('');
  const [locker, setLocker] = useState('');
  const [condo_corporation, setcondo_corporation] = useState('');
  const [condo_fees, setCondoFees] = useState('');

  const [currency, setCurrency] = useState('USD');
  const [lotFrontage, setLotFrontage] = useState('feet');
  const [lotDepth, setLotDepth] = useState('feet');
  const [propsize, setpropSize] = useState('sqft');

  const [propertyData, setPropertyData] = useState({text: 'House'});
  const [lotRegularData, setlotRegularData] = useState(null);

  const [show, setShow] = useState(false);

  //Picker States
  const [openPricePicker, setPricePicker] = useState(false);
  const [openLotPicker, setOpenLotPicker] = useState(false);
  const [opendepthPicker, setOpenDepthPicker] = useState(false);
  const [openSizePicker, setOpenSizePicker] = useState(false);

  //References
  const propertyTypeRef = useRef(null);
  const lotRef = useRef(null);
  const dispatch = useDispatch(null);
  const isFocus = useIsFocused(null);
  const {add_property_detail, address} = useSelector(
    state => state?.appReducer,
  );

  //Gallery Handlers
  const showGallery = () => {
    setShow(false);
    setTimeout(() => {
      ImagePicker.openPicker(image_options).then(image => {
        var array3 = imageArray.concat(image);
        const distinctItems = [
          ...new Map(array3.map(item => [item['size'], item])).values(),
        ];
        setimageArray(distinctItems);
        setShow(false);
      });
    }, 400);
  };
  //Camra Handlers
  const showCamera = () => {
    setShow(false);
    setTimeout(() => {
      ImagePicker.openCamera(image_options).then(image => {
        var array3 = imageArray.concat(image);
        const distinctItems = [
          ...new Map(array3.map(item => [item['size'], item])).values(),
        ];
        setimageArray(distinctItems);
        setShow(false);
      });
    }, 400);
  };
  // Remove Images
  const removeImage = (index, item) => {
    imageArray.splice(index, 1);
    setimageArray(
      imageArray.filter(item => {
        return item;
      }),
    );
  };
  //On Press Next
  const onPressNext = async () => {
    if (title == '') {
      Alert.alert('Error', 'Title is Required');
    } else if (price == '') {
      Alert.alert('Error', 'Price is Required');
    } else if (lot == '' && propertyType?.text != 'Condo') {
      Alert.alert('Error', 'Lot frontage is Required');
    } else if (depth == '' && propertyType?.text != 'Condo') {
      Alert.alert('Error', 'Lot Depth is Required');
    } else if (imageArray.length == 0) {
      Alert.alert('Error', 'At least one image Required');
    } else {
      const requestBody = {
        property_type: propertyType?.text,
        title: title,
        currency_type: currency,
        images: imageArray,
        price: price,
        year_built: yeardBuild,
        address: address,
        unit: unit,
        lot_frontage: lot,
        lot_frontage_unit: lotFrontage,
        lot_depth: depth,
        lot_depth_unit: lotDepth,
        lot_size: propertySize,
        lot_size_unit: propsize,
        is_lot_irregular: lotRegular?.text,
        lot_description: description,
        tax_year: taxYear,
        property_tax: propertyTax,
        locker: locker,
        condo_fees: condo_fees,
        condo_corporation_or_hqa: condo_corporation,
        input_data: add_property_detail?.input_data,
        property_desc: add_property_detail?.property_desc || '',
        other_desc: add_property_detail?.other_desc || '',
        save_list: add_property_detail?.save_list,
        home_data: add_property_detail?.home_data,
        condo_data: add_property_detail?.condo_data,
        save_data: add_property_detail?.save_data,
        save_desc: add_property_detail?.save_desc,
      };
      const onSuccess = res => {
        if (propertyType?.text == 'Vacant Land') {
          navigation?.navigate('AddPropertyDesc');
        } else {
          navigation?.navigate('AddMorePropertyDetails', {
            property_type: propertyType?.text,
          });
        }
      };
      dispatch(add_property_detail_request(requestBody, onSuccess));
    }
  };

  const onPressSave = async () => {
    if (title == '') {
      Alert.alert('Error', 'Title is Required');
    } else if (price == '') {
      Alert.alert('Error', 'Price is Required');
    } else if (lot == '' && propertyType.text != 'Condo') {
      Alert.alert('Error', 'Lot frontage is Required');
    } else if (depth == '' && propertyType.text != 'Condo') {
      Alert.alert('Error', 'Lot Depth is Required');
    } else if (imageArray.length == 0) {
      Alert.alert('Error', 'At least one image Required');
    } else {
      const requestBody = {
        property_type: propertyType?.text,
        title: title,
        images: imageArray,
        price: price,
        year_built: yeardBuild,
        address: address,
        unit: unit,
        lot_frontage: lot,
        lot_depth: depth,
        lot_size: propertySize,
        is_lot_irregular: lotRegular?.text,
        lot_description: description,
        input_data: add_property_detail?.input_data,
        save_list: add_property_detail?.save_list,
        property_desc: add_property_detail?.property_desc || '',
        other_desc: add_property_detail?.other_desc || '',
        save_desc: add_property_detail?.save_desc,
        currency_type: currency,
        lot_frontage_unit: lotFrontage,
        lot_depth_unit: lotDepth,
        lot_size_unit: propsize,
        tax_year: taxYear,
        property_tax: propertyTax,
        locker: locker,
        condo_corporation_or_hqa: condo_corporation,
        condo_fess: condo_fees,
        home_data: add_property_detail?.home_data,
        condo_data: add_property_detail?.condo_data,
        save_data: true,
      };
      const onSuccess = res => {
        Alert.alert('Success', 'Information Saved Successfully');
      };
      dispatch(add_property_detail_request(requestBody, onSuccess));
    }
  };

  //Set Property Detail
  useEffect(() => {
    if (add_property_detail?.save_data) {
      setPropertyType({text: add_property_detail?.property_type});
      setPropertyData({text: add_property_detail?.property_type});
      setTitle(add_property_detail?.title);
      setimageArray(add_property_detail?.images || []);
      setPrice(add_property_detail?.price || '0');
      setYearBuilt(add_property_detail?.year_built || '0');
      setUnit(add_property_detail?.unit || '0');
      setLot(add_property_detail?.lot_frontage || '0');
      setDepth(add_property_detail?.lot_depth || '0');
      setPropertySize(add_property_detail?.lot_size || '0');
      setlotRegular({text: add_property_detail?.is_lot_irregular});
      setlotRegularData({text: add_property_detail?.is_lot_irregular});
      dispatch(
        set_address_request(add_property_detail?.address || '', () => {}),
      );
      setDescription(add_property_detail?.lot_description || '');
      setCurrency(add_property_detail?.currency_type);
      setLotFrontage(add_property_detail?.lot_frontage_unit);
      setLotDepth(add_property_detail?.lot_depth_unit);
      setpropSize(add_property_detail?.lot_size_unit);
      setLocker(add_property_detail?.locker);
      settaxYear(add_property_detail?.tax_year);
      setpropertyTax(add_property_detail?.property_tax);
      setcondo_corporation(add_property_detail?.condo_corporation_or_hqa);
      setCondoFees(add_property_detail?.condo_fees);
    } else {
      dispatch(set_address_request('', () => {}));
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
        contentContainerStyle={{paddingBottom: WP('2')}}>
        <View style={styles.contentContainer}>
          <View style={styles.inputCon}>
            <Divider color={colors.g18} />
            <FilterButton
              onPress={() => {
                propertyTypeRef?.current?.open();
              }}
              title={propertyType?.text}
            />
            <Divider color={colors.g18} />
            <GalleryCard
              onPressImg={index => {
                removeImage(index);
              }}
              imageArray={imageArray}
              onPress={() => {
                setShow(true);
              }}
              title={'Add Photo'}
              subtitle={'Max 30 images'}
            />
            <Divider color={colors.g18} />
            <FilterInput
              placeholder={'Title'}
              onChangeText={text => {
                setTitle(text);
              }}
              value={title}
              keyboardType={'default'}
            />
            <Divider color={colors.g18} />
            <PriceInput
              onSelect={val => {
                setCurrency(val);
              }}
              isPickerOpen={openPricePicker}
              value={price}
              onFocus={() => setPricePicker(true)}
              onBlur={() => setPricePicker(false)}
              simpleInputPlaceHolder={'e.g 21.00'}
              title={'Price'}
              list={currency_list}
              defaultValue={currency || 'USD'}
              keyboardType={'decimal-pad'}
              dropDown={true}
              onChangeText={text => {
                setPrice(text);
              }}
            />
            {propertyType?.text != 'Vacant Land' && (
              <>
                <Divider color={colors.g18} />
                <PriceInput
                  simpleInputPlaceHolder={'e.g 21.00'}
                  title={'Year Built'}
                  subtitle={' (e.g 1994)'}
                  keyboardType={'decimal-pad'}
                  onChangeText={text => {
                    setYearBuilt(text);
                  }}
                  value={yeardBuild}
                />
              </>
            )}
            {propertyType?.text != 'House' && (
              <TouchableOpacity
                onPress={() => {
                  navigation?.navigate('AddAddress');
                }}>
                <Divider color={colors.g18} />
                <FilterInput
                  onPressIn={() => {
                    navigation?.navigate('AddAddress');
                  }}
                  editable={false}
                  keyboardType={'default'}
                  placeholder={'Street Address'}
                  value={address}
                />
              </TouchableOpacity>
            )}
            {propertyType?.text != 'Vacant Land' && (
              <>
                <Divider color={colors.g18} />
                <HomeInput
                  onChangeText={text => {
                    setUnit(text);
                  }}
                  value={unit}
                  h1={'Unit'}
                  h2={'(if applicable)'}
                />
              </>
            )}
            {propertyType?.text != 'Condo' && (
              <>
                <Divider color={colors.g18} />
                <PriceInput
                  onSelect={val => {
                    setLotFrontage(val);
                  }}
                  isPickerOpen={openLotPicker}
                  value={lot}
                  onFocus={() => setOpenLotPicker(true)}
                  onBlur={() => setOpenLotPicker(false)}
                  simpleInputPlaceHolder={'0'}
                  title={'Lot Frontage'}
                  list={lot_list}
                  defaultValue={lotFrontage || 'feet'}
                  keyboardType={'decimal-pad'}
                  dropDown={true}
                  dropDownText={'feet'}
                  onChangeText={text => {
                    setLot(text);
                    setPropertySize(text * depth);
                  }}
                />

                <Divider color={colors.g18} />

                <PriceInput
                  onSelect={val => {
                    setLotDepth(val);
                  }}
                  isPickerOpen={opendepthPicker}
                  value={depth}
                  onFocus={() => setOpenDepthPicker(true)}
                  onBlur={() => setOpenDepthPicker(false)}
                  simpleInputPlaceHolder={'0'}
                  title={'Lot Depth'}
                  list={depth_list}
                  defaultValue={lotDepth || 'feet'}
                  dropDown={true}
                  onChangeText={text => {
                    setDepth(text);
                    setPropertySize(text * lot);
                  }}
                  keyboardType={'decimal-pad'}
                  returnKeyType={'done'}
                />
                <Divider color={colors.g18} />

                <PriceInput
                  onSelect={val => {
                    setpropSize(val);
                  }}
                  isPickerOpen={openSizePicker}
                  value={propertySize?.toString()}
                  onFocus={() => setOpenSizePicker(true)}
                  onBlur={() => setOpenSizePicker(false)}
                  simpleInputPlaceHolder={propertySize.toString()}
                  title={'Lot Size'}
                  list={size_list}
                  defaultValue={propsize || 'sqft'}
                  dropDown={true}
                  editable={false}
                />
                <Divider color={colors.g18} />
                <FilterButton
                  onPress={() => {
                    lotRef?.current?.open();
                  }}
                  title={lotRegular?.text || 'Is Your Lot Irregular?'}
                />

                <Divider color={colors.g18} />
                <PriceInput
                  onChangeText={text => {
                    settaxYear(text);
                  }}
                  value={taxYear}
                  simpleInputPlaceHolder={'2006'}
                  title={'Tax Year'}
                  subtitle={'(e.g 2006)'}
                  keyboardType={'decimal-pad'}
                />

                <Divider color={colors.g18} />
                <PriceInput
                  onChangeText={text => {
                    setpropertyTax(text);
                  }}
                  value={propertyTax}
                  simpleInputPlaceHolder={'00.00'}
                  title={'Property Taxes'}
                  keyboardType={'decimal-pad'}
                />
              </>
            )}
            {propertyType?.text == 'Condo' && (
              <>
                <Divider color={colors.g18} />
                <FilterInput
                  onChangeText={text => {
                    setcondo_corporation(text);
                  }}
                  keyboardType={'default'}
                  value={condo_corporation}
                  placeholder={'Condo Corporation / HOA'}
                />
                <Divider color={colors.g18} />
                <FilterInput
                  onChangeText={text => {
                    setCondoFees(text);
                  }}
                  value={condo_fees}
                  placeholder={'Condo/HOA fees (per month)'}
                />
                <Divider color={colors.g18} />
                <FilterButton
                  onPress={() => {
                    setLocker('Locker');
                  }}
                  title={'Locker'}
                  textColor={locker != '' ? colors.p1 : colors.b1}
                />
              </>
            )}
            <Divider color={colors.g18} />

            <Textarea
              containerStyle={[styles.textareaContainer]}
              style={styles.textarea}
              placeholder={'Describe Your Lot'}
              placeholderTextColor={colors.g19}
              underlineColorAndroid={'transparent'}
              value={description}
              onChangeText={text => {
                setDescription(text);
              }}
            />
            <Divider color={colors.g18} />
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
        </View>
      </KeyboardAwareScrollView>

      {/* Porperty modal */}
      <ListModal
        listRef={propertyTypeRef}
        list={property_type_list}
        getValue={(val, index) => {
          setPropertyData(val);
        }}
        onPressCross={() => {
          setPropertyData(propertyType);
          propertyTypeRef?.current?.close();
        }}
        onPressTick={() => {
          setPropertyType(propertyData);
          propertyTypeRef?.current?.close();
        }}
        selected={propertyData}
        title={'Property Type'}
      />
      <ListModal
        listRef={lotRef}
        list={[
          {id: 0, text: 'Yes'},
          {id: 1, text: 'No'},
        ]}
        getValue={(val, index) => {
          setlotRegularData(val);
        }}
        onPressCross={() => {
          setlotRegularData(lotRegular);
          lotRef?.current?.close();
        }}
        onPressTick={() => {
          setlotRegular(lotRegularData);
          lotRef?.current?.close();
        }}
        selected={lotRegularData}
        title={'Select'}
      />
      {show && (
        <ImagePickerModal
          show={show}
          onPressCamera={() => {
            showCamera();
          }}
          onPressGallery={() => {
            showGallery();
          }}
          onPressHide={() => {
            setShow(false);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default AddPropertyDetails;
