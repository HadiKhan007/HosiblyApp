import {
  Alert,
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
  AppLoader,
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
  checkConnected,
  colors,
  networkText,
  size,
  spacing,
  WP,
} from '../../../../shared/exporter';
import styles from './styles';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {useDispatch, useSelector} from 'react-redux';
import {addProperty} from '../../../../shared/service/PropertyService';
import {
  add_property_detail_request,
  set_address_request,
} from '../../../../redux/actions';
import {setAddressRequest} from '../../../../redux/saga/app-sega/app-sega';

const PropertyDetail = ({navigation}) => {
  const {add_property_detail} = useSelector(state => state?.appReducer);
  const [previewImg, setPreviewImg] = useState('');
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  // Set Preview Image
  useEffect(() => {
    setPreviewImg(
      add_property_detail?.images[0].path ||
        'https://wallpaperaccess.com/full/1700222.jpg',
    );
  }, []);

  //On Post
  const onPost = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setloading(true);
        var formdata = new FormData();
        const filterArr = add_property_detail?.option_data?.map(item => {
          return {
            title: item?.title,
            value: item?.value,
          };
        });

        add_property_detail?.images?.forEach(item => {
          formdata.append('property[images][]', {
            uri: item?.path,
            type: item?.mime || 'image/jpeg',
            name: item?.filename || 'image',
          });
        }),
          formdata.append('property[title]', add_property_detail?.title || '');
        formdata.append(
          'property[zip_code]',
          add_property_detail?.zip_code || '',
        );
        formdata.append('property[price]', add_property_detail?.price || '');
        formdata.append(
          'property[currency_type]',
          add_property_detail?.currency_type || '',
        );
        formdata.append(
          'property[year_built]',
          add_property_detail?.year_built || '',
        );
        formdata.append(
          'property[address]',
          add_property_detail?.address || '',
        );
        formdata.append('property[unit]', add_property_detail?.unit || '');
        formdata.append(
          'property[lot_frontage]',
          add_property_detail?.lot_frontage || '',
        );
        formdata.append(
          'property[lot_frontage_unit]',
          add_property_detail?.lot_frontage_unit || 'feet',
        );
        formdata.append(
          'property[lot_depth]',
          add_property_detail?.lot_depth || '',
        );
        formdata.append(
          'property[lot_depth_unit]',
          add_property_detail?.lot_depth_unit || 'feet',
        );
        formdata.append(
          'property[lot_size]',
          add_property_detail?.lot_size || '',
        );
        formdata.append(
          'property[lot_size_unit]',
          add_property_detail?.lot_size_unit || '',
        );
        formdata.append(
          'property[is_lot_irregular]',
          add_property_detail?.is_lot_irregular || 'No',
        );
        formdata.append(
          'property[lot_description]',
          add_property_detail?.property_desc || '',
        );
        formdata.append(
          'property[property_tax]',
          add_property_detail?.property_tax || '',
        );
        formdata.append(
          'property[tax_year]',
          add_property_detail?.text_year || '',
        );
        formdata.append('property[locker]', add_property_detail?.locker || '');
        formdata.append(
          'property[condo_corporation_or_hqa]',
          add_property_detail?.condo_corporation_or_hqa || '',
        );
        formdata.append(
          'property[other_options]',
          JSON.stringify(filterArr) || JSON.stringify([]),
        );
        formdata.append(
          'property[property_type]',
          add_property_detail?.property_type == 'Vacant Land'
            ? 'vacant_land'
            : add_property_detail?.property_type || 'house',
        );
        const res = await addProperty(formdata, setloading);
        if (res) {
          const onSuccess = res => {
            setloading(false);
            dispatch(set_address_request('', () => {}));
            navigation?.navigate('Home');
          };
          dispatch(add_property_detail_request(null, onSuccess));
        }
      } catch (error) {
        setloading(false);
        console.log('Error', error);
      }
    } else {
      Alert.alert('Error', networkText);
    }
  };

  //on Press Save
  const onPressSave = async () => {
    add_property_detail.save_desc = true;
    add_property_detail.save_list = true;
    add_property_detail.save_data = true;
    dispatch(
      add_property_detail_request(add_property_detail, () => {
        Alert.alert('Success', 'Information Saved Successfully');
      }),
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Preview'} />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <PreviewImageCover
            h1={add_property_detail?.title}
            h2={add_property_detail?.property_type}
            uri={previewImg}
          />
          <View>
            <FlatList
              data={add_property_detail?.images}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setPreviewImg(item?.path);
                    }}>
                    <PreviewImageBox
                      onPress={() => {}}
                      uri={
                        item?.path ||
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
              subtitle={add_property_detail?.address || 'N/A'}
            />
            <PreviewField
              title={'Unit'}
              subtitle={add_property_detail?.unit || '0'}
            />
            {add_property_detail?.property_type != 'Condo' && (
              <>
                <PreviewField
                  title={`Lot Frontage (${add_property_detail?.lot_frontage_unit})`}
                  subtitle={add_property_detail?.lot_frontage || '0'}
                />
                <PreviewField
                  title={`Lot Depth (${add_property_detail?.lot_depth_unit})`}
                  subtitle={add_property_detail?.lot_depth || '0'}
                />
                <PreviewField
                  title={`Lot Size (${add_property_detail?.lot_size_unit})`}
                  subtitle={add_property_detail?.lot_size || '23'}
                />
                <PreviewField
                  title={'Is This Lot Irregular?'}
                  subtitle={add_property_detail?.is_lot_irregular || 'No'}
                />
                <PreviewField
                  title={'Property Taxes'}
                  subtitle={add_property_detail?.property_tax || ''}
                />
                <PreviewField
                  title={'Tax Year'}
                  subtitle={add_property_detail?.tax_year || ''}
                />
              </>
            )}
            {add_property_detail?.property_type == 'Condo' && (
              <>
                <PreviewField
                  title={'Locker'}
                  subtitle={add_property_detail?.locker || 'N/A'}
                />
                <PreviewField
                  title={'Condo Corporation / HOA'}
                  subtitle={
                    add_property_detail?.condo_corporation_or_hqa || 'N/A'
                  }
                />
                <PreviewField
                  title={'Condo/HOA fees (per month)'}
                  subtitle={add_property_detail?.condo_fees || 'N/A'}
                />
              </>
            )}
            {add_property_detail?.property_type != 'Vacant Land' && (
              <View style={spacing.my4}>
                <Divider color={colors.g13} />
                <FlatList
                  data={add_property_detail?.option_data}
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
                  keyExtractor={(item, index) => item?.toString()}
                />
              </View>
            )}

            <View style={styles.descBox}>
              <SmallHeading title={'Property Description'} />
              <SmallHeading
                textColor={colors.g22}
                title={add_property_detail?.property_desc || 'N/A'}
              />
              {add_property_detail?.property_type != 'Vacant Land' && (
                <>
                  <SmallHeading title={'Appliances and other Items'} />
                  <SmallHeading
                    textColor={colors.g22}
                    title={add_property_detail?.other_desc || 'N/A'}
                  />
                </>
              )}
            </View>
          </View>
          <View style={styles.spacRow}>
            <AppButton
              width={'45%'}
              bgColor={colors.g21}
              title={'Save'}
              fontSize={size.tiny}
              borderColor={colors.g21}
              onPress={() => {
                onPressSave();
              }}
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
      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};

export default PropertyDetail;
