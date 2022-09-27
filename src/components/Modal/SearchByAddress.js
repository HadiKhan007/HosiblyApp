import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {colors, WP, HP, family, size} from '../../shared/exporter';

export const SearchByAddress = ({show, searchAddress, onPressHide}) => {
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
              height: WP('12'),
              borderRadius: 40,
              color: colors.white,
              textAlign: 'center',
              fontSize: size.xsmall,
              marginHorizontal: HP('2'),
              paddingHorizontal: WP('5'),
              backgroundColor: 'transparent',
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
          onFail={err => {
            console.log('[error while auto complete]', err);
          }}
          onPress={(data, details = true) => {
            searchAddress(data, details);
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
    flex: 0.9,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
});
