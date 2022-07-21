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
import {Data, newItem} from '../../../../components/DetailsLIst.js/DetailList';
import {DetailButton} from '../../../../components/AppButton/DetailButton';

const AddMorePropertyDetails = ({navigation}) => {
  console.log('hhh-----', Data);
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
            data={Data}
            renderItem={({item, index}) => {
              return (
                <View>
                  <PriceInput
                    text={item.num}
                    title={item.name}
                    source={item.icon}
                    marginRight={WP(3)}
                  />
                </View>
              );
            }}
          />
          <FlatList
            data={newItem}
            renderItem={({index, item}) => {
              return (
                <View>
                  <DetailButton title={item.name} source={item.Img} />
                </View>
              );
            }}
          />
        </View>
        <ListModal />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddMorePropertyDetails;
