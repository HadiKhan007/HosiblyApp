import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {
  AddressCard,
  BackHeader,
  FilterInput,
  MyStatusBar,
} from '../../../../components';
import {
  colors,
  spacing,
  WP,
  HP,
  size,
  family,
} from '../../../../shared/exporter';
import styles from './styles';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {useDispatch, useSelector} from 'react-redux';
import {set_address_request} from '../../../../redux/actions';
import {searchAddress} from '../../../../redux/actions/app-actions/app-actions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
let location;
const AddAddress = ({navigation}) => {
  const {address} = useSelector(state => state?.appReducer);
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();

  const ref = useRef();

  // useEffect(() => {
  //   ref.current?.setAddressText(location);
  // }, [ref]);

  const getSearchList = value => {
    const data = new FormData();
    data.append('', value);
    try {
      const cbSuccess = res => {
        setdata(res);
      };
      const cbFailure = err => {};
      dispatch(searchAddress(data, cbSuccess, cbFailure));
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <MyStatusBar />
        <View style={spacing.my2}>
          <BackHeader subtitle={'Enter Address'} />
        </View>
        <View style={styles.contentContainer}>
          <Divider color={colors.g13} />

          <GooglePlacesAutocomplete
            ref={ref}
            placeholder="Add Adress"
            GooglePlacesDetailsQuery={{fields: 'geometry'}}
            keyboardShouldPersistTaps
            keepResultsAfterBlur
            viewIsInsideTabBar
            fetchDetails={true}
            textInputProps={{
              placeholderTextColor: colors.g1,
              onChangeText: value => {
                location = value;
                console.log('val', value);
              },
            }}
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
            onPress={data => {
              location = data?.description;
              // dispatch(set_address_request(location, () => {}));
            }}
            query={{
              key: 'AIzaSyBq3-UEY9QO9X45s8w54-mrwjBQekzDlsA',
              language: 'en',
            }}
          />

          <Divider color={colors.g13} />
          <Text style={[styles.h1, {marginVertical: 10}]}>
            People who searched this address
          </Text>
          <Text style={[styles.h1, {color: colors.p1}]}>6 entries</Text>

          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={() => {
              return <AddressCard />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAddress;
