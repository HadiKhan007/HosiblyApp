import React, {useState, useLayoutEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {BackHeader} from '../../../../components';
import {Menu, MenuItem} from 'react-native-material-menu';
import {
  appIcons,
  appImages,
  colors,
  family,
  size,
} from '../../../../shared/exporter';
import {
  condoMatches,
  landMatches,
  propertyMatches,
} from '../../../../shared/utilities/constant';
import styles from './styles';

const PropertyDetails = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [matchFilter, setMatchFilter] = useState('Match');
  const [filterType, setFilterType] = useState('Top Match');
  const [showMatchMenu, setShowMatchMenu] = useState(false);
  const [item, setItem] = useState(route?.params?.item || []);

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

  const RenderDetails = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.detailsContainer}
        onPress={() => console.log('You touched me')}>
        <Image source={item?.img} style={styles.imgStyle} />
        <View>
          <Text numberOfLines={2} style={styles.nameTxtStyle}>
            {item?.name}
          </Text>
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
        </View>
      </TouchableOpacity>
    );
  };

  const hideItemClick = type => {
    setFilterType(type);
    setShowMenu(false);
  };

  const hideMatchClick = type => {
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
          <Image source={item?.img} style={styles.itemImgStyle} />
          <View style={styles.contentContainer}>
            <Text style={styles.nameStyle}>{item?.name}</Text>
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
              <Text style={styles.matchTxtStyle}> {item?.match} match</Text>
            </View>
          </View>
        </View>
        <Image source={item?.matchIcon} style={styles.matchImgStyle} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
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
            <MenuItem
              style={styles.menuItemStyle}
              textStyle={styles.menuTxtStyle}
              onPress={() => hideMatchClick('Draw Map')}>
              <Text>Draw Map</Text>
            </MenuItem>
            <MenuItem
              style={styles.menuItemStyle}
              textStyle={styles.menuTxtStyle}
              onPress={() => hideMatchClick('Dream Address')}>
              <Text>Dream Address</Text>
            </MenuItem>
          </Menu>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtracto={(item, index) => item + index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default PropertyDetails;
