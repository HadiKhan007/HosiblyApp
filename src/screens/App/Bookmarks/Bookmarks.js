import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Spacer, DeleteModal, AppLoader} from '../../../components';
import {Menu, MenuItem} from 'react-native-material-menu';
import {
  appIcons,
  checkConnected,
  colors,
  WP,
  networkText,
} from '../../../shared/exporter';
import {allMatches, allSales} from '../../../shared/utilities/constant';
import styles from './styles';
import {useIsFocused} from '@react-navigation/core';

// redux stuff
import {useDispatch, useSelector} from 'react-redux';
import {
  getBookmarksRequest,
  filterBookmarksRequest,
  deleteBookmarkRequest,
} from '../../../redux/actions';

const Bookmarks = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocus = useIsFocused(null);
  const [item, setItem] = useState('');
  const [data, setData] = useState(allSales);
  const [loading, setLoading] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState('All');

  //Get Bookmarks
  useEffect(() => {
    if (isFocus) {
      getAllBookMarks();
    }
  }, [isFocus]);

  //Get All Bookmarks
  const getAllBookMarks = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const onSuccess = res => {
          // setBookmarks(res);
          setLoading(false);
          console.log('Bookmarks Res => ', res);
        };
        const onFailure = res => {
          setLoading(false);
        };
        dispatch(getBookmarksRequest(onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  //Get Filtered BookMarks
  const getFilteredBookMarks = async type => {
    let keyword =
      type === 'Support Closers' ? 'support_closer' : type.toLowerCase();
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const onSuccess = res => {
          // setBookmarks(res);
          setLoading(false);
          setShowMenu(false);
          console.log('Filter Res => ', res);
        };
        const onFailure = res => {
          setLoading(false);
          setShowMenu(false);
          Alert.alert('Error', res);
        };
        var form = new FormData();
        form.append('keyword', keyword);
        dispatch(filterBookmarksRequest(form, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item?.img} style={styles.imgStyle} />
        <View style={{paddingVertical: 5}}>
          <Text numberOfLines={1} style={styles.nameTxtStyle}>
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
          <View style={[styles.simpleRow, {paddingTop: 0}]}>
            <Image source={appIcons.heartIcon} style={styles.heartIconStyle} />
            <Text style={styles.heartTxtStyle}>90% match</Text>
          </View>
          <Text style={styles.timeTxtStyle}>Last active: 1 day ago</Text>
        </View>
      </View>
    );
  };

  const closeRow = (map, key) => {
    map && map[key] && map[key].closeRow();
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const handleDelete = data => {
    setItem(data?.item);
    setTimeout(() => {
      setShowModal(true);
    }, 300);
  };

  const deleteFromBookmarks = async selItem => {
    setShowModal(false);
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const onSuccess = res => {
          setLoading(false);
          setShowMenu(false);
          // getAllBookMarks(false);
          console.log('Delete Res => ', res);
        };
        const onFailure = res => {
          setLoading(false);
          setShowMenu(false);
          Alert.alert('Error', res);
          console.log('On Filter prop Failure', res);
        };
        dispatch(deleteBookmarkRequest(selItem?.id, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <View style={styles.backBtnsContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.delBtnStyle}
          onPress={() => {
            closeRow(rowMap, data?.index);
            handleDelete(data);
          }}>
          <Image
            resizeMode="contain"
            source={appIcons.delIcon}
            style={styles.delIconStyle}
          />
          <Text style={styles.btnTxtStyle}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const hideItemClick = type => {
    setFilterType(type);
    setShowMenu(false);
    getFilteredBookMarks(type);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppLoader loading={loading} />
      <Spacer androidVal={WP('5')} iOSVal={WP('0')} />
      <Text style={styles.headerTxtStyle}>Bookmarks</Text>
      <Text style={styles.titleTxtStyle}>Recent</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.typeRow}
        onPress={() => setShowMenu(true)}>
        <Image source={appIcons.filter} style={styles.homeIconStyle} />
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
            onPress={() => hideItemClick('All')}>
            <View style={styles.menuItemRow}>
              <Image
                resizeMode="contain"
                source={appIcons.allIcon}
                style={styles.modelIconStyle}
              />
              <Text style={[styles.menuTxtStyle, {left: 1.5}]}>All</Text>
            </View>
          </MenuItem>
          <View style={styles.dividerView} />
          <MenuItem
            style={styles.menuItemStyle}
            textStyle={styles.menuTxtStyle}
            onPress={() => hideItemClick('Properties')}>
            <View style={styles.menuItemRow}>
              <Image
                resizeMode="contain"
                source={appIcons.condoStyle}
                style={styles.modelIconStyle}
              />
              <Text style={styles.menuTxtStyle}>Properties</Text>
            </View>
          </MenuItem>
          <View style={styles.dividerView} />
          <MenuItem
            style={styles.menuItemStyle}
            textStyle={styles.menuTxtStyle}
            onPress={() => hideItemClick('Support Closers')}>
            <View style={styles.menuItemRow}>
              <Image
                resizeMode="contain"
                source={appIcons.closersIcon}
                style={styles.modelIconStyle}
              />
              <Text style={styles.menuTxtStyle}>Support Closers</Text>
            </View>
          </MenuItem>
        </Menu>
      </View>
      <View style={styles.container}>
        <SwipeListView
          useFlatList
          data={allMatches}
          disableLeftSwipe={false}
          disableRightSwipe={true}
          renderItem={renderItem}
          renderHiddenItem={(data, rowMap) => renderHiddenItem(data, rowMap)}
          leftOpenValue={0}
          rightOpenValue={-110}
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
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <DeleteModal
        item={item}
        show={showModal}
        isBookMark={true}
        onPressHide={() => setShowModal(false)}
        deleteFromBookmarks={deleteFromBookmarks}
      />
    </SafeAreaView>
  );
};

export default Bookmarks;
