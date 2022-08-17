import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  AppButton,
  BackHeader,
  FilterButton,
  ListModal,
  LivingSpaceInput,
  MyStatusBar,
  PriceInput,
} from '../../../components';
import styles from './styles';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {
  bath_list,
  beds_list,
  buyer_condo_list,
  buyer_house_inputs,
  buyer_house_list,
  buyer_vacant_input,
  buyer_vacant_list,
  colors,
  lat_frontage_list,
  property_type_list,
  size,
  spacing,
  WP,
} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {max} from 'moment';
const currency_list = ['CA$', 'PKR', 'INR', 'EUR'];

const FilterScreen = ({navigation}) => {
  const [currency, setCurrency] = useState('USD');
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [showMore, setshowMore] = useState(false);
  const [propertyType, setPropertyType] = useState({text: 'House'});
  const [propertyData, setPropertyData] = useState(null);
  const [minBedRooms, setminBedRooms] = useState({text: ''});
  const [bedRoomData, setbedRoomData] = useState(null);
  const [minBathRooms, setminBathRooms] = useState({text: ''});
  const [bathRoomData, setBathRoomData] = useState(null);
  const [latFrontage, setlatFrontage] = useState({text: ''});
  const [latFrontageData, setlatFrontageData] = useState(null);
  const [minPrice, setminPrice] = useState('');
  const [maxPrice, setmaxPrice] = useState('');
  const [inputList, setinputList] = useState([]);
  const [itemList, setitemList] = useState([]);

  //References
  const propertyTypeRef = useRef(null);
  const bedRoomRef = useRef(null);
  const bathRoomRef = useRef(null);
  const latForntageRef = useRef(null);

  //Set States
  useEffect(() => {
    setPropertyData({text: 'House'});
    setinputList(buyer_house_inputs);
    setitemList(buyer_house_list);
  }, []);

  const addPropertyData = async () => {
    const requestBody = {
      propertyType: propertyType?.text,
      minBedRooms: minBedRooms?.text,
      minBathRooms: minBathRooms?.text,
      latFrontage: latFrontage?.text,
      minPrice: minPrice,
      maxPrice: maxPrice,
    };
    console.log(requestBody);
  };

  //Set More Options
  const setMoreOptions = val => {
    if (val == 'House') {
      setitemList(buyer_house_list);
    } else if (val == 'Condo') {
      setitemList(buyer_condo_list);
    } else if (val == 'Vacant Land') {
      setitemList(buyer_vacant_list);
    }
  };
  //Set More Input Options
  const setMoreInputOptions = val => {
    if (val == 'House') {
      setinputList(buyer_house_inputs);
    } else if (val == 'Condo') {
      setinputList(buyer_house_inputs);
    } else if (val == 'Vacant Land') {
      setinputList(buyer_vacant_input);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Filter'} />
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: WP('2')}}>
        <View style={styles.contentContainer}>
          <View style={styles.inputCon}>
            <Divider color={colors.g18} />
            <FilterButton
              onPress={() => {
                propertyTypeRef?.current?.open();
              }}
              title={propertyType?.text}
            />
            <Divider color={colors.g18} />
            <PriceInput
              inputs={true}
              onSelect={val => {
                setCurrency(val);
              }}
              isPickerOpen={isPickerOpen}
              value={currency}
              onFocus={() => setIsPickerOpen(true)}
              onBlur={() => setIsPickerOpen(false)}
              list={currency_list}
              title={'Price'}
              defaultValue={'USD'}
              dropDown={true}
              onChangeText1={text => {
                setminPrice(text);
              }}
              onChangeText2={text => {
                setmaxPrice(text);
              }}
            />
            {propertyType?.text != 'Vacant Land' && (
              <>
                <Divider color={colors.g18} />
                <FilterButton
                  onPress={() => {
                    bedRoomRef?.current?.open();
                  }}
                  title={minBedRooms?.text || 'Min Bedrooms'}
                />
                <Divider color={colors.g18} />
                <FilterButton
                  onPress={() => {
                    bathRoomRef?.current?.open();
                  }}
                  title={minBathRooms?.text || 'Min Bathrooms'}
                />
              </>
            )}
            <Divider color={colors.g18} />
            <TouchableOpacity
              onPress={() => {
                setshowMore(!showMore);
              }}
              style={styles.aiRow}>
              <Text style={styles.textStyle}>Show advanced options</Text>
              <Icon
                name={showMore ? 'caretup' : 'caretdown'}
                type={'antdesign'}
                size={10}
                color={colors.p1}
                style={{marginLeft: 5}}
              />
            </TouchableOpacity>
            {showMore && (
              <>
                <FlatList
                  data={inputList}
                  renderItem={({item}) => {
                    return (
                      <>
                        <Divider color={colors.g18} />
                        <LivingSpaceInput
                          h1={item?.title}
                          h2={item?.subtitle}
                          h2FontSize={size.xsmall}
                          onChangeText1={text => {
                            item.minValue = text;
                          }}
                          onChangeText2={text => {
                            item.maxValue = text;
                          }}
                        />
                      </>
                    );
                  }}
                  keyExtractor={(item, index) => index?.toString()}
                />
                <FlatList
                  data={itemList}
                  renderItem={({item}) => {
                    return (
                      <>
                        <Divider color={colors.g18} />
                        <FilterButton title={item?.title} />
                      </>
                    );
                  }}
                  keyExtractor={(item, index) => index?.toString()}
                />
              </>
            )}
          </View>
          <View style={styles.spacRow}>
            <AppButton
              width={'45%'}
              bgColor={colors.g21}
              title={'Save'}
              fontSize={size.tiny}
              borderColor={colors.g21}
              onPress={() => {
                navigation?.goBack();
              }}
              shadowColor={colors.white}
            />

            <AppButton
              onPress={() => {
                addPropertyData();
              }}
              width={'45%'}
              bgColor={colors.p2}
              title={'Done'}
              fontSize={size.tiny}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      {/* Porperty modal */}
      <ListModal
        listRef={propertyTypeRef}
        list={property_type_list}
        getValue={(val, index) => {
          setPropertyData(val);
        }}
        onPressCross={() => {
          setPropertyData(propertyType);
          propertyTypeRef?.current?.close();
        }}
        onPressTick={() => {
          setMoreOptions(propertyData?.text);
          setMoreInputOptions(propertyData?.text);
          setPropertyType(propertyData);
          propertyTypeRef?.current?.close();
        }}
        selected={propertyData}
        title={'Property Type'}
      />

      {/* Bed Room Modal */}

      <ListModal
        listRef={bedRoomRef}
        list={beds_list}
        getValue={(val, index) => {
          setbedRoomData(val);
        }}
        onPressCross={() => {
          setbedRoomData(minBedRooms);
          bedRoomRef?.current?.close();
        }}
        onPressTick={() => {
          setminBedRooms(bedRoomData);
          bedRoomRef?.current?.close();
        }}
        title={'Min Bedrooms'}
        selected={bedRoomData}
      />

      {/* Bath Room Modal */}

      <ListModal
        listRef={bathRoomRef}
        list={bath_list}
        getValue={(val, index) => {
          setBathRoomData(val);
        }}
        onPressCross={() => {
          setBathRoomData(minBathRooms);
          bathRoomRef?.current?.close();
        }}
        onPressTick={() => {
          setminBathRooms(bathRoomData);
          bathRoomRef?.current?.close();
        }}
        selected={bathRoomData}
        title={'Min Bathrooms'}
      />

      {/* Lat Frontage Modal */}

      <ListModal
        listRef={latForntageRef}
        list={lat_frontage_list}
        getValue={(val, index) => {
          setlatFrontageData(val);
        }}
        onPressCross={() => {
          setlatFrontageData(latFrontage);
          latForntageRef?.current?.close();
        }}
        onPressTick={() => {
          setlatFrontage(latFrontageData);
          latForntageRef?.current?.close();
        }}
        selected={latFrontageData}
        title={'Min Lot Frontage'}
      />
    </SafeAreaView>
  );
};

export default FilterScreen;
