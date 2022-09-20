import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {colors, WP, HP, family, size} from '../../shared/exporter';

export const SearchByAddress = ({show, onPressHide, onPress}) => {
  return (
    <Modal onBackdropPress={onPressHide} isVisible={show}>
      <View style={styles.modalContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search for school by address"
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          fetchDetails={true}
          textInputProps={{
            placeholderTextColor: colors.g1,
          }}
          styles={{
            textInputContainer: {backgroundColor: 'transparent'},
            textInput: {
              color: colors.white,
              height: WP('12'),
              borderRadius: 40,
              fontSize: size.xsmall,
              marginHorizontal: HP('2'),
              paddingHorizontal: WP('5'),
              backgroundColor: 'transparent',
              fontFamily: family.Gilroy_Medium,
            },
            description: {
              color: colors.white,
            },
            container: {
              width: '95%',
              alignSelf: 'center',
            },
          }}
          onFail={err => {
            console.log('[error while auto complete]', err);
          }}
          onPress={(data, details = true) => {
            // 'details' is provided when fetchDetails = true
            let mapRegion = {
              latitude: parseFloat(details?.geometry?.location?.lat),
              longitude: parseFloat(details?.geometry?.location?.lng),
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            };
            onPress(mapRegion);
          }}
          query={{
            key: 'AIzaSyBq3-UEY9QO9X45s8w54-mrwjBQekzDlsA',
            language: 'en',
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 8,
    marginBottom: WP('20'),
    backgroundColor: 'white',
    marginHorizontal: WP('5'),
    paddingHorizontal: WP('3.5'),
    backgroundColor: 'transparent',
  },
});
