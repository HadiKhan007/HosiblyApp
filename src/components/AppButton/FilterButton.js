import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {colors, family, size, WP} from '../../shared/exporter';

export const FilterButton = ({
  title,
  onPress,
  source,
  marginRight,
  marginLeft,
  marginBottom,
  marginTop,
  textColor,
}) => {
  return (
    <View style={styles.continer}>
      <TouchableOpacity onPress={onPress} style={styles.btnCon}>
        <Text style={[styles.title, {color: textColor || colors.g19}]}>
          {title}
        </Text>
        <Icon name={'right'} type={'antdesign'} color={colors.g19} size={15} />
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
    color: colors.g19,
    fontFamily: family.Gilroy_Medium,
  },
  btnCon: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
  },
});
