import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {colors, family, size, WP} from '../../shared/exporter';

export const FilterButton = ({title, onPress}) => {
  return (
    <View style={styles.continer}>
      <TouchableOpacity onPress={onPress} style={styles.btnCon}>
        <Text style={styles.title}>{title}</Text>
        <Icon name={'right'} type={'antdesign'} color={colors.g11} size={15} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    paddingHorizontal: WP('1'),
    height: 60,
  },
  title: {
    fontSize: size.xsmall,
    color: colors.g11,
    fontFamily: family.Gilroy_Medium,
  },
  btnCon: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
  },
});
