import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {AppButton, BackHeader} from '../../../../components';
import {Menu, MenuItem} from 'react-native-material-menu';
import {
  appIcons,
  appImages,
  colors,
  family,
  size,
  WP,
} from '../../../../shared/exporter';
import styles from './styles';
import {useSelector} from 'react-redux';

const AllMatches = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [filterType, setFilterType] = useState('All');
  const {getMatchList} = useSelector(state => state?.appReducer);

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

  const hideItemClick = type => {
    setFilterType(type);
    setShowMenu(false);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <BackHeader
        title="My Matches"
        txtCenter
        txtSize={size.xsmall}
        txtFamily={family.Gilroy_SemiBold}
      />
      <Text style={styles.titleTxtStyle}>Recent</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.typeRow}
        onPress={() => setShowMenu(true)}>
        <Image source={appIcons.blueHome} style={styles.homeIconStyle} />
        <Text style={styles.homeTxtStyle}>{filterType}</Text>
        <Icon
          type={'feather'}
          name={showMenu ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={colors.g2}
          style={{marginLeft: 5}}
        />
      </TouchableOpacity>
      <View style={styles.menuContainer}>
        <Menu
          visible={showMenu}
          style={styles.menuStyle}
          onRequestClose={() => setShowMenu(false)}>
          <MenuItem
            style={styles.menuItemStyle}
            textStyle={styles.menuTxtStyle}
            onPress={() => hideItemClick('Home')}>
            <View style={styles.menuItemRow}>
              <Image
                resizeMode="contain"
                source={appIcons.modelHome}
                style={styles.modelIconStyle}
              />
              <Text>Home</Text>
            </View>
          </MenuItem>
          <View style={styles.dividerView} />
          <MenuItem
            style={styles.menuItemStyle}
            textStyle={styles.menuTxtStyle}
            onPress={() => hideItemClick('Condo')}>
            <View style={styles.menuItemRow}>
              <Image
                resizeMode="contain"
                source={appIcons.condo}
                style={styles.modelIconStyle}
              />
              <Text>Condo</Text>
            </View>
          </MenuItem>
          <View style={styles.dividerView} />
          <MenuItem
            style={styles.menuItemStyle}
            textStyle={styles.menuTxtStyle}
            onPress={() => hideItemClick('Vacant Land')}>
            <View style={styles.menuItemRow}>
              <Image
                resizeMode="contain"
                source={appIcons.vacant}
                style={styles.modelIconStyle}
              />
              <Text>Vacant Land</Text>
            </View>
          </MenuItem>
        </Menu>
      </View>
      <FlatList
        data={getMatchList || {}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flStyle}
      />
      <View style={styles.bottomView}>
        <AppButton
          width="34.5%"
          height={WP('10.3')}
          title="View On Map"
          borderColor={colors.p2}
          textStyle={styles.tabTxtStyle}
          onPress={() => navigation.navigate('MapScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllMatches;
