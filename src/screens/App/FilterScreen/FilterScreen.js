import {
  Alert,
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
  DoublePriceInput,
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
  select_option_list,
  size,
  spacing,
  WP,
} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {set_buyer_properties} from '../../../redux/actions';
const currency_list = ['CA$', 'USD'];

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
  const [Id, setId] = useState(0);
  //References
  const propertyTypeRef = useRef(null);
  const bedRoomRef = useRef(null);
  const bathRoomRef = useRef(null);
  const latForntageRef = useRef(null);
  const selectOptionRef = useRef(null);

  const dispatch = useDispatch(null);
  const {buyer_preferences} = useSelector(state => state?.appReducer);

  //Set States
  useEffect(() => {
    if (buyer_preferences?.save_data) {
      setPropertyType(buyer_preferences?.property_type);
      setPropertyData(buyer_preferences?.property_type);
      setminBedRooms(buyer_preferences?.min_bed_rooms);
      setbedRoomData(buyer_preferences?.min_bed_rooms);
      setBathRoomData(buyer_preferences?.min_bath_rooms);
      setminBathRooms(buyer_preferences?.min_bath_rooms);
      setlatFrontage(buyer_preferences?.lat_frontage);
      setlatFrontageData(buyer_preferences?.lat_frontage);
      setminPrice(buyer_preferences?.min_price);
      setmaxPrice(buyer_preferences?.max_price);
      setinputList(buyer_preferences?.input_list);
      setitemList(buyer_preferences?.item_list);
      setCurrency(buyer_preferences?.currency_type);
    } else {
      setPropertyData({text: 'House'});
      setinputList(buyer_house_inputs);
      setitemList(buyer_house_list);
    }
    return () => {
      if (!buyer_preferences?.save_data) {
        for (let i = 0; i < buyer_house_inputs.length; i++) {
          buyer_house_inputs[i].minValue = '';
          buyer_house_inputs[i].maxValue = '';
        }
        for (let i = 0; i < buyer_house_list.length; i++) {
          buyer_house_list[i].value = '';
        }
        for (let i = 0; i < buyer_condo_list.length; i++) {
          buyer_condo_list[i].value = '';
        }
        for (let i = 0; i < buyer_vacant_input.length; i++) {
          buyer_vacant_input[i].minValue = '';
          buyer_vacant_input[i].maxValue = '';
        }
        for (let i = 0; i < buyer_vacant_list.length; i++) {
          buyer_vacant_list[i].value = '';
        }
      }
    };
  }, []);

  const addPropertyData = async () => {
    const filterItem = itemList?.map(item => {
      return {
        title: item?.title,
        value: item?.value,
      };
    });

    const filterInput = inputList?.map(item => {
      return {
        title: item?.title,
        minValue: item?.minValue,
        maxValue: item?.maxValue,
      };
    });
    const requestBody = {
      property_type: propertyType?.text,
      min_bed_rooms: propertyType?.text == 'House' ? minBedRooms?.text : '',
      min_bath_rooms: propertyType?.text == 'House' ? minBathRooms?.text : '',
      lat_frontage: latFrontage?.text,
      min_price: minPrice,
      max_price: maxPrice,
      currency_type: currency,
      other_options: filterItem,
      other_inputs: filterInput,
    };
    console.log(requestBody);
    const onSuccess = res => {
      // navigation?.goBack();
    };
    dispatch(set_buyer_properties(requestBody, onSuccess));
  };

  const onSavePropertyData = async () => {
    const requestBody = {
      property_type: propertyType,
      min_bed_rooms: minBedRooms,
      currency_type: currency,
      min_bath_rooms: minBathRooms,
      lat_frontage: latFrontage,
      min_price: minPrice,
      max_price: maxPrice,
      input_list: inputList,
      item_list: itemList,
      save_data: true,
    };

    const onSuccess = res => {
      Alert.alert('Success', 'Information Saved Successfully');
    };
    dispatch(set_buyer_properties(requestBody, onSuccess));
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

  //on Press Item
  const onPressItem = (item, index) => {
    setId(index);
    selectOptionRef?.current?.open();
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
            <DoublePriceInput
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
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <Divider color={colors.g18} />
                        <LivingSpaceInput
                          h1={item?.title}
                          h2={item?.subtitle}
                          h2FontSize={size.xsmall}
                          onChangeText1={text => {
                            item.minValue = text;
                            setinputList([...inputList]);
                          }}
                          onChangeText2={text => {
                            inputList[index].maxValue = text;
                            setinputList([...inputList]);
                          }}
                          val1={inputList[index]?.minValue}
                          val2={inputList[index]?.maxValue}
                        />
                      </>
                    );
                  }}
                  keyExtractor={(item, index) => index?.toString()}
                />
                {propertyType?.text != 'Condo' && (
                  <FilterButton
                    onPress={() => {
                      latForntageRef?.current?.open();
                    }}
                    title={latFrontage?.text || 'Min Lot Frontage'}
                  />
                )}
                <FlatList
                  data={itemList}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <Divider color={colors.g18} />
                        <FilterButton
                          onPress={() => {
                            onPressItem(item, index);
                          }}
                          title={item?.value || item?.title}
                        />
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
                onSavePropertyData();
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

      <ListModal
        listRef={selectOptionRef}
        list={select_option_list}
        getValue={(val, index) => {
          itemList[Id].value = val?.text;
          setitemList([...itemList]);
          selectOptionRef?.current?.close();
        }}
        NotleftIcon={true}
        NotrightIcon={true}
        selected={{text: itemList[Id]?.value || ''}}
        title={itemList[Id]?.title}
        closable={true}
      />
    </SafeAreaView>
  );
};

export default FilterScreen;
