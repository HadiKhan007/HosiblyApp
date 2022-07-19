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
  ImagePickerModal,
  ListModal,
  LivingSpaceInput,
  MyStatusBar,
  PriceInput,
} from '../../../../components';
import styles from './styles';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {
  bath_list,
  beds_list,
  colors,
  lat_frontage_list,
  property_type_list,
  size,
  spacing,
  WP,
} from '../../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
const currency_list = ['CA$', 'PKR', 'INR', 'EUR'];

const AddPropertyDetails = ({navigation}) => {
  const [currency, setCurrency] = useState('USD');
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [showMore, setshowMore] = useState(false);
  const [propertyType, setPropertyType] = useState({text: 'Home'});
  const [propertyData, setPropertyData] = useState(null);

  const [show, setShow] = useState(false);
  const [imageArray, setimageArray] = useState([]);
  //References
  const propertyTypeRef = useRef(null);

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
