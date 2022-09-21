import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {AppButton} from '../AppButton/AppButton';
import {colors, WP, family, size} from '../../shared/exporter';

export const PostalCode = ({show, searchByCode, onPressHide}) => {
  const [postalCode, setPostalCode] = useState('');

  return (
    <Modal onBackdropPress={onPressHide} isVisible={show}>
      <View style={styles.modalContainer}>
        <TextInput
          placeholder="Postal Code"
          style={styles.inputStyle}
          placeholderTextColor={colors.white}
          onChangeText={txt => setPostalCode(txt)}
        />
        <AppButton
          width="62%"
          height={WP('9.2')}
          fontSize={size.tiny}
          style={{marginLeft: 6}}
          borderColor={colors.p2}
          title="Search By Postal Code"
          onPress={() => {
            onPressHide();
            searchByCode(postalCode);
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 8,
    paddingTop: WP('3.5'),
    backgroundColor: 'white',
    marginHorizontal: WP('5'),
    paddingHorizontal: WP('3.5'),
    backgroundColor: 'transparent',
  },
  inputStyle: {
    textAlign: 'center',
    color: colors.white,
    fontSize: size.xsmall,
    marginBottom: WP('8'),
    fontFamily: family.Gilroy_Medium,
  },
});
