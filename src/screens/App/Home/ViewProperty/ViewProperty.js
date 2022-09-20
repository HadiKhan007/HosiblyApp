import React, {useEffect, useState, useCallback} from 'react';
import {
  Alert,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  AppButton,
  AppLoader,
  BackHeader,
  ContactModal,
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
import {addProperty} from '../../../../shared/service/PropertyService';

// redux stuff
import {useDispatch, useSelector} from 'react-redux';
import {set_address_request} from '../../../../redux/actions';

const ViewProperty = ({navigation}) => {
  const [loading, setloading] = useState(false);
  const [previewImg, setPreviewImg] = useState('');
  const [textShown, setTextShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  // redux stuff
  const dispatch = useDispatch();
  const {add_property_detail} = useSelector(state => state?.appReducer);

  // Set Preview Image
  useEffect(() => {
    setPreviewImg(
      add_property_detail?.images[0].path ||
        'https://wallpaperaccess.com/full/1700222.jpg',
    );
  }, []);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 6);
  }, []);

  const contactUser = () => {
    console.log('Contact User');
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
            match="75"
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
            <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 6}
              style={styles.descTxtStyle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
            {lengthMore ? (
              <Text onPress={toggleNumberOfLines} style={styles.readTxtStyle}>
                {textShown ? 'Less...' : 'More...'}
              </Text>
            ) : null}
            <Text numberOfLines={6} style={[styles.desc, {marginBottom: 0}]}>
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
            <View style={[styles.descBox, {marginTop: 13}]}>
              <SmallHeading title={'Rooms'} />
              {[1, 2, 3].map(item => {
                return (
                  <View style={styles.rowContainer}>
                    <Text style={styles.txtStyle}>Living Room</Text>
                    <Text style={styles.txtStyle}>Main Floor</Text>
                    <Text style={styles.txtStyle}>15’7” x 10’6”</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.spacRow}>
            <AppButton
              width={'45%'}
              bgColor={colors.g21}
              title={'View on Map'}
              fontSize={size.tiny}
              borderColor={colors.g21}
              onPress={() => navigation.navigate('PropertyOnMap')}
              shadowColor={colors.white}
            />
            <AppButton
              width={'45%'}
              bgColor={colors.p2}
              title={'Contact Seller'}
              fontSize={size.tiny}
              onPress={() => setShowModal(true)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      {showModal && (
        <ContactModal
          show={showModal}
          name={'Aspen Franci'}
          source={''}
          onPress={() => contactUser()}
          onPressHide={() => setShowModal(false)}
        />
      )}
      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};

export default ViewProperty;
