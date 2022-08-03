import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';

export const PreviewInfoCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCon}>
        <View style={styles.imgCon}>
          <Image source={item?.icon} style={styles.iconStyle} />
        </View>
      </View>
      <View>
        <Text style={styles.h1}>{item?.h1}</Text>
        <Text style={styles.h2}>{item?.h2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
  },
  leftCon: {
    width: '40%',
    height: '100%',
  },
  rightCon: {
    alignItems: 'center',
    width: '60%',
    height: '100%',
  },
  iconStyle: {
    height: 26,
    width: 26,
    resizeMode: 'contain',
  },
  imgCon: {
    height: 57,
    width: 57,
    borderRadius: 13,
    backgroundColor: colors.white,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 6,
    shadowOpacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    color: colors.b1,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
    marginBottom: 2,
  },
  h2: {
    color: colors.b1,
    fontSize: size.large,
    fontFamily: family.Gilroy_SemiBold,
  },
});
