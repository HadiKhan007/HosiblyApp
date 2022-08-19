import React, {useState, useLayoutEffect} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useIsFocused} from '@react-navigation/core';
import {
  AppButton,
  BackHeader,
  PreviewImageBox,
  Spacer,
} from '../../../../components';
import {
  appIcons,
  appImages,
  appLogos,
  colors,
  family,
  size,
  WP,
} from '../../../../shared/exporter';
import {homeDetails} from '../../../../shared/utilities/constant';
import styles from './styles';

const PropertyInfo = ({navigation, route}) => {
  const isFocus = useIsFocused();
  const [previewImg, setPreviewImg] = useState('');

  const RenderDetails = () => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.detailsContainer}>
        <Image
          source={{
            uri:
              previewImg ||
              route?.params?.item?.image[0]?.url ||
              property_image,
          }}
          style={styles.imgStyle}
        />
        <View>
          <Text numberOfLines={2} style={styles.nameTxtStyle}>
            {route?.params?.item?.title || ''}
          </Text>
          <View style={styles.simpleRow}>
            <Text style={styles.smallTxtStyle}>
              {`$${route?.params?.item?.price}`} |{' '}
            </Text>
            <Image
              resizeMode="contain"
              source={appIcons.bedIcon}
              style={styles.bedIconStyle}
            />
            <Text style={styles.smallTxtStyle}>
              {route?.params?.item?.bed_rooms || 0}
            </Text>
            <Image source={appIcons.bathIcon} style={styles.bathIconStyle} />
            <Text resizeMode="contain" style={styles.smallTxtStyle}>
              {route?.params?.item?.bath_rooms || 0}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const RenderRow = ({item, index}) => {
    return (
      <View style={styles.itemRow(index)}>
        <Text style={styles.titleTxtStyle}>{item?.title}</Text>
        <View style={styles.contentRow}>
          <Text style={styles.valTxtStyle}>{item?.property}</Text>
          <Image
            source={item?.isHave ? appIcons.checkIcon : appIcons.crossedIcon}
            style={styles.iconStyle}
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar backgroundColor={colors.g5} />
      <Spacer androidVal={WP('5')} iOSVal={WP('0')} />
      <BackHeader
        title="Buyer’s Preference"
        txtCenter
        txtSize={size.xsmall}
        txtFamily={family.Gilroy_SemiBold}
      />
      <RenderDetails />
      <View style={styles.h80}>
        <FlatList
          data={route?.params?.item?.image}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setPreviewImg(item?.url);
                }}>
                <PreviewImageBox
                  uri={
                    item?.url || 'https://wallpaperaccess.com/full/1700222.jpg'
                  }
                />
              </TouchableOpacity>
            );
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.headTxtStyle}>Preference</Text>
        {homeDetails?.map((item, index) => {
          return <RenderRow item={item} index={index} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default PropertyInfo;
