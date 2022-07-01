import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  AppButton,
  AppHeader,
  AppInput,
  BackHeader,
  ImagePickerModal,
  TextBox,
} from '../../../components';
import {
  AddPersonalInfoField,
  AddPersonalInfoVS,
  appIcons,
} from '../../../shared/exporter';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import ImagePicker from 'react-native-image-crop-picker';

const AddPersonalInfo = ({navigation}) => {
  const [profilePic, setprofilePic] = useState(null);
  const [show, setShow] = useState(false);
  //Gallery Handlers
  const showGallery = () => {
    setShow(false);
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
      }).then(image => {
        setprofilePic(image);
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
      }).then(image => {
        setprofilePic(image);
        setShow(false);
      });
    }, 400);
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader />
      <BackHeader title={'Your Information'} />
      <View style={styles.contentContainer}>
        <Formik
          initialValues={AddPersonalInfoField}
          onSubmit={values => {
            navigation?.navigate('VerifyOTP');
          }}
          validationSchema={AddPersonalInfoVS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            handleReset,
          }) => (
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.inputContainer}>
                <View style={styles.imgCon}>
                  <TouchableOpacity
                    onPress={() => {
                      setShow(true);
                    }}>
                    <ImageBackground
                      style={[styles.imgStyle]}
                      imageStyle={{
                        borderRadius: 15,
                      }}
                      source={{
                        uri: profilePic?.path,
                      }}>
                      <Image
                        style={styles.iconStyle}
                        source={appIcons.gallery_1}
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <Text style={styles.h1Style}>Tell something about you</Text>
                <TextBox />
              </View>
              <View>
                <AppButton
                  title={'Done'}
                  onPress={() => {
                    navigation?.navigate('Login');
                  }}
                />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
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

export default AddPersonalInfo;
