import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
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
  property_type_list,
  size,
  spacing,
  WP,
} from '../../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
import Textarea from 'react-native-textarea';
import {useDispatch} from 'react-redux';
import {add_property_detail_request} from '../../../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [address, setAddress] = useState('');
  const [lot, setLot] = useState(0);
  const [depth, setDepth] = useState(0);
  const [propertySize, setPropertySize] = useState(0);
  const [description, setDescription] = useState('');
  const [lotRegular, setlotRegular] = useState(null);

  const [currency, setCurrency] = useState('USD');
  const [lotFrontage, setLotFrontage] = useState('feet');
  const [lotDepth, setLotDepth] = useState('feet');
  const [propsize, setpropSize] = useState('sqft');

  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [propertyData, setPropertyData] = useState({text: 'House'});
  const [lotRegularData, setlotRegularData] = useState(null);

  const [show, setShow] = useState(false);
  //References
  const propertyTypeRef = useRef(null);
  const lotRef = useRef(null);
  const dispatch = useDispatch(null);

  //Gallery Handlers
  const showGallery = () => {
    setShow(false);
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        multiple: true,
      }).then(image => {
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
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        multiple: true,
      }).then(image => {
        var array3 = imageArray.concat(image);
        const distinctItems = [
          ...new Map(array3.map(item => [item['size'], item])).values(),
        ];
        setimageArray(distinctItems);
        setShow(false);
      });
    }, 400);
  };
  const removeImage = (index, item) => {
    imageArray.splice(index, 1);
    setimageArray(
      imageArray.filter(item => {
        return item;
      }),
    );
  };

  const onPressNext = async () => {
    if (price == '') {
      Alert.alert('Error', 'Price is Required');
    } else if (lot == '') {
      Alert.alert('Error', 'Lot frontage is Required');
    } else if (depth == '') {
      Alert.alert('Error', 'Lot Depth is Required');
    } else if (imageArray.length == 0) {
      Alert.alert('Error', 'At least one image Required');
    } else {
      const requestBody = {
        property_type: propertyType?.text,
        title: title,
        images: imageArray.map(item => {
          return {
            uri: item?.path,
            name: item?.filename,
            type: item?.mime,
          };
        }),
        price: price,
        year_built: yeardBuild,
        address: address,
        unit: unit,
        lot_frontage: lot,
        lot_depth: depth,
        lot_size: propertySize,
        is_lot_irregular: lotRegular?.text,
        lot_description: description,
      };
      const onSuccess = res => {
        console.log('ok');
        navigation?.navigate('AddMorePropertyDetails', {
          property_type: propertyType?.text,
        });
      };
      dispatch(add_property_detail_request(requestBody, onSuccess));
    }
  };

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
              isPickerOpen={isPickerOpen}
              value={price}
              onFocus={() => setIsPickerOpen(true)}
              onBlur={() => setIsPickerOpen(false)}
              text={'e.g 21.00'}
              title={'Price'}
              list={currency_list}
              defaultValue={'USD'}
              dropDown={true}
              onChangeText={text => {
                setPrice(text);
              }}
            />
            {propertyType?.text != 'Vacant Land' && (
              <>
                <Divider color={colors.g18} />
                <PriceInput
                  text={'e.g 21.00'}
                  title={'Years Built'}
                  subtitle={' (e.g 1994)'}
                  onChangeText={text => {
                    setYearBuilt(text);
                  }}
                  value={yeardBuild}
                />
              </>
            )}
            {propertyType?.text != 'House' && (
              <>
                <Divider color={colors.g18} />
                <FilterInput
                  onPressIn={() => {
                    navigation?.navigate('AddAddress');
                  }}
                  editable={false}
                  keyboardType={'default'}
                  placeholder={'Street Address'}
                  onChangeText={text => {
                    setAddress(text);
                  }}
                  value={address}
                />
              </>
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
                  isPickerOpen={isPickerOpen}
                  value={lot}
                  onFocus={() => setIsPickerOpen(true)}
                  onBlur={() => setIsPickerOpen(false)}
                  text={'0'}
                  title={'Lot Frontage'}
                  list={lot_list}
                  defaultValue={'feet'}
                  dropDown={true}
                  onChangeText={text => {
                    setLot(text);
                  }}
                />

                <Divider color={colors.g18} />

                <PriceInput
                  onSelect={val => {
                    setLotDepth(val);
                  }}
                  isPickerOpen={isPickerOpen}
                  value={depth}
                  onFocus={() => setIsPickerOpen(true)}
                  onBlur={() => setIsPickerOpen(false)}
                  text={'0'}
                  title={'Lot Depth'}
                  list={depth_list}
                  defaultValue={'feet'}
                  dropDown={true}
                  onChangeText={text => {
                    setDepth(text);
                  }}
                  onSubmitEditing={() => {
                    setPropertySize(depth * lot);
                  }}
                  keyboardType={'decimal-pad'}
                  returnKeyType={'done'}
                />
                <Divider color={colors.g18} />

                <PriceInput
                  onSelect={val => {
                    setpropSize(val);
                  }}
                  isPickerOpen={isPickerOpen}
                  value={propertySize}
                  onFocus={() => setIsPickerOpen(true)}
                  onBlur={() => setIsPickerOpen(false)}
                  text={propertySize.toString()}
                  title={'Lot Size'}
                  list={size_list}
                  defaultValue={'sqft'}
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
                {propertyType?.text == 'Vacant Land' && (
                  <>
                    <Divider color={colors.g18} />
                    <PriceInput
                      text={'2006'}
                      title={'Tax Year'}
                      subtitle={'(e.g 2006)'}
                    />
                  </>
                )}
                {propertyType?.text == 'Vacant Land' && (
                  <>
                    <Divider color={colors.g18} />
                    <PriceInput
                      text={'00.00'}
                      title={'Property Taxes'}
                      subtitle={' (USD)'}
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
              </>
            )}

            {propertyType?.text == 'Condo' && (
              <>
                <Divider color={colors.g18} />
                <FilterButton
                  onPress={() => {}}
                  title={'Locker'}
                  textColor={colors.b1}
                />
              </>
            )}
            {propertyType?.text == 'Condo' && (
              <>
                <Divider color={colors.g18} />
                <FilterInput placeholder={'Condo Corporation / HOA'} />
                <Divider color={colors.g18} />
              </>
            )}
            {/* <TouchableOpacity
              onPress={() => {
               
              }}
              style={styles.aiRow}>
              <Text style={styles.textStyle}>Show advanced options</Text>
            </TouchableOpacity> */}
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
