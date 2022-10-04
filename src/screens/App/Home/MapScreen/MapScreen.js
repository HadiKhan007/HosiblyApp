import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  Platform,
  FlatList,
  StatusBar,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {Svg, Image as ImageSvg} from 'react-native-svg';
import {
  AppButton,
  BackHeader,
  PostalCode,
  GuildlinesModal,
  SearchByAddress,
  AppLoader,
} from '../../../../components';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polygon,
  Callout,
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {styles, customStyle} from './styles';
import {
  appIcons,
  appImages,
  checkConnected,
  colors,
  scrHeight,
  scrWidth,
  size,
  WP,
} from '../../../../shared/exporter';
import {allIcons, networkText} from '../../../../shared/utilities/constant';

// redux stuff
import {useDispatch} from 'react-redux';
import {searchOnMap, schoolsOnMap} from '../../../../redux/actions';

const ASPECT_RATIO = scrWidth / scrHeight;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

const mapOptions = {
  scrollEnabled: true,
};

const MapScreen = ({navigation}) => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [show, setShow] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const [polygons, setPolygons] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showSlide, setShowSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [markersList, setMarkersList] = useState([]);
  const [creatingHole, setCreatingHole] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

  // redux stuff
  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      askForPermissions();
    }
  }, []);

  useEffect(() => {
    if (editing) {
      mapOptions.scrollEnabled = false;
      mapOptions.onPanDrag = e => onPress(e);
    }
  }, [editing]);

  const askForPermissions = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
      getLocation();
    }
  };

  const getLocation = () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
    Geolocation.getCurrentPosition(
      position => {
        let mapRegion = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        setRegion(mapRegion);
        mapRef?.current?.animateToRegion(mapRegion, 1000);
      },
      error => {
        console.log('Error Code ==> ', error.code);
        console.log('Error Msg ==> ', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const finish = async () => {
    if (editing?.coordinates?.length > 0) {
      let coords = [...polygons, editing];
      setPolygons([...polygons, editing]);
      findProperties(coords[0]?.coordinates, 'polygon');
    } else {
      alert('Please first draw polygon.');
    }
  };

  const onPress = e => {
    if (!editing) {
      setEditing({
        id: id++,
        coordinates: [e.nativeEvent.coordinate],
        holes: [],
      });
    } else if (!creatingHole) {
      setEditing({
        ...editing,
        coordinates: [...editing.coordinates, e.nativeEvent.coordinate],
      });
    } else {
      const holes = [...editing.holes];
      holes[holes.length - 1] = [
        ...holes[holes.length - 1],
        e.nativeEvent.coordinate,
      ];
      setEditing({
        ...editing,
        id: id++, // keep incrementing id to trigger display refresh
        coordinates: [...editing.coordinates],
        holes,
      });
    }
  };

  const handlePress = ({press}) => {
    switch (press) {
      case 'guides':
        setShow(true);
        break;
      case 'polygon':
        finish();
        break;
      case 'zoomin':
        onZoomInPress(true);
        break;
      case 'zoomout':
        onZoomOutPress(true);
        break;
      case 'school':
        setShowAddressModal(true);
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
          style={styles.imgStyle}
        />
      </TouchableOpacity>
    );
  };

  const searchByCode = code => {
    setZipCode(code);
    findProperties(code, 'zipCode');
  };

  const onPressDone = () => {
    console.log('into on press done');
    setShowSlide(0);
    setShow(false);
  };

  const searchAddress = (data, details) => {
    setShowAddressModal(false);
    findSchools(details?.geometry?.location);
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

  const findProperties = async (data, type) => {
    setSearchType('property');
    const params = new FormData();
    if (type === 'zipCode') {
      params.append('zip_code', data);
      params.append('using_zip_code', 'true');
    } else {
      params.append('polygon', JSON.stringify(data));
      params.append('using_polygon', 'true');
    }
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const onSuccess = res => {
          setLoading(false);
          setEditing(null);
          setCreatingHole(false);
          if (res?.message) {
            setMarkersList([]);
            alert('Any property does not match.');
          } else {
            console.log('Res ==> ', res?.properties);
            // set markers
            let markers = res?.properties?.filter(item => {
              if (item?.latitude) {
                return {
                  id: item?.id,
                  img: item?.image,
                  latitude: item?.latitude,
                  longitude: item?.longitude,
                };
              }
            });
            setMarkersList(markers);
            if (type === 'zipCode') {
              // set current marker
              let mapRegion = {
                latitude: parseFloat(res?.properties[0].latitude),
                longitude: parseFloat(res?.properties[0].longitude),
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              };
              setRegion(mapRegion);
              mapRef?.current?.animateToRegion(mapRegion, 1000);
            }
          }
        };
        const onFailure = res => {
          setLoading(false);
          setMarkersList([]);
          Alert.alert('Error', res);
        };
        dispatch(searchOnMap(params, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setMarkersList([]);
        setLoading(false);
      }
    } else {
      setLoading(false);
      setMarkersList([]);
      Alert.alert('Error', networkText);
    }
  };

  const findSchools = async location => {
    setSearchType('school');
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const params = new FormData();
        params.append(
          'location_cordinates',
          JSON.stringify([{longitude: location?.lng, latitude: location?.lat}]),
        );
        const onSuccess = res => {
          setLoading(false);
          if (res?.message) {
            setMarkersList([]);
            alert('No school match with this address');
          } else {
            // set markers
            let markers = res?.map(item => {
              return {
                id: item?.id,
                img: item?.image,
                latitude: item?.latitude,
                longitude: item?.longtitude,
              };
            });
            setMarkersList(markers);
            // set current marker
            let mapRegion = {
              latitude: parseFloat(res[0]?.latitude),
              longitude: parseFloat(res[0]?.longtitude),
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            };
            setRegion(mapRegion);
            mapRef.current.animateToRegion(mapRegion, 1000);
          }
        };
        const onFailure = res => {
          setLoading(false);
          setMarkersList([]);
          Alert.alert('Error', res);
          console.log('On Buyer prop Failure', res);
        };
        dispatch(schoolsOnMap(params, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      setMarkersList([]);
      Alert.alert('Error', networkText);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <AppLoader loading={loading} />
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
      <View style={styles.headerStyle}>
        <BackHeader tintColor={colors.white} />
      </View>
      <View style={styles.flContainer}>
        <View style={styles.itemCon}>
          <FlatList data={allIcons} renderItem={renderIcons} />
        </View>
      </View>
      <MapView
        ref={mapRef}
        style={{flex: 1}}
        userLocationCalloutEnabled={true}
        showsUserLocation={true}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        customMapStyle={customStyle}
        onPress={e => onPress(e)}
        {...mapOptions}>
        {markersList &&
          markersList?.map(item => {
            let coordinates = {
              latitude: item?.latitude,
              longitude: item?.longitude,
            };
            return (
              <Marker
                anchor={{x: 1, y: 1}}
                pointerEvents="auto"
                coordinate={coordinates}
                image={appIcons.buyHome}>
                <Callout
                  tooltip
                  onPress={() => {
                    searchType === 'property'
                      ? navigation.navigate('ViewProperty', {item: item})
                      : navigation.navigate('SchoolDetails', {item: item});
                  }}>
                  <View style={styles.calloutStyle}>
                    <Svg width={141} height={141}>
                      <ImageSvg
                        width={'100%'}
                        height={138}
                        preserveAspectRatio="xMidYMid slice"
                        href={item?.img ? {uri: item?.img} : appImages.ph}
                      />
                    </Svg>
                  </View>
                </Callout>
              </Marker>
            );
          })}
        {polygons.map(polygon => (
          <Polygon
            key={polygon.id}
            coordinates={polygon.coordinates}
            holes={polygon.holes}
            fillColor={colors.p1}
            strokeColor={colors.white}
            strokeWidth={2}
          />
        ))}
        {editing && (
          <Polygon
            key={editing.id}
            coordinates={editing.coordinates}
            holes={editing.holes}
            fillColor={colors.p1}
            strokeColor={colors.white}
            strokeWidth={2}
          />
        )}
      </MapView>
      <View style={styles.bottomView}>
        {zipCode != '' ? (
          <>
            <View style={styles.postalCodeContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setZipCode('')}
                style={styles.iconContainer}>
                <Image
                  resizeMode="contain"
                  source={appIcons.cross}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
              <Text style={styles.txtStyle}>{zipCode}</Text>
            </View>
          </>
        ) : null}
        <View style={styles.buttonsContainer}>
          <AppButton
            width="47%"
            bgColor={colors.g2}
            fontSize={size.tiny}
            borderColor={colors.g2}
            style={{marginRight: 6}}
            shadowColor={'transparent'}
            title="Enter Zip/Postal Code"
            onPress={() => setShowModal(true)}
          />
          <View style={{width: WP('4')}} />
          <AppButton
            width="47%"
            fontSize={size.tiny}
            style={{marginLeft: 6}}
            borderColor={colors.p2}
            title="View All Matches"
            onPress={() => navigation.navigate('AllMatches')}
          />
        </View>
      </View>
      {showModal && (
        <PostalCode
          show={showModal}
          searchByCode={searchByCode}
          onPressHide={() => setShowModal(false)}
        />
      )}
      {showAddressModal && (
        <SearchByAddress
          show={showAddressModal}
          searchAddress={searchAddress}
          onPressHide={() => setShowAddressModal(false)}
        />
      )}
      {show && (
        <GuildlinesModal
          show={show}
          activeIndex={showSlide}
          onPressHide={() => setShow(false)}
          buttonClick={() => setShowSlide(showSlide + 1)}
          onPressDone={onPressDone}
        />
      )}
    </View>
  );
};

export default MapScreen;
