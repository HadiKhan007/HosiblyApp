import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';
import {it} from 'node:test';
let item;
export const AddressCard = item => {
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <Image
          style={styles.imgStyle}
          source={{uri: item?.item?.user_avatar}}
        />
      </View>
      <View>
        <Text style={styles.h1}>{item?.item?.user_full_name}</Text>
        <Text style={styles.h2}>
          Budget:
          <Text style={{color: colors.gr1}}>
            {' '}
            ${item?.item.min_price == null ? '0' : item?.item?.min_price} to $
            {item?.item?.max_price == null ? '0' : item?.item?.max_price}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
  imgBox: {
    height: 68,
    width: 68,
    borderRadius: 15,
    marginRight: 10,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#ccc',
  },
  h1: {
    fontFamily: family.Gilroy_SemiBold,
    fontSize: size.large,
    color: colors.b1,
    marginVertical: 5,
  },
  h2: {
    fontFamily: family.Gilroy_Medium,
    fontSize: size.tiny,
    color: colors.g23,
  },
});
