import React, {useState} from 'react';
import {Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import {BackHeader} from '../../../../components';
import {Menu, MenuItem} from 'react-native-material-menu';
import {
  appIcons,
  appImages,
  colors,
  family,
  size,
} from '../../../../shared/exporter';
import {allSales} from '../../../../shared/utilities/constant';
import styles from './styles';

const AllSales = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [filterType, setFilterType] = useState('All');

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.itemContainer}
        onPress={() => console.log('You touched me')}>
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
      </TouchableOpacity>
    );
  };

  const closeRow = (map, key) => {
    map && map[key] && map[key].closeRow();
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <View style={styles.backBtnsContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.backLeftBtn, styles.backLeftBtnLeft]}
          onPress={() => closeRow(rowMap, data?.index)}>
          <Image
            resizeMode="contain"
            source={appIcons.editIcon}
            style={styles.iconStyle}
          />
          <Text style={styles.editBtnTxtStyle}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.backLeftBtn, styles.backLeftBtnRight]}
          onPress={() => closeRow(rowMap, data?.index)}>
          <Image
            resizeMode="contain"
            source={appIcons.markedIcon}
            style={styles.iconStyle}
          />
          <Text style={styles.btnTxtStyle}>Mark as Sold</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => closeRow(rowMap, data?.index)}>
          <Image
            resizeMode="contain"
            source={appIcons.editIcon}
            style={styles.iconStyle}
          />
          <Text style={styles.editBtnTxtStyle}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => closeRow(rowMap, data?.index)}>
          <Image
            resizeMode="contain"
            source={appIcons.delIcon}
            style={styles.iconStyle}
          />
          <Text style={styles.btnTxtStyle}>Delete</Text>
        </TouchableOpacity>
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
        title="My Property Lists"
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
      <View style={styles.container}>
        <SwipeListView
          useFlatList
          data={allSales}
          renderItem={renderItem}
          renderHiddenItem={(data, rowMap) => renderHiddenItem(data, rowMap)}
          leftOpenValue={180}
          rightOpenValue={-180}
          // previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          closeOnScroll
          onRowDidOpen={onRowDidOpen}
          onRowOpen={(rowKey, rowMap) => {
            let key = rowKey;
            if (key === rowKey) return;
            setTimeout(() => {
              rowMap[rowKey].closeRow();
            }, 2000);
          }}
          // closeOnRowPress
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllSales;
