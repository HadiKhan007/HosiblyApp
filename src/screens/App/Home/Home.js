import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import {Menu, MenuItem} from 'react-native-material-menu';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AddressModal,
  AppButton,
  AppHeader,
  PersonDetailsModal,
  Spacer,
} from '../../../components';
import {
  WP,
  colors,
  scrWidth,
  appIcons,
  appImages,
  scrHeight,
  size,
} from '../../../shared/exporter';
import {
  addresses,
  buyerRef,
  buyerRefAdvance,
} from '../../../shared/utilities/constant';
import styles from './styles';

const Home = ({navigation}) => {
  const carouselRef = useRef(null);
  const [address, setAddress] = useState('');
  const [hideAds, setHideAds] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState('buy');
  const [showModal, setShowModal] = useState(false);
  const [showAdvance, setShowAdvance] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

  const RenderRow = ({item, index}) => {
    return (
      <View style={styles.itemRow(index)}>
        <Text style={styles.titleTxtStyle}>{item?.title}</Text>
        <Text style={styles.valTxtStyle}>{item?.property}</Text>
      </View>
    );
  };

  const AddressesRow = ({item, index}) => {
    return (
      <View style={styles.addressItemRow(index)}>
        <Text style={styles.addrsTxtStyle}>{item?.address}</Text>
        <Image source={appIcons.cross} style={styles.crossIconStyle} />
      </View>
    );
  };

  const hideItemClick = () => {
    setShowMenu(false);
    setHideAds(true);
  };

  const seeAllItemClick = () => {
    setShowMenu(false);
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemInnerRow}>
          <Image source={appImages.personImg} style={styles.personImgStyle} />
          <View style={styles.txtContainer}>
            <Text style={styles.itemNameStyle}>Harden Eusaff</Text>
            <Text style={styles.h1TxtStyle}>Corporate Home X</Text>
            <Text style={styles.h2TxtStyle}>Home Inspector</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.iconContainer}
            onPress={() => setShowMenu(true)}>
            <Icon
              type={'entypo'}
              name={'dots-three-horizontal'}
              size={16}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader rightIcon />
      <Spacer androidVal={WP('4')} iOSVal={WP('4')} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.innerViewStyle}>
          <View style={styles.rowContainer}>
            <View>
              <Text style={styles.propertyTxtStyle}>Find a property</Text>
              <View style={styles.innerRow}>
                <Image source={appIcons.locIcon} style={styles.locIconStyle} />
                <Text style={styles.locTxtStyle}>New York, US</Text>
                <Icon
                  type={'feather'}
                  name={'chevron-down'}
                  size={16}
                  color={colors.g2}
                  onPress={() => {}}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <Image source={appImages.personPh1} style={styles.phImgStyle} />
          </View>
          {!hideAds && (
            <Carousel
              ref={carouselRef}
              sliderWidth={scrWidth}
              sliderHeight={scrHeight}
              itemWidth={scrWidth / 1.15}
              data={[1, 2, 3]}
              renderItem={renderItem}
            />
          )}
          <View style={styles.menuContainer}>
            <Menu
              visible={showMenu}
              style={styles.menuStyle}
              onRequestClose={() => setShowMenu(false)}>
              <MenuItem
                style={styles.menuItemStyle}
                textStyle={styles.menuTxtStyle}
                onPress={() => hideItemClick()}>
                Hide this ad
              </MenuItem>
              <MenuItem
                style={styles.menuItemStyle}
                textStyle={styles.menuTxtStyle}
                onPress={() => seeAllItemClick()}>
                See All
              </MenuItem>
            </Menu>
          </View>
          <View style={styles.paddingView}>
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSelected('buy')}
                style={styles.tabStyle(selected === 'buy')}>
                <Text style={styles.tabTxtStyle(selected === 'buy')}>
                  I Want To Buy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSelected('matches')}
                style={styles.tabStyle(selected === 'matches')}>
                <Text style={styles.tabTxtStyle(selected === 'matches')}>
                  My Matches
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSelected('sell')}
                style={styles.tabStyle(selected === 'sell')}>
                <Text style={styles.tabTxtStyle(selected === 'sell')}>
                  I Want To Sell
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.propertyTxtStyle}>
              Your Current Buyer Preference
            </Text>
            {buyerRef.map((item, index) => {
              return <RenderRow item={item} index={index} />;
            })}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.iconRow}
              onPress={() => setShowAdvance(!showAdvance)}>
              <Text style={styles.advanceTxtStyle}>Show Advance Options</Text>
              <Icon
                type={'antdesign'}
                name={showAdvance ? 'caretup' : 'caretdown'}
                size={10}
                color={colors.p1}
              />
            </TouchableOpacity>
            {showAdvance &&
              buyerRefAdvance.map((item, index) => {
                return <RenderRow item={item} index={index} />;
              })}
            <ImageBackground
              source={appImages.map}
              style={styles.mapImgStyle}
              imageStyle={{borderRadius: 7}}>
              <Image source={appIcons.addressIcon} style={styles.iconStyle} />
              <Text style={styles.addressTxtStyle}>Last Updated: None</Text>
            </ImageBackground>
            <View style={styles.infoRowContainer}>
              <Text style={styles.propertyTxtStyle}>Dream Addresses</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowAddressModal(true)}>
                <Image
                  source={appIcons.infoIcon}
                  style={styles.infoIconStyle}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.dividerView} />
            <TextInput
              value={address}
              style={styles.inputStyle}
              placeholder="Start typing..."
              placeholderTextColor={colors.g19}
              onChangeText={txt => setAddress(txt)}
            />
            <View style={[styles.dividerView, {marginBottom: WP('4')}]} />
            {addresses.map((item, index) => {
              return <AddressesRow item={item} index={index} />;
            })}
          </View>
          <Spacer androidVal={WP('2')} iOSVal={WP('2')} />
          <AppButton
            width={'43%'}
            title="Edit Buyer Preference"
            textStyle={{fontSize: size.tiny}}
            onPress={() => navigation.navigate('FilterScreen')}
          />
        </View>
        <PersonDetailsModal
          show={showModal}
          onPressHide={() => setShowModal(false)}
        />
        <AddressModal
          show={showAddressModal}
          onPressHide={() => setShowAddressModal(false)}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Home;
