import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  AppButton,
  BackHeader,
  DetailButton,
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
import {
  colors,
  home_items,
  inputItems,
  size,
  spacing,
  WP,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddMorePropertyDetails = ({navigation}) => {
  const onFinish = () => {
    const selectedItems = home_items.filter(
      item => item != undefined && item?.value != '',
    );
    const selectedInputs = inputItems.filter(
      item => item != undefined && item?.value != '0',
    );
    const finalArray = selectedInputs.concat(home_items);
    console.log(finalArray);
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
                  title={item.name}
                  source={item.icon}
                  marginRight={WP('3')}
                  onChangeText={text => {
                    inputItems[index].value = text;
                  }}
                />
              );
            }}
          />
          <FlatList
            data={home_items}
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
          />
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
