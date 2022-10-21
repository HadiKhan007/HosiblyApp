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
  const {item} = route?.params;
  const RenderDetails = () => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.detailsContainer}>
        <Image
          source={{
            uri: previewImg || item?.image[0]?.url || property_image,
          }}
          style={styles.imgStyle}
        />
        <View>
          <Text numberOfLines={2} style={styles.nameTxtStyle}>
            {item?.title || ''}
          </Text>
          <View style={styles.simpleRow}>
            <Text style={styles.smallTxtStyle}>{`$${item?.price}`} | </Text>
            <Image
              resizeMode="contain"
              source={appIcons.bedIcon}
              style={styles.bedIconStyle}
            />
            <Text style={styles.smallTxtStyle}>{item?.bed_rooms || 0}</Text>
            <Image source={appIcons.bathIcon} style={styles.bathIconStyle} />
            <Text resizeMode="contain" style={styles.smallTxtStyle}>
              {item?.bath_rooms || 0}
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
          data={item?.image}
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
        <RenderRow
          item={{
            id: 1,
            title: 'Budget',
            property: item?.price || 0,
            isHave: item?.price && true,
          }}
        />
        {item?.property_type == 'House' && 'Condo' && (
          <>
            <RenderRow
              item={{
                id: 2,
                title: 'Bedrooms',
                property: item?.bed_rooms || 0,
                isHave: item?.bed_rooms && true,
              }}
            />

            <RenderRow
              item={{
                id: 3,
                title: 'Bathrooms',
                property: item?.bath_rooms || 0,
                isHave: item?.bath_rooms && true,
              }}
            />
            <RenderRow
              item={{
                id: 8,
                title: 'Living Space',
                property: item?.living_spaces || 'N/A',
                isHave: item?.living_spaces && true,
              }}
            />

            <RenderRow
              item={{
                id: 9,
                title: 'Parking Spots Req.',
                property: item?.total_parking_spaces || '',
                isHave: item?.total_parking_spaces && true,
              }}
            />

            <RenderRow
              item={{
                id: 10,
                title: 'Garage Spots Req.',
                property: item?.garage_spaces || '',
                isHave: item?.garage_spaces && true,
              }}
            />
          </>
        )}

        <RenderRow
          item={{
            id: 4,
            title: 'Property Types',
            property: item?.property_type || '',
            isHave: item?.property_type && true,
          }}
        />

        <RenderRow
          item={{
            id: 5,
            title: 'Property Styles',
            property: item?.house_style || item?.condo_style || 'N/A',
            isHave: (item?.house_style && true) || (item?.condo_style && true),
          }}
        />

        <RenderRow
          item={{
            id: 6,
            title: 'Min Lot Forntage',
            property: item?.lot_frontage_feet || 0,
            isHave: item?.lot_frontage_feet && true,
          }}
        />
        <RenderRow
          item={{
            id: 7,
            title: 'Lot Size (ft)',
            property: item?.lot_size_feet || 0,
            isHave: item?.lot_size_feet && true,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PropertyInfo;
