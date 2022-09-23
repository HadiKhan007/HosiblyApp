import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {
  AddressModal,
  AppButton,
  Spacer,
  AppLoader,
} from '../../../../../components';
import {
  getDreamAddressAction,
  dreamAddressSearch,
  deleteDreamAddressAction,
} from '../../../../../redux/actions/app-actions/app-actions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  WP,
  colors,
  appIcons,
  appImages,
  size,
  capitalizeFirstLetter,
  HP,
  family,
  commonStyles,
} from '../../../../../shared/exporter';
// import {addresses} from '../../../../../shared/utilities/constant';
import styles from './styles';

const BuyTab = ({navigation, buyer_data}) => {
  const [address, setAddress] = useState('');
  const [showAdvance, setShowAdvance] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addresses, setAdrresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    getDreamAddressList();
  }, []);

  const RenderRow = ({item}) => {
    return (
      <View style={styles.itemRow(item?.index)}>
        <Text style={styles.titleTxtStyle}>{item?.title}</Text>
        <Text style={styles.valTxtStyle}>{item?.property}</Text>
      </View>
    );
  };

  const AddressesRow = ({item, index}) => {
    return (
      <View style={styles.addressItemRow(index)}>
        <Text style={styles.addrsTxtStyle}>{item?.location}</Text>
        <TouchableOpacity onPress={() => deleteDreamAddress(item?.id)}>
          <Image source={appIcons.cross} style={styles.crossIconStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  // get address
  const getDreamAddressList = () => {
    setLoading(true);
    try {
      const cbSuccess = res => {
        setAdrresses(res?.dream_addresses);
        setLoading(false);
      };
      const cbFailure = err => {
        setLoading(false);
      };
      dispatch(getDreamAddressAction(cbSuccess, cbFailure));
    } catch (error) {
      setLoading(false);
    }
  };

  // search address
  const searchDreamAddress = location => {
    setLoading(true);
    const data = new FormData();
    data.append('location', location?.description);
    try {
      const cbSuccess = res => {
        ref.current?.clear();
        getDreamAddressList();
        setLoading(false);
      };
      const cbFailure = err => {
        alert('Something went wrong');
        setLoading(false);
      };
      dispatch(dreamAddressSearch(data, cbSuccess, cbFailure));
    } catch (error) {
      alert('Something went wrong');
      setLoading(false);
    }
  };

  // delete address

  const deleteDreamAddress = id => {
    setLoading(true);
    try {
      const cbSuccess = res => {
        getDreamAddressList();
        setLoading(false);
      };
      const cbFailure = err => {
        alert('Something went wrong');
        setLoading(false);
      };
      dispatch(deleteDreamAddressAction(id, cbSuccess, cbFailure));
    } catch (error) {
      alert('Something went wrong');
      setLoading(false);
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.paddingView}>
          <Text style={styles.propertyTxtStyle}>
            Your Current Buyer Preference
          </Text>
          <RenderRow
            item={{
              title: 'Property Type',
              property:
                capitalizeFirstLetter(buyer_data?.preference?.property_type) ||
                'N/A',
              index: 0,
            }}
          />
          <RenderRow
            item={{
              title: `Min Price (${
                buyer_data?.preference?.price_unit || 'USD'
              })`,
              property: buyer_data?.preference?.min_price || 'N/A',
              index: 1,
            }}
          />
          <RenderRow
            item={{
              title: `Max Price (${
                buyer_data?.preference?.price_unit || 'USD'
              })`,
              property: buyer_data?.preference?.max_price || 'N/A',
              index: 2,
            }}
          />
          <RenderRow
            item={{
              title: 'Bedrooms',
              property: buyer_data?.preference?.min_bedrooms || 'N/A',
              index: 3,
            }}
          />
          <RenderRow
            item={{
              title: 'Bathrooms',
              property: buyer_data?.preference?.min_bathrooms || 'N/A',
              index: 4,
            }}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.iconRow}
            onPress={() => setShowAdvance(!showAdvance)}>
            <Text style={styles.advanceTxtStyle}>Show Advance Options</Text>
            <Icon
              type={'antdesign'}
              name={showAdvance ? 'caretup' : 'caretdown'}
              size={10}
              color={colors.p1}
            />
          </TouchableOpacity>
          {showAdvance && (
            <>
              <RenderRow
                item={{
                  title: 'Property Types',
                  property: buyer_data?.preference?.property_types || 'N/A',
                  index: 5,
                }}
              />
              <RenderRow
                item={{
                  title: 'Property Styles',
                  property: buyer_data?.preference?.property_style || 'N/A',
                  index: 6,
                }}
              />
              <RenderRow
                item={{
                  title: 'Min Lot Forntage',
                  property: buyer_data?.preference?.min_lot_frontage || 'N/A',
                  index: 7,
                }}
              />
              <RenderRow
                item={{
                  title: 'Lot Size (ft)',
                  property: buyer_data?.preference?.min_lot_size || 'N/A',
                  index: 8,
                }}
              />

              <RenderRow
                item={{
                  title: 'Total Number of Rooms(Min)',
                  property: buyer_data?.preference?.min_living_space || 'N/A',
                  index: 9,
                }}
              />
              <RenderRow
                item={{
                  title: 'Total Number of Rooms(Max)',
                  property: buyer_data?.preference?.max_living_space || 'N/A',
                  index: 10,
                }}
              />
              <RenderRow
                item={{
                  title: 'Parking Spots Req.',
                  property: buyer_data?.preference?.parking_spot || 'N/A',
                  index: 11,
                }}
              />
              <RenderRow
                item={{
                  title: 'Garage Spots Req.',
                  property: buyer_data?.preference?.garbage_spot || 'N/A',
                  index: 12,
                }}
              />
              <RenderRow
                item={{
                  title: 'Balcony',
                  property: buyer_data?.preference?.balcony || 'N/A',
                  index: 13,
                }}
              />
              <RenderRow
                item={{
                  title: 'Security',
                  property: buyer_data?.preference?.security || 'N/A',
                  index: 14,
                }}
              />
              <RenderRow
                item={{
                  title: 'Laundry',
                  property: buyer_data?.preference?.laundry || 'N/A',
                  index: 15,
                }}
              />
            </>
          )}

          <ImageBackground
            source={appImages.map}
            style={styles.mapImgStyle}
            imageStyle={{borderRadius: 7}}>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('MapScreen');
              }}>
              <Image source={appIcons.addressIcon} style={styles.iconStyle} />
            </TouchableOpacity>
            <Text style={styles.addressTxtStyle}>Last Updated: None</Text>
          </ImageBackground>
          <View style={styles.infoRowContainer}>
            <Text style={styles.propertyTxtStyle}>Dream Addresses</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowAddressModal(true)}>
              <Image source={appIcons.infoIcon} style={styles.infoIconStyle} />
            </TouchableOpacity>
          </View>
          <View style={styles.dividerView} />
          {/* <TextInput
          value={address}
          style={styles.inputStyle}
          placeholder="Start typing..."
          placeholderTextColor={colors.g19}
          onChangeText={txt => setAddress(txt)}
        /> */}
          <View>
            {/* <KeyboardAwareScrollView
              style={commonStyles.flex1}
              contentContainerStyle={commonStyles.keyboardView}
              showsVerticalScrollIndicator={false}> */}
            <GooglePlacesAutocomplete
              ref={ref}
              placeholder="Add your dream address"
              GooglePlacesDetailsQuery={{fields: 'geometry'}}
              keyboardShouldPersistTaps
              keepResultsAfterBlur
              viewIsInsideTabBar
              fetchDetails={true}
              textInputProps={{
                placeholderTextColor: colors.g1,
              }}
              // clear: () => {
              //        inputRef.current.clear()
              //         _handleChangeText('');
              //       },
              styles={{
                textInputContainer: {backgroundColor: 'transparent'},
                textInput: {
                  height: WP('15'),
                  color: colors.b1,
                  paddingHorizontal: 2,
                  fontSize: size.xsmall,
                  fontFamily: family.Gilroy_Medium,
                },
                description: {
                  color: colors.b1,
                },
                container: {
                  width: '95%',
                  alignSelf: 'center',
                },
              }}
              clear={clr => {}}
              onFail={err => {
                console.log('[error while auto complete]', err);
              }}
              onPress={(data, details = true) => {
                searchDreamAddress(data, details);
              }}
              query={{
                key: 'AIzaSyBq3-UEY9QO9X45s8w54-mrwjBQekzDlsA',
                language: 'en',
              }}
            />
            {/* </KeyboardAwareScrollView> */}
          </View>

          <View style={[styles.dividerView, {marginBottom: WP('4')}]} />

          {addresses.map((item, index) => {
            return <AddressesRow item={item} index={index} />;
          })}
        </View>
        <Spacer androidVal={WP('2')} iOSVal={WP('2')} />
        <AppButton
          width={'43%'}
          borderColor={colors.p2}
          title="Edit Buyer Preference"
          textStyle={{fontSize: size.tiny}}
          onPress={() => {
            navigation?.navigate('FilterScreen');
          }}
        />
      </ScrollView>
      <AddressModal
        show={showAddressModal}
        onPressHide={() => setShowAddressModal(false)}
      />
      <AppLoader loading={loading} />
    </>
  );
};

export default BuyTab;
