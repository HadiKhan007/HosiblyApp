import React from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {
  appIcons,
  appImages,
  property_image,
} from '../../../../../shared/exporter';
import styles from './styles';
import {BlankField} from '../../../../../components';

const SellTab = ({navigation, properties}) => {
  const renderItem = ({item, index}) => {
    console.log('IMAGES:  ', item);
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation?.navigate('PropertyDetails', {item: item});
        }}
        style={styles.itemContainer}>
        <Image
          source={{uri: item?.image[0]?.url || property_image}}
          style={styles.imgStyle}
        />
        <View style={{paddingVertical: 5}}>
          <View style={styles.innerRow}>
            <Text numberOfLines={1} style={styles.nameTxtStyle}>
              {item?.title}
            </Text>
            {/* <View style={styles.txtContainer}>
              <Text style={styles.newTxtStyle}>{properties.length}</Text>
            </View> */}
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
            {item?.image?.map((i, index) => {
              return (
                index < 4 && (
                  <Image
                    source={{uri: i?.url}}
                    style={styles.personImgStyle(index)}
                  />
                )
              );
            })}
            {item?.image?.length > 4 && (
              <View style={styles.countContainer}>
                <Text style={styles.countTxtStyle}>
                  +{item?.image?.length - 4}
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
      {properties != '' ? (
        <View style={{height: '94%'}}>
          <FlatList
            nestedScrollEnabled={true}
            data={properties}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <BlankField title={'No Property Available'} />
      )}
    </View>
  );
};

export default SellTab;
