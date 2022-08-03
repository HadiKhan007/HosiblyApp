import React from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {AppButton} from '../../../../../components';
import {
  appIcons,
  appImages,
  colors,
  property_image,
  WP,
} from '../../../../../shared/exporter';
import styles from './styles';
import DeviceInfo from 'react-native-device-info';

const SellTab = ({navigation, properties}) => {
  let hasNotch = DeviceInfo.hasNotch();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation?.navigate('PropertyDetails', {item: item});
        }}
        style={styles.itemContainer}>
        <Image
          source={{uri: item?.image[0].url, property_image}}
          style={styles.imgStyle}
        />
        <View style={{paddingVertical: 5}}>
          <View style={styles.innerRow}>
            <Text numberOfLines={1} style={styles.nameTxtStyle}>
              {item?.title}
            </Text>
            <View style={styles.txtContainer}>
              <Text style={styles.newTxtStyle}>{properties.length}</Text>
            </View>
          </View>
          <View style={styles.simpleRow}>
            <Text style={styles.smallTxtStyle}>
              {`$${item?.price || 0}`} |{' '}
            </Text>
            <Image
              resizeMode="contain"
              source={appIcons.bedIcon}
              style={styles.bedIconStyle}
            />
            <Text style={styles.smallTxtStyle}>{item?.bed_rooms || 0}</Text>
            <Image source={appIcons.bathIcon} style={styles.bathIconStyle} />
            <Text resizeMode="contain" style={styles.smallTxtStyle}>
              {item?.bath_rooms || 0}
            </Text>
          </View>
          <View style={[styles.simpleRow, {paddingTop: 2}]}>
            {[1, 2, 3, 4, 5, 6, 7]?.map((item, index) => {
              return (
                index < 4 && (
                  <Image
                    source={appImages.personPh}
                    style={styles.personImgStyle(index)}
                  />
                )
              );
            })}
            {[1, 2, 3, 4, 5, 6].length > 4 && (
              <View style={styles.countContainer}>
                <Text style={styles.countTxtStyle}>
                  +{[1, 2, 3, 4, 5, 6]?.length - 4}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.paddingView}>
      <View style={styles.rowContainer}>
        <Text style={styles.titleTxtStyle}>Recent</Text>
        <Text
          style={styles.viewAllTxtStyle}
          onPress={() => navigation.navigate('AllSales')}>
          View All
        </Text>
      </View>
      <View style={{height: hasNotch ? WP('85') : WP('60')}}>
        <FlatList
          data={properties}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.bottomView}>
        <AppButton
          width="38.5%"
          height={WP('10.3')}
          title="Enter Address"
          borderColor={colors.p2}
          shadowColor={colors.white}
          textStyle={styles.btnTxtStyle}
        />
        <View style={{width: WP('3')}} />
        <AppButton
          onPress={() => {
            navigation?.navigate('AddPropertyDetails');
          }}
          width="38.5%"
          height={WP('10.3')}
          borderColor={colors.p2}
          title="List A New Property"
          textStyle={styles.btnTxtStyle}
        />
      </View>
    </View>
  );
};

export default SellTab;
