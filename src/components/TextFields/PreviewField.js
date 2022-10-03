import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {colors, family, HP, size, WP} from '../../shared/exporter';

export const PreviewField = ({title, onPress, source, subtitle}) => {
  return (
    <View style={styles.continer}>
      <View style={styles.leftCon}>
        {source && <Image source={source} style={[styles.imagStyle]} />}
        <Text style={[styles.title]}>{title}</Text>
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: family.Gilroy_Medium,
  },

  leftCon: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '50%',
  },
  imagStyle: {
    height: 25,
    width: 25,
    bottom: 1,
    resizeMode: 'contain',
    marginRight: 10,
  },
  subtitle: {
    fontSize: size.xsmall,
    color: colors.g19,
    fontFamily: family.Gilroy_Medium,
    width: '50%',
    textAlign: 'right',
  },
});
