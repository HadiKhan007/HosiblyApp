import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {appIcons, appImages} from '../../../shared/theme/assets';
import styles from './styles';
import {AppButton, AppInput} from '../../../components';
import {BudgetBoost, WP} from '../../../shared/exporter';
import {Formik} from 'formik';
import {colors} from '../../../shared/exporter';
import {TextInput} from 'react-native-gesture-handler';

const ManageBoost = () => {
  const [value, setValue] = useState();
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.rootContainer}>
        <Formik
          initialValues={{budget: '', duration: ''}}
          onSubmit={values => {
            console.log(values);
          }}
          validationSchema={BudgetBoost}>
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
            <>
              <View style={styles.arrowcon}>
                <TouchableOpacity onPress={() => {}}>
                  <Image style={styles.imgIcon} source={appIcons.backArrow} />
                </TouchableOpacity>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.textstyle}>Manage your Boost</Text>
                <Text style={styles.inputtitle}>Total budget</Text>
                <View style={styles.inputStyle}>
                  <Text style={styles.inputtext}>USD</Text>
                  <TextInput
                    style={styles.textinputstyle}
                    placeholder="$15.00"
                    placeholderTextColor={colors.gr1}
                    onChangeText={handleChange('budget')}
                    renderErrorMessage={true}
                    value={values.budget}
                    onBlur={() => setFieldTouched('budget')}
                    blurOnSubmit={false}
                    disableFullscreenUI={true}
                    autoCapitalize="none"
                    touched={touched.budget}
                    errorMessage={errors.budget}
                    keyboardType="numeric"
                  />
                  {/* <AppInput
                    placeholder="$15.00"
                    placeholderTextColor={colors.gr1}
                    lable="USD"
                    onChangeText={handleChange('budget')}
                    renderErrorMessage={true}
                    value={values.budget}
                    onBlur={() => setFieldTouched('budget')}
                    blurOnSubmit={false}
                    disableFullscreenUI={true}
                    autoCapitalize="none"
                    touched={touched.budget}
                    errorMessage={errors.budget}
                    keyboardType="numeric"
                  /> */}
                </View>
                <Text style={styles.errtext}>{errors.budget}</Text>

                <Text style={styles.linetext}>
                  You can add you desired budget to reach more potential buyers.
                </Text>
                <Text style={styles.inputtitle}>Duraion</Text>
                <AppInput
                  placeholder={'MM/DD/YY'}
                  onChangeText={handleChange('duration')}
                  renderErrorMessage={true}
                  value={values.duration}
                  onBlur={() => setFieldTouched('duration')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.duration}
                  errorMessage={errors.duration}
                  rightIcon={
                    <TouchableOpacity onPress={() => {}}>
                      <Image
                        style={styles.inputicon}
                        source={appIcons.calender}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>
              <View style={styles.btn}>
                <AppButton
                  title="Proceed To Payment"
                  width="80%"
                  marginVertical={WP('40')}
                  shadowColor={colors.btn_shadow}
                  onPress={handleSubmit}
                />
                <AppInput />
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export {ManageBoost};
