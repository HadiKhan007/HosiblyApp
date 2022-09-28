import React from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {appIcons, appImages} from '../../../../../shared/exporter';
import styles from './styles';

const MatchesTab = ({navigation, data}) => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={
            item?.image?.length > 0 ? {uri: item?.image[0]?.url} : appImages.ph
          }
          style={styles.imgStyle}
        />
        <View style={{paddingVertical: 5}}>
          <View style={styles.innerRow}>
            <Text numberOfLines={1} style={styles.nameTxtStyle}>
              {item?.title}
            </Text>
            {item?.is_new ? (
              <View style={styles.txtContainer}>
                <Text style={styles.newTxtStyle}>New</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.simpleRow}>
            <Text style={styles.smallTxtStyle}>${item?.price} | </Text>

            <Image
              resizeMode="contain"
              source={appIcons.bedIcon}
              style={styles.bedIconStyle}
            />
            <Text style={styles.smallTxtStyle}>{item?.bed_rooms || '0'}</Text>
            <Image source={appIcons.bathIcon} style={styles.bathIconStyle} />
            <Text resizeMode="contain" style={styles.smallTxtStyle}>
              {item?.bath_rooms || '0'}
            </Text>
          </View>
          <View style={[styles.simpleRow, {paddingTop: 0}]}>
            <Image source={appIcons.heartIcon} style={styles.heartIconStyle} />
            <Text style={styles.heartTxtStyle}>{item?.weight_age}% match</Text>
          </View>
          <Text style={styles.timeTxtStyle}>
            Last active: {item?.last_seen}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.paddingView}>
      <View style={styles.rowContainer}>
        <Text style={styles.titleTxtStyle}>Property Matches</Text>
        <Text
          style={styles.viewAllTxtStyle}
          onPress={() => navigation.navigate('AllMatches')}>
          View All
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MatchesTab;
