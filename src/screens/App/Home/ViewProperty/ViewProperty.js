import React, {useEffect, useState, useCallback} from 'react';
import {
  Text,
  View,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {
  AppButton,
  AppLoader,
  BackHeader,
  MyStatusBar,
  ContactModal,
  PreviewField,
  SmallHeading,
  PreviewImageBox,
  PreviewInfoCard,
  PreviewImageCover,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  size,
  colors,
  spacing,
  appIcons,
  networkText,
  checkConnected,
} from '../../../../shared/exporter';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {getPropertyInfo} from '../../../../redux/actions';

const ViewProperty = ({navigation}) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previewImg, setPreviewImg] = useState('');
  const [textShown, setTextShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  // redux stuff
  const dispatch = useDispatch();

  // Set Preview Image
  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const params = new FormData();
        params.append('property_id', '2');
        const onSuccess = res => {
          setItem(res);
          setLoading(false);
        };
        const onFailure = res => {
          setLoading(false);
          Alert.alert('Error', res);
          console.log('On Buyer prop Failure', res);
        };
        dispatch(getPropertyInfo(params, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 6);
  }, []);

  const contactUser = () => {
    setShowModal(false);
    console.log('Contact User', item?.user_id);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppLoader loading={loading} />
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Preview'} />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <PreviewImageCover
            h1={item?.title}
            h2={item?.property_type}
            uri={
              (item?.image && item?.image[0]?.url) ||
              'https://wallpaperaccess.com/full/1700222.jpg'
            }
            match={item?.weight_age || '0'}
          />
          {item?.image && item?.image?.length > 0 ? (
            <View>
              <FlatList
                data={item?.image}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setPreviewImg(item?.url);
                      }}>
                      <PreviewImageBox
                        onPress={() => {}}
                        uri={
                          item?.url ||
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
          ) : null}
          <View style={spacing.my2}>
            <Text style={styles.header}>Information</Text>
            <View style={styles.spacRow}>
              <PreviewInfoCard
                item={{
                  h1: 'Price',
                  h2: `$${item?.price || 0}`,
                  icon: appIcons.priceTag,
                }}
              />
              <PreviewInfoCard
                item={{
                  h1: 'Year Built',
                  h2: `${item?.year_built || 0}`,
                  icon: appIcons.built,
                }}
              />
            </View>
            <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 6}
              style={styles.descTxtStyle}>
              {item?.lot_description}
            </Text>
            {lengthMore ? (
              <Text onPress={toggleNumberOfLines} style={styles.readTxtStyle}>
                {textShown ? 'Less...' : 'More...'}
              </Text>
            ) : null}
            <Divider color={colors.g13} />
            <PreviewField
              title={'Street Address'}
              subtitle={item?.address || 'N/A'}
            />
            <PreviewField title={'Unit'} subtitle={item?.unit || '0'} />
            {item?.property_type != 'Condo' && (
              <>
                <PreviewField
                  title={`Lot Frontage (${item?.lot_frontage_unit})`}
                  subtitle={item?.lot_frontage_feet || '0'}
                />
                <PreviewField
                  title={`Lot Depth (${item?.lot_depth_unit})`}
                  subtitle={item?.lot_depth_feet || '0'}
                />
                <PreviewField
                  title={`Lot Size (${item?.lot_size_unit})`}
                  subtitle={item?.lot_size || '23'}
                />
                <PreviewField
                  title={'Is This Lot Irregular?'}
                  subtitle={item?.is_lot_irregular ? 'Yes' : 'No'}
                />
                <PreviewField
                  title={'Property Taxes'}
                  subtitle={item?.property_tax || ''}
                />
                <PreviewField
                  title={'Tax Year'}
                  subtitle={item?.tax_year || 'N/A'}
                />
              </>
            )}
            {item?.property_type == 'Condo' && (
              <>
                <PreviewField
                  title={'Locker'}
                  subtitle={item?.locker || 'N/A'}
                />
                <PreviewField
                  title={'Condo Corporation / HOA'}
                  subtitle={item?.condo_corporation_or_hqa || 'N/A'}
                />
                <PreviewField
                  title={'Condo/HOA fees (per month)'}
                  subtitle={item?.condo_fees || 'N/A'}
                />
              </>
            )}
            {item?.property_type != 'VacantLand' && (
              <View style={spacing.my4}>
                <Divider color={colors.g13} style={{marginBottom: 10}} />
                <PreviewField
                  source={appIcons.bath}
                  title={'Bath Rooms'}
                  subtitle={item?.bath_rooms || 'N/A'}
                />
                <PreviewField
                  source={appIcons.bed}
                  title={'Bed Rooms'}
                  subtitle={item?.bed_rooms || 'N/A'}
                />
                <PreviewField
                  source={appIcons.living_space}
                  title={'Total Number of Rooms'}
                  subtitle={item?.total_number_of_rooms || 'N/A'}
                />
                <PreviewField
                  source={appIcons.parking}
                  title={'Total Parking Spaces'}
                  subtitle={item?.total_parking_spaces || 'N/A'}
                />
                <PreviewField
                  source={appIcons.garage_space}
                  title={'Garage Spaces'}
                  subtitle={item?.garage_spaces || 'N/A'}
                />
                <PreviewField
                  source={appIcons.garage}
                  title={'Garage'}
                  subtitle={item?.garage || 'N/A'}
                />
                <PreviewField
                  source={appIcons.driveway}
                  title={'Driveway'}
                  subtitle={item?.driveway || 'N/A'}
                />
                <PreviewField
                  source={appIcons.parkingType}
                  title={'Parking Type'}
                  subtitle={item?.parking_type || 'N/A'}
                />
                <PreviewField
                  source={appIcons.ownership}
                  title={'Parking Ownership'}
                  subtitle={item?.parking_ownership || 'N/A'}
                />
                <PreviewField
                  source={appIcons.condoType}
                  title={'Condo Type'}
                  subtitle={item?.condo_type || 'N/A'}
                />
                <PreviewField
                  source={appIcons.condoStyle}
                  title={'Condo Style'}
                  subtitle={item?.condo_style || 'N/A'}
                />
                <PreviewField
                  source={appIcons.exterior}
                  title={'Exterior'}
                  subtitle={item?.exterior || 'N/A'}
                />
                <PreviewField
                  source={appIcons.balcony}
                  title={'Balcony'}
                  subtitle={item?.balcony || 'N/A'}
                />
                <PreviewField
                  source={appIcons.exposure}
                  title={'Exposure'}
                  subtitle={item?.exposure || 'N/A'}
                />
                <PreviewField
                  source={appIcons.security}
                  title={'Security'}
                  subtitle={item?.security || 'N/A'}
                />
                <PreviewField
                  source={appIcons.pets}
                  title={'Pets Allowed'}
                  subtitle={item?.pets_allowed ? 'True' : 'No'}
                />
                <PreviewField
                  source={appIcons.utilities}
                  title={'Included Utilities'}
                  subtitle={item?.bed_rooms || 'N/A'}
                />
                <PreviewField
                  source={appIcons.water}
                  title={'Water'}
                  subtitle={item?.water || 'N/A'}
                />
                <PreviewField
                  source={appIcons.sware}
                  title={'Sewer'}
                  subtitle={item?.sewer || 'N/A'}
                />
                <PreviewField
                  source={appIcons.source}
                  title={'Heat Source'}
                  subtitle={item?.heat_source || 'N/A'}
                />
                <PreviewField
                  source={appIcons.heat}
                  title={'Heat Type'}
                  subtitle={item?.heat_type || 'N/A'}
                />
                <PreviewField
                  source={appIcons.airCon}
                  title={'Air Conditioner'}
                  subtitle={item?.air_conditioner || 'N/A'}
                />
                <PreviewField
                  source={appIcons.loundry}
                  title={'Laundry'}
                  subtitle={item?.laundry || 'N/A'}
                />
                <PreviewField
                  source={appIcons.fire}
                  title={'Fireplace'}
                  subtitle={item?.fire_place || 'N/A'}
                />
                <PreviewField
                  source={appIcons.vacume}
                  title={'Central Vacuum'}
                  subtitle={item?.central_vacuum || 'N/A'}
                />
                <PreviewField
                  source={appIcons.bassement}
                  title={'Basement'}
                  subtitle={item?.basement || 'N/A'}
                />
                <PreviewField
                  source={appIcons.pool}
                  title={'Pool'}
                  subtitle={item?.pool || 'N/A'}
                />
              </View>
            )}
            <View style={styles.descBox}>
              <SmallHeading title={'Property Description'} />
              <SmallHeading
                textColor={colors.g22}
                title={item?.property_desc || 'N/A'}
              />
              {item?.property_type != 'VacantLand' && (
                <>
                  <SmallHeading title={'Appliances and other Items'} />
                  <SmallHeading
                    textColor={colors.g22}
                    title={item?.appliances_and_other_items || 'N/A'}
                  />
                </>
              )}
            </View>
            {/* <View style={[styles.descBox, {marginTop: 13}]}>
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
            </View> */}
          </View>
          <View style={styles.spacRow}>
            <AppButton
              width={'45%'}
              bgColor={colors.g21}
              title={'View on Map'}
              fontSize={size.tiny}
              borderColor={colors.g21}
              shadowColor={colors.white}
              onPress={() => navigation.navigate('MapProperty', {item: item})}
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
          name={item?.user_name}
          source={item?.user_avatar}
          onPress={() => contactUser()}
          onPressHide={() => setShowModal(false)}
        />
      )}
    </SafeAreaView>
  );
};

export default ViewProperty;
