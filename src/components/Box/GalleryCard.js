import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  appIcons,
  colors,
  commonStyles,
  family,
  size,
} from '../../shared/exporter';

export const GalleryCard = ({
  title,
  subtitle,
  onPress,
  imageArray,
  onPressImg,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleCon}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={commonStyles.aiRow}>
        <TouchableOpacity onPress={onPress}>
          <ImageBackground style={styles.imgCon}>
            <Image style={styles.imgStyle} source={appIcons.gallery_1} />
          </ImageBackground>
        </TouchableOpacity>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={imageArray}
          renderItem={({item, index}) => {
            return (
              <ImageBackground
                imageStyle={{borderRadius: 13}}
                style={styles.imgCon}
                source={{uri: item?.path}}>
                <TouchableOpacity
                  style={styles.iconCon}
                  onPress={() => onPressImg(index)}>
                  <Image style={styles.iconStyle} source={appIcons.cross} />
                </TouchableOpacity>
              </ImageBackground>
            );
          }}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  titleCon: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  title: {
    fontFamily: family.Gilroy_Medium,
    fontSize: size.xsmall,
    color: colors.b1,
  },
  subtitle: {
    fontSize: size.xxtiny,
    color: colors.b1,
    fontFamily: family.Gilroy_Medium,
  },
  imgCon: {
    height: 111,
    width: 111,
    borderWidth: 1,
    margin: 5,
    borderRadius: 13,
    borderColor: colors.g29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    height: 23,
    width: 23,
    resizeMode: 'contain',
  },
  iconStyle: {
    height: 8,
    width: 8,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  iconCon: {
    backgroundColor: colors.r1,
    height: 15,
    width: 15,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: -4,
    right: -3,
  },
});
