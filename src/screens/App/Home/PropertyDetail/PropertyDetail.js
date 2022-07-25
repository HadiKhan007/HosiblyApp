import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  AppButton,
  BackHeader,
  MyStatusBar,
  PreviewField,
  PreviewImageBox,
  PreviewImageCover,
  PreviewInfoCard,
  PriceInput,
  SmallHeading,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  appIcons,
  colors,
  condo_items,
  inputItems,
  size,
  spacing,
  WP,
} from '../../../../shared/exporter';
import styles from './styles';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {useSelector} from 'react-redux';

const PropertyDetail = ({navigation}) => {
  const {add_property_detail} = useSelector(state => state?.appReducer);
  const [previewImg, setPreviewImg] = useState('');

  useEffect(() => {
    setPreviewImg(
      add_property_detail?.images[0].uri ||
        'https://wallpaperaccess.com/full/1700222.jpg',
    );
  }, []);

  //On Post
  const onPost = () => {
    console.log(add_property_detail);
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Preview'} />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <PreviewImageCover uri={previewImg} />
          <View>
            <FlatList
              data={add_property_detail?.images}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setPreviewImg(item?.uri);
                    }}>
                    <PreviewImageBox
                      onPress={() => {}}
                      uri={
                        item?.uri ||
                        'https://wallpaperaccess.com/full/1700222.jpg'
                      }
                    />
                  </TouchableOpacity>
                );
              }}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
          <View style={spacing.my2}>
            <Text style={styles.header}>Information</Text>
            <View style={styles.spacRow}>
              <PreviewInfoCard
                item={{
                  h1: 'Price',
                  h2: `$${add_property_detail?.price || 0}`,
                  icon: appIcons.priceTag,
                }}
              />
              <PreviewInfoCard
                item={{
                  h1: 'Year Built',
                  h2: `${add_property_detail?.year_built || 0}`,
                  icon: appIcons.built,
                }}
              />
            </View>
            <Text numberOfLines={6} style={styles.desc}>
              {add_property_detail?.lot_description}
            </Text>
            <Divider color={colors.g13} />
            <PreviewField
              title={'Street Address'}
              subtitle={
                add_property_detail?.address ||
                '4517 New York Ave. Manchester, Kentucky 39495'
              }
            />
            <PreviewField
              title={'Unit'}
              subtitle={add_property_detail?.unit || '23'}
            />
            <PreviewField
              title={'Lot Frontage (sqm)'}
              subtitle={add_property_detail?.lot_frontage || '23'}
            />
            <PreviewField
              title={'Lot Depth (sqm)'}
              subtitle={add_property_detail?.lot_depth || '23'}
            />
            <PreviewField
              title={'Lot Size (feet)'}
              subtitle={add_property_detail?.lot_size || '23'}
            />
            <PreviewField
              title={'Is This Lot Irregular?'}
              subtitle={add_property_detail?.is_lot_irregular || 'No'}
            />
            <PreviewField title={'Property Taxes'} subtitle={'23'} />
            <PreviewField title={'Tax Year'} subtitle={'23'} />
            <View style={spacing.my4}>
              <Divider color={colors.g13} />
              <FlatList
                data={add_property_detail?.opition_data}
                renderItem={({item}) => {
                  return (
                    <View>
                      <PreviewField
                        source={item?.Img}
                        title={item?.title}
                        subtitle={item?.value || 'N/A'}
                      />
                    </View>
                  );
                }}
              />
            </View>

            <View style={styles.descBox}>
              <SmallHeading title={'Property Description'} />
              <SmallHeading
                textColor={colors.g22}
                title={add_property_detail?.property_desc || 'N/A'}
              />
              <SmallHeading title={'Appliances and other Items'} />
              <SmallHeading
                textColor={colors.g22}
                title={add_property_detail?.other_desc || 'N/A'}
              />
            </View>
          </View>
          <View style={styles.spacRow}>
            <AppButton
              width={'45%'}
              bgColor={colors.g21}
              title={'Save'}
              fontSize={size.tiny}
              borderColor={colors.g21}
              onPress={() => {}}
              shadowColor={colors.white}
            />
            <AppButton
              onPress={() => {
                onPost();
              }}
              width={'45%'}
              bgColor={colors.p2}
              title={'Post'}
              fontSize={size.tiny}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PropertyDetail;
