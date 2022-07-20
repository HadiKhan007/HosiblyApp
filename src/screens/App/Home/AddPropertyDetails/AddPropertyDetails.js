import {
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

const currency_list = ['CA$'];
const lot_list = ['meter'];
const depth_list = ['meter'];
const size_list = ['meter'];

const AddPropertyDetails = ({navigation}) => {
  const [currency, setCurrency] = useState('USD');
  const [lotFrontage, setLotFrontage] = useState('feet');
  const [lotDepth, setLotDepth] = useState('feet');
  const [size, setSize] = useState('feet');

  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [showMore, setshowMore] = useState(false);
  const [propertyType, setPropertyType] = useState({text: 'Home'});
  const [propertyData, setPropertyData] = useState(null);
  const [lotRegular, setlotRegular] = useState(null);
  const [lotRegularData, setlotRegularData] = useState(null);

  const [show, setShow] = useState(false);
  const [imageArray, setimageArray] = useState([]);
  //References
  const propertyTypeRef = useRef(null);
  const lotRef = useRef(null);

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

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Filter'} />
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
            <FilterInput placeholder={'Title'} />
            <Divider color={colors.g18} />
            <PriceInput
              onSelect={val => {
                setCurrency(val);
              }}
              isPickerOpen={isPickerOpen}
              value={currency}
              onFocus={() => setIsPickerOpen(true)}
              onBlur={() => setIsPickerOpen(false)}
              text={'e.g 21.00'}
              title={'Price'}
              list={currency_list}
              defaultValue={'USD'}
              dropDown={true}
            />
            <Divider color={colors.g18} />
            <PriceInput
              text={'e.g 21.00'}
              title={'Years Built'}
              subtitle={' (e.g 1994)'}
            />
            <Divider color={colors.g18} />
            <HomeInput h1={'Unit'} h2={'(if applicable)'} />
            <Divider color={colors.g18} />

            <PriceInput
              onSelect={val => {
                setLotFrontage(val);
              }}
              isPickerOpen={isPickerOpen}
              value={lotFrontage}
              onFocus={() => setIsPickerOpen(true)}
              onBlur={() => setIsPickerOpen(false)}
              text={'0'}
              title={'Lot Frontage'}
              list={lot_list}
              defaultValue={'feet'}
              dropDown={true}
            />

            <Divider color={colors.g18} />

            <PriceInput
              onSelect={val => {
                setLotDepth(val);
              }}
              isPickerOpen={isPickerOpen}
              value={lotDepth}
              onFocus={() => setIsPickerOpen(true)}
              onBlur={() => setIsPickerOpen(false)}
              text={'0'}
              title={'Lot Depth'}
              list={depth_list}
              defaultValue={'feet'}
              dropDown={true}
            />
            <Divider color={colors.g18} />

            <PriceInput
              onSelect={val => {
                setSize(val);
              }}
              isPickerOpen={isPickerOpen}
              value={size}
              onFocus={() => setIsPickerOpen(true)}
              onBlur={() => setIsPickerOpen(false)}
              text={'0'}
              title={'Lot Size'}
              list={size_list}
              defaultValue={'feet'}
              dropDown={true}
            />
            <Divider color={colors.g18} />
            <FilterButton
              onPress={() => {
                lotRef?.current?.open();
              }}
              title={lotRegular?.text || 'Is Your Lot Irregular?'}
            />
            <Divider color={colors.g18} />
            <Textarea
              containerStyle={[styles.textareaContainer]}
              style={styles.textarea}
              placeholder={'Describe Your Lot'}
              placeholderTextColor={colors.g19}
              underlineColorAndroid={'transparent'}
            />
            <Divider color={colors.g18} />

            <TouchableOpacity
              onPress={() => {
                setshowMore(!showMore);
              }}
              style={styles.aiRow}>
              <Text style={styles.textStyle}>Show advanced options</Text>
              <Icon
                name={showMore ? 'caretup' : 'caretdown'}
                type={'antdesign'}
                size={10}
                color={colors.p1}
                style={{marginLeft: 5}}
              />
            </TouchableOpacity>
            {/* {showMore && (
            )} */}
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
                navigation?.goBack();
              }}
              width={'45%'}
              bgColor={colors.p2}
              title={'Done'}
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
