import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {AddressModal, AppButton, Spacer} from '../../../../../components';
import {
  WP,
  colors,
  appIcons,
  appImages,
  size,
  capitalizeFirstLetter,
} from '../../../../../shared/exporter';
import {addresses} from '../../../../../shared/utilities/constant';
import styles from './styles';

const BuyTab = ({navigation, buyer_data}) => {
  const [address, setAddress] = useState('');
  const [showAdvance, setShowAdvance] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

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
        <Text style={styles.addrsTxtStyle}>{item?.address}</Text>
        <Image source={appIcons.cross} style={styles.crossIconStyle} />
      </View>
    );
  };

  return (
    <>
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
            title: `Min Price (${buyer_data?.preference?.price_unit || 'USD'})`,
            property: buyer_data?.preference?.min_price || 'N/A',
            index: 1,
          }}
        />
        <RenderRow
          item={{
            title: `Max Price (${buyer_data?.preference?.price_unit || 'USD'})`,
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
        <TextInput
          value={address}
          style={styles.inputStyle}
          placeholder="Start typing..."
          placeholderTextColor={colors.g19}
          onChangeText={txt => setAddress(txt)}
        />
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
      <AddressModal
        show={showAddressModal}
        onPressHide={() => setShowAddressModal(false)}
      />
    </>
  );
};

export default BuyTab;
