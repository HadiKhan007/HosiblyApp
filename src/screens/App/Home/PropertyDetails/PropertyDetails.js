import React, {useState, useLayoutEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useIsFocused} from '@react-navigation/core';
import {Spacer, BackHeader, AppLoader} from '../../../../components';
import {Menu, MenuItem} from 'react-native-material-menu';
import {
  appIcons,
  appImages,
  colors,
  family,
  size,
  WP,
} from '../../../../shared/exporter';
import {
  condoMatches,
  landMatches,
  propertyMatches,
  property_image,
} from '../../../../shared/utilities/constant';
import styles from './styles';
import {propertyFilterAction} from '../../../../redux/actions/app-actions/app-actions';
import {useDispatch} from 'react-redux';

const PropertyDetails = ({navigation, route}) => {
  const isFocus = useIsFocused();
  const [data, setData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [matchFilter, setMatchFilter] = useState('Match');
  const [filterType, setFilterType] = useState('Top Match');
  const [showMatchMenu, setShowMatchMenu] = useState(false);
  const [loading, setloading] = useState(false);
  const [matchedProperty, setmatchedProperty] = useState([]);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
  }, [isFocus]);

  useLayoutEffect(() => {
    let type = route?.params?.item?.type;
    if (type === 'House') {
      setData(propertyMatches);
    } else if (type === 'Condo') {
      setData(condoMatches);
    } else {
      setData(landMatches);
    }
  }, []);

  const getFilteredProperty = type => {
    let propertyId = route?.params?.item?.id;
    setloading(true);
    try {
      const data = new FormData();
      data.append('property_id', propertyId);

      if (type == 'Dream Address') {
        data.append('dream_address', true);
      } else if (type == 'Newest First') {
        data.append('newest_first', true);
      } else if (type == 'Top Matches') {
        data.append('top_match', true);
      } else if (type == 'Match') {
        data.append('user_preference', true);
      }
      const cbSuccess = res => {
        if (res?.message === 'No Property available') {
        } else {
          setmatchedProperty(res?.property);
        }
        // setmatchedProperty(res?.property);
        setShowMenu(false);
        setShowMatchMenu(false);
        setloading(false);
      };
      const cbFailure = err => {
        setloading(false);
      };
      dispatch(propertyFilterAction(data, cbSuccess, cbFailure));
    } catch (error) {
      setShowMenu(false);
      setloading(false);
    }
  };

  const RenderDetails = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.detailsContainer}
        onPress={() => {
          navigation.navigate('PropertyInfo', {
            item: route?.params?.item,
            itemType: route?.params?.item?.type,
          });
        }}>
        <Image
          source={{uri: route?.params?.item?.image[0]?.url || property_image}}
          style={styles.imgStyle}
        />
        <View>
          <Text numberOfLines={2} style={styles.nameTxtStyle}>
            {route?.params?.item?.title || ''}
          </Text>
          <View style={styles.simpleRow}>
            <Text style={styles.smallTxtStyle}>
              {`$${route?.params?.item?.price}`} |{' '}
            </Text>
            <Image
              resizeMode="contain"
              source={appIcons.bedIcon}
              style={styles.bedIconStyle}
            />
            <Text style={styles.smallTxtStyle}>
              {route?.params?.item?.bed_rooms || 0}
            </Text>
            <Image source={appIcons.bathIcon} style={styles.bathIconStyle} />
            <Text resizeMode="contain" style={styles.smallTxtStyle}>
              {route?.params?.item?.bath_rooms || 0}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const hideItemClick = type => {
    getFilteredProperty(type);
    setFilterType(type);
    setShowMenu(false);
    setShowMatchMenu(false);
  };

  const hideMatchClick = type => {
    getFilteredProperty(type);
    setShowMenu(false);
    setMatchFilter(type);

    setShowMatchMenu(false);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate('PersonDetails', {
            item: item,
            itemType: route?.params?.item?.type,
          })
        }>
        <View style={styles.innerRow}>
          <Image source={appImages.cardBg} style={styles.itemImgStyle} />
          <View style={styles.contentContainer}>
            <Text style={styles.nameStyle}>User1</Text>
            <Text style={styles.txtStyle}>
              Budget: <Text style={styles.spanTxtStyle}>$25,000</Text> to{' '}
              <Text style={styles.spanTxtStyle}>$50,000</Text>
            </Text>
            <View style={styles.iconRow}>
              <Icon
                name={'heart'}
                type={'antdesign'}
                size={10}
                color={colors.r2}
              />
              <Text style={styles.matchTxtStyle}> 90% match</Text>
            </View>
          </View>
        </View>
        {/* <Image source={item?.matchIcon} style={styles.matchImgStyle} /> */}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar backgroundColor={colors.g5} />
      <Spacer androidVal={WP('5')} iOSVal={WP('0')} />
      <BackHeader
        title="Potential Buyers"
        txtCenter
        txtSize={size.xsmall}
        txtFamily={family.Gilroy_SemiBold}
      />
      <RenderDetails />
      <View style={styles.container}>
        <Text style={styles.titleTxtStyle}>Recent</Text>
        <View style={styles.menuesContainer}>
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
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.typeRow}
            onPress={() => setShowMatchMenu(true)}>
            <Image source={appIcons.blueHome} style={styles.homeIconStyle} />
            <Text style={styles.homeTxtStyle}>{matchFilter}</Text>
            <Icon
              type={'feather'}
              name={showMatchMenu ? 'chevron-up' : 'chevron-down'}
              size={16}
              color={colors.g2}
              style={{marginLeft: 5}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
          <Menu
            visible={showMenu}
            style={styles.menuStyle}
            onRequestClose={() => setShowMenu(false)}>
            <MenuItem
              style={styles.menuItemStyle}
              textStyle={styles.menuTxtStyle}
              onPress={() => hideItemClick('Top Matches')}>
              <Text>Top Matches</Text>
            </MenuItem>
            <MenuItem
              style={styles.menuItemStyle}
              textStyle={styles.menuTxtStyle}
              onPress={() => hideItemClick('Newest First')}>
              <Text>Newest First</Text>
            </MenuItem>
          </Menu>
        </View>
        <View style={styles.menuContainer1}>
          <Menu
            visible={showMatchMenu}
            style={styles.menuStyle1}
            onRequestClose={() => setShowMatchMenu(false)}>
            <MenuItem
              style={styles.menuItemStyle}
              textStyle={styles.menuTxtStyle}
              onPress={() => hideMatchClick('Match')}>
              <Text>Match</Text>
            </MenuItem>
            {/* <MenuItem
              style={styles.menuItemStyle}
              textStyle={styles.menuTxtStyle}
              onPress={() => hideMatchClick('Draw Map')}>
              <Text>Draw Map</Text>
            </MenuItem> */}
            <MenuItem
              style={styles.menuItemStyle}
              textStyle={styles.menuTxtStyle}
              onPress={() => hideMatchClick('Dream Address')}>
              <Text>Dream Address</Text>
            </MenuItem>
          </Menu>
        </View>
        {matchedProperty ? (
          <FlatList
            data={matchedProperty}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtracto={(item, index) => item + index.toString()}
          />
        ) : (
          <Text style={styles.noFoundText}>No data found</Text>
        )}
        <AppLoader loading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default PropertyDetails;
