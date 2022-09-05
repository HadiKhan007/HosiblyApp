import React, {useState, useEffect} from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {
  AppButton,
  AppHeader,
  AppInput,
  BackHeader,
  ProfileImageBox,
  TextBox,
  AppLoader,
  ImagePickerModal,
  GalleryCard,
} from '../../../components';
import {
  appIcons,
  checkConnected,
  colors,
  editFormFields,
  editProfileFieldsVS,
  editSupportFormFields,
  editSupportProfileFieldsVS,
  networkText,
  platformOrientedCode,
  profile_uri,
  responseValidator,
  spacing,
} from '../../../shared/exporter';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfileRequest} from '../../../redux/actions';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import CountryPicker from 'react-native-country-picker-modal';
import {useIsFocused} from '@react-navigation/core';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {updateSupportUserData} from '../../../shared/service/SupportService';

const SupportEditProfile = ({navigation, route}) => {
  const [country, setcountry] = useState({
    name: 'United States',
    callingCode: ['1'],
  });
  const [cca2, setcca2] = useState('US');
  const [professionList, setprofessionList] = useState([
    {
      id: 1,
      title: '',
    },
  ]);
  const setCountryValue = val => {
    setcca2(val.cca2);
    setcountry(val);
  };
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState('');
  const [userImage, setUserImage] = useState('');
  const [imageArray, setimageArray] = useState([]);
  const [isImgArray, setisImgArray] = useState(false);
  const isFocus = useIsFocused(null);
  const {support_detail} = useSelector(state => state?.supportReducer);
  const dispatch = useDispatch(null);

  useEffect(() => {
    if (isFocus) {
      setUserImage({
        path: support_detail?.support_closer?.profile_images || '',
      });
      setimageArray(support_detail?.support_closer?.uploded_images);
      setprofessionList(support_detail?.support_closer?.professions);
    }
  }, [isFocus]);

  //Gallery Handlers
  const showGallery = () => {
    setShow(false);
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        multiple: isImgArray,
      }).then(image => {
        if (isImgArray) {
          var array3 = imageArray.concat(image);
          const distinctItems = [
            ...new Map(array3.map(item => [item['size'], item])).values(),
          ];
          setimageArray(distinctItems);
        } else {
          setUserImage(image);
        }
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
        multiple: isImgArray,
      }).then(image => {
        if (isImgArray) {
          var array3 = imageArray.concat(image);
          const distinctItems = [
            ...new Map(array3.map(item => [item['size'], item])).values(),
          ];
          setimageArray(distinctItems);
        } else {
          setUserImage(image);
        }
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

  const handleUpdateProfile = async values => {
    const check = await checkConnected();
    if (check) {
      setIsLoading(true);
      const data = new FormData();
      let phone = '';
      if (values?.phone.charAt(0) == '0') {
        phone = values?.phone?.substring(1);
      } else {
        phone = values.phone;
      }
      data.append('user[full_name]', values?.fullname);
      data.append('user[email]', values?.email || '');
      data.append('user[phone_number]', values?.phone || '');
      data.append('user[description]', values?.bio || '');
      // data.append('user[country_name]', cca2 || '');
      // data.append('user[country_code]', country?.callingCode[0] || '');
      professionList?.forEach(item => {
        data.append('user[titles][]', item?.title);
      });
      data.append('user[currency_type]', '$');
      data.append('user[avatar]', {
        uri: userImage?.path,
        name: userImage?.filename || 'image',
        type: userImage?.mime || 'image/jpeg',
      });
      data?.append('user[currency_amount]', values?.hourly_rate);
      imageArray?.forEach(item => {
        data.append('user[images][]', {
          uri: item?.path || item?.image,
          name: item?.filename || 'image',
          type: item?.mime || 'image/jpeg',
        });
      });
      try {
        const res = await updateSupportUserData(data);
        if (res) {
          setIsLoading(false);
          Alert.alert('Success', 'Profile updated successfully!', [
            {
              text: 'OK',
              onPress: () => {
                navigation?.goBack();
              },
            },
          ]);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        let msg = responseValidator(
          error?.response?.status,
          error?.response?.data,
        );
        Alert.alert('Error', msg || 'Something went wrong!');
      }
    } else {
      Alert.alert('Error', networkText);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader />
      <AppLoader loading={isLoading} />
      <BackHeader title={'Edit Profile'} />
      <View style={styles.contentContainer}>
        <Formik
          initialValues={editSupportFormFields}
          onSubmit={values => {
            handleUpdateProfile(values);
          }}
          validationSchema={editSupportProfileFieldsVS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            handleReset,
            setFieldValue,
          }) => {
            useEffect(() => {
              setFieldValue(
                'hourly_rate',
                support_detail?.support_closer?.hourly_rate || 0,
              );
              setFieldValue(
                'fullname',
                support_detail?.support_closer?.full_name || '',
              );
              setFieldValue(
                'email',
                support_detail?.support_closer?.email || '',
              );
              setFieldValue(
                'bio',
                support_detail?.support_closer?.description || '',
              );
              setFieldValue(
                'phone',
                support_detail?.support_closer?.phone_number || '',
              );
              setcca2(support_detail?.support_closer?.country_name || 'US');
              setcountry({
                callingCode:
                  [support_detail?.support_closer?.country_code] || '1',
              });
            }, []);
            return (
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.inputContainer}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={spacing.py8}
                    onPress={() => {
                      setisImgArray(false);
                      setShow(true);
                    }}>
                    <View style={styles.imgCon}>
                      <ImageBackground
                        style={[styles.imgStyle]}
                        imageStyle={{
                          borderRadius: 15,
                        }}
                        source={{
                          uri: userImage?.path,
                        }}>
                        <Image
                          style={styles.iconStyle}
                          source={appIcons.gallery_1}
                        />
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <AppInput
                    onChangeText={handleChange('fullname')}
                    renderErrorMessage={true}
                    placeholder={data?.fullname || 'Enter Full Name'}
                    value={values.fullname}
                    onBlur={() => setFieldTouched('fullname')}
                    blurOnSubmit={false}
                    disableFullscreenUI={true}
                    autoCapitalize="none"
                    editable={false}
                    touched={touched.fullname}
                    errorMessage={errors.fullname}
                    title={'Full Name'}
                  />

                  <AppInput
                    onChangeText={handleChange('email')}
                    renderErrorMessage={true}
                    placeholder={data?.email || 'Enter Email Address'}
                    value={values.email}
                    onBlur={() => setFieldTouched('email')}
                    blurOnSubmit={false}
                    disableFullscreenUI={true}
                    autoCapitalize="none"
                    editable={false}
                    touched={touched.email}
                    errorMessage={errors.email}
                    title={'Email Address'}
                  />

                  <AppInput
                    onChangeText={handleChange('phone')}
                    renderErrorMessage={true}
                    placeholder={'Enter Phone Number'}
                    value={values.phone}
                    onBlur={() => setFieldTouched('phone')}
                    blurOnSubmit={false}
                    disableFullscreenUI={true}
                    autoCapitalize="none"
                    touched={touched.phone}
                    errorMessage={errors.phone}
                    title={'Phone Number'}
                    keyboardType={'phone-pad'}
                    rightIcon={
                      <CountryPicker
                        onSelect={setCountryValue}
                        translation="eng"
                        withFlag={true}
                        withEmoji={true}
                        countryCode={cca2}
                        withFilter={true}
                        withAlphaFilter={true}
                        withCallingCode={true}
                      />
                    }
                  />

                  <View style={[spacing.my4]}>
                    <Text style={[styles.h1Style]}>Profession</Text>
                    <FlatList
                      data={professionList}
                      renderItem={({item, index}) => {
                        return (
                          <AppInput
                            placeholder={
                              professionList[index].title || 'Enter Profession'
                            }
                            onChangeText={text => {
                              professionList[index].title = text;
                            }}
                          />
                        );
                      }}
                      ListFooterComponent={() => {
                        return (
                          <>
                            <Text
                              onPress={() => {
                                setprofessionList([
                                  ...professionList,
                                  {
                                    id: professionList.length + 1,
                                    title: '',
                                  },
                                ]);
                              }}
                              style={styles.rightText}>
                              Add More
                            </Text>
                          </>
                        );
                      }}
                    />
                  </View>
                  <AppInput
                    onChangeText={handleChange('hourly_rate')}
                    renderErrorMessage={true}
                    placeholder="Hourly Rate"
                    value={values.hourly_rate}
                    onBlur={() => setFieldTouched('hourly_rate')}
                    blurOnSubmit={false}
                    disableFullscreenUI={true}
                    autoCapitalize="none"
                    touched={touched.hourly_rate}
                    errorMessage={errors.hourly_rate}
                    title={'Hourly Rate'}
                    keyboardType={'numeric'}
                    leftIcon={
                      <Icon
                        type={'fontisto'}
                        name={'dollar'}
                        size={12}
                        color={colors.gr1}
                      />
                    }
                  />

                  <Text style={styles.textStyle}>Tell something about you</Text>
                  <TextBox
                    conStyle={spacing.px2}
                    onChangeText={handleChange('bio')}
                    value={values.bio}
                    placeholder={'Add here'}
                    error={errors.bio}
                    touched={touched.bio}
                    height={190}
                  />
                  <GalleryCard
                    onPressImg={index => {
                      removeImage(index);
                    }}
                    imageArray={imageArray}
                    onPress={() => {
                      setisImgArray(true);
                      setShow(true);
                    }}
                    title={'Upload Photos'}
                    // subtitle={'Max 30 images'}
                  />
                  <View style={styles.btnCon}>
                    <AppButton
                      onPress={handleSubmit}
                      title={'Save'}
                      bgColor={colors.p2}
                      shadowColor={colors.btn_shadow}
                    />
                  </View>
                </View>
                {show && (
                  <ImagePickerModal
                    show={show}
                    onPressHide={() => {
                      setisImgArray(false);
                      setShow(false);
                    }}
                    onPressGallery={() => {
                      showGallery();
                    }}
                    onPressCamera={() => {
                      showCamera();
                    }}
                  />
                )}
              </KeyboardAwareScrollView>
            );
          }}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default SupportEditProfile;
