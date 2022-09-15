import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import MapView, {Marker, Polygon} from 'react-native-maps';
import {appIcons, colors} from '../../shared/exporter';

export const MapComponent = () => {
  return (
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
        provider={'google'}
        userLocationCalloutEnabled={true}
        showsUserLocation={true}
        initialRegion={{
          latitude: 34.28371,
          longitude: 74.458908,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: 34.28371,
          longitude: 74.458908,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={customStyle}
        style={[styles.container]}>
        <Polygon
          coordinates={[
            {
              latitude: 34.28371,
              longitude: 74.458908,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
            {
              latitude: 34.28371,
              longitude: 74.358908,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
          ]}
          strokeColor={colors.white}
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemCon: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
    top: 100,
  },
  btnCon: {
    backgroundColor: colors.g28,
    height: 45,
    width: 45,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
});

const customStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: colors.b2,
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: colors.g21,
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: colors.b2,
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: colors.g21,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: colors.g21,
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: colors.b1,
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: colors.g21,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: colors.g11,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: colors.g11,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: colors.g11,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: colors.g11,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: colors.g11,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: colors.g11,
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: colors.b1,
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: colors.b1,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: colors.b1,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: colors.b1,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: colors.b1,
      },
    ],
  },
];
