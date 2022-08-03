import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {colors, family, HP, size, WP} from '../../shared/exporter';

export const DetailButton = ({
  title,
  onPress,
  source,
  marginRight,
  marginLeft,
  marginBottom,
  marginTop,
  tintColor,
}) => {
  return (
    <View style={styles.continer}>
      <TouchableOpacity onPress={onPress} style={styles.btnCon}>
        <View
          style={{
            height: 50,
            width: 40,
            justifyContent: 'center',
            marginRight: WP(1),
          }}>
          <Image
            source={source}
            style={[
              styles.imagStyle,
              {
                marginRight: marginRight,
                marginLeft: marginLeft,
                marginBottom: marginBottom,
                marginTop: marginTop,
                tintColor: tintColor,
              },
            ]}
          />
        </View>
        <View
          style={{
            height: HP(10),
            width: WP(65),
            // backgroundColor: 'blue',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: WP(8),
          }}>
          <Text style={[styles.title]}>{title}</Text>
        </View>
        <Icon
          name={'right'}
          type={'antdesign'}
          color={colors.g19}
          size={15}
          style={{
            marginLeft: WP(3),
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    height: 60,
    width: '100%',
  },
  title: {
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: family.Gilroy_Medium,
  },
  btnCon: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  imagStyle: {
    tintColor: 'black',
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
});
