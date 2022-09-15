import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Image,
  Platform,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {AppButton, BackHeader, MyStatusBar} from '../../../../components';
import MapView, {PROVIDER_GOOGLE, Marker, Polygon} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {styles, customStyle} from './styles';
import {
  appIcons,
  colors,
  scrHeight,
  scrWidth,
} from '../../../../shared/exporter';

const ASPECT_RATIO = scrWidth / scrHeight;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

const mapOptions = {
  scrollEnabled: true,
};

const MapScreen = () => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [polygons, setPolygons] = useState([]);
  const [editing, setEditing] = useState(null);
  const [creatingHole, setCreatingHole] = useState(false);

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
        mapRef.current.animateToRegion(mapRegion, 1000);
      },
      error => {
        console.log('Error Code ==> ', error.code);
        console.log('Error Msg ==> ', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const finish = () => {
    console.log('Polygons are ==> ', [...polygons, editing]);
    setPolygons([...polygons, editing]);
    setEditing(null);
    setCreatingHole(false);
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

  return (
    <View style={styles.rootContainer}>
      <MyStatusBar backgroundColor={colors.over1} barStyle={'light-content'} />
      <View style={styles.headerStyle}>
        <BackHeader tintColor={colors.white} />
      </View>
      <View style={styles.container}>
        <View style={styles.itemCon}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={() => {
              return (
                <TouchableOpacity style={styles.btnCon}>
                  <Image
                    source={appIcons.apple}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <MapView
          ref={mapRef}
          userLocationCalloutEnabled={true}
          showsUserLocation={true}
          initialRegion={region}
          provider={PROVIDER_GOOGLE}
          customMapStyle={customStyle}
          style={[styles.container]}
          onPress={e => onPress(e)}
          {...mapOptions}>
          <Marker
            coordinate={{
              latitude: region?.latitude,
              longitude: region?.longitude,
            }}
            title={'Current Location'}
          />
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
      </View>
    </View>
  );
};

export default MapScreen;
