import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  FlatList,
  StatusBar,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {BackHeader} from '../../../../components';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {styles, customStyle} from './styles';
import {
  appIcons,
  appImages,
  colors,
  scrHeight,
  scrWidth,
} from '../../../../shared/exporter';
import {zoomIcons} from '../../../../shared/utilities/constant';

const ASPECT_RATIO = scrWidth / scrHeight;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapProperty = ({navigation, route}) => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [item, setItem] = useState([]);

  console.log('LAT ==> ', route?.params?.item);
  console.log('LNG ==> ', route?.params?.item?.longitude);

  useEffect(() => {
    setItem(route?.params?.item);
    return;
    if (route?.params?.item?.latitude) {
      let mapRegion = {
        latitude: route?.params?.item?.latitude,
        longitude: route?.params?.item?.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      mapRef.current.animateToRegion(mapRegion, 1000);
    }
  }, []);

  const handlePress = ({press}) => {
    switch (press) {
      case 'zoomin':
        onZoomInPress(true);
        break;
      case 'zoomout':
        onZoomOutPress(true);
        break;
      default:
        break;
    }
  };

  const renderIcons = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => handlePress(item)}>
        <Image
          resizeMode="contain"
          source={item?.icon}
          style={styles.zoomIconsStyle}
        />
      </TouchableOpacity>
    );
  };

  const onZoomInPress = () => {
    mapRef?.current?.getCamera().then(cam => {
      cam.zoom -= 1;
      mapRef?.current?.animateCamera(cam);
    });
  };

  const onZoomOutPress = () => {
    mapRef?.current?.getCamera().then(cam => {
      cam.zoom += 1;
      mapRef?.current?.animateCamera(cam);
    });
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
      <View style={styles.headerStyle}>
        <BackHeader tintColor={colors.white} />
      </View>
      <View style={styles.flContainer}>
        <FlatList data={zoomIcons} renderItem={renderIcons} />
      </View>
      <MapView
        ref={mapRef}
        style={{flex: 1}}
        userLocationCalloutEnabled={true}
        showsUserLocation={true}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        customMapStyle={customStyle}>
        <Marker
          coordinate={{
            latitude: region?.latitude,
            longitude: region?.longitude,
          }}
          image={appIcons.buyHome}
        />
      </MapView>
      <View style={styles.bottomView}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.itemContainer}>
          <Image
            source={{
              uri:
                (item?.image && item?.image[0]?.url) ||
                'https://wallpaperaccess.com/full/1700222.jpg',
            }}
            style={styles.imgStyle}
          />
          <View style={{paddingVertical: 5}}>
            <View style={styles.innerRow}>
              <Text numberOfLines={1} style={styles.nameTxtStyle}>
                {item?.title}
              </Text>
            </View>
            <View style={styles.simpleRow}>
              <Text style={styles.smallTxtStyle}>${item?.price} | </Text>
              <Image
                resizeMode="contain"
                source={appIcons.bedIcon}
                style={styles.bedIconStyle}
              />
              <Text style={styles.smallTxtStyle}>{item?.bed_rooms}</Text>
              <Image source={appIcons.bathIcon} style={styles.bathIconStyle} />
              <Text resizeMode="contain" style={styles.smallTxtStyle}>
                {item?.bath_rooms}
              </Text>
            </View>
            <View style={[styles.simpleRow, {paddingTop: 0}]}>
              <Image
                source={appIcons.heartIcon}
                style={styles.heartIconStyle}
              />
              <Text style={styles.heartTxtStyle}>
                {item?.weight_age || '0'}% match
              </Text>
            </View>
            <Text style={styles.timeTxtStyle}>
              Last active: {item?.last_seen}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapProperty;
