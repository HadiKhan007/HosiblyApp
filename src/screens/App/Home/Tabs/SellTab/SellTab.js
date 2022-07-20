import React from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {appIcons, appImages} from '../../../../../shared/exporter';
import {recentSales} from '../../../../../shared/utilities/constant';
import styles from './styles';

const SellTab = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item?.img} style={styles.imgStyle} />
        <View style={{paddingVertical: 5}}>
          <View style={styles.innerRow}>
            <Text numberOfLines={1} style={styles.nameTxtStyle}>
              {item?.name}
            </Text>
            <View style={styles.txtContainer}>
              <Text style={styles.newTxtStyle}>{item?.saleNum}</Text>
            </View>
          </View>
          <View style={styles.simpleRow}>
            <Text style={styles.smallTxtStyle}>$25,000 | </Text>
            <Image
              resizeMode="contain"
              source={appIcons.bedIcon}
              style={styles.bedIconStyle}
            />
            <Text style={styles.smallTxtStyle}>4</Text>
            <Image source={appIcons.bathIcon} style={styles.bathIconStyle} />
            <Text resizeMode="contain" style={styles.smallTxtStyle}>
              3.5
            </Text>
          </View>
          <View style={[styles.simpleRow, {paddingTop: 2}]}>
            {item?.imges.map((item, index) => {
              return (
                index < 4 && (
                  <Image
                    source={appImages.personPh}
                    style={styles.personImgStyle(index)}
                  />
                )
              );
            })}
            {item?.imges?.length > 4 && (
              <View style={styles.countContainer}>
                <Text style={styles.countTxtStyle}>
                  +{item?.imges?.length - 4}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
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
      <FlatList
        data={recentSales}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SellTab;
