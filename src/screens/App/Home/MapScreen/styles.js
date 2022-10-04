import {StyleSheet} from 'react-native';
import {
  WP,
  colors,
  size,
  family,
  platformOrientedCode,
  scrWidth,
  scrHeight,
} from '../../../../shared/exporter';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.over1,
  },
  contentContainer: {
    flex: 1,
  },
  headerStyle: {
    zIndex: 9999,
    height: '11%',
    paddingBottom: 10,
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
  },
  calloutStyle: {
    paddingTop: 9,
    borderRadius: 15,
    paddingBottom: 5,
    paddingHorizontal: 7,
    backgroundColor: colors.white,
  },
  calloutImgContainer: {
    borderRadius: 10,
    backgroundColor: 'green',
  },
  calloutImgStyle: {
    width: 141,
    height: 141,
    borderRadius: 10,
  },
  imageContainer: {
    width: 155,
    alignItems: 'center',
  },
  markerStyle: {
    width: 40,
    height: 35,
  },
  flContainer: {
    top: 100,
    right: 20,
    zIndex: 1,
    position: 'absolute',
  },
  imgStyle: {
    width: WP('12'),
    height: WP('12'),
    marginBottom: WP('2.5'),
  },
  bottomView: {
    bottom: 8,
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    paddingHorizontal: WP('5'),
    justifyContent: 'space-between',
    bottom: platformOrientedCode(WP('16'), 8),
  },
  iconContainer: {
    zIndex: 999,
    left: WP('5'),
    width: WP('5'),
    top: WP('-1.5'),
    height: WP('5'),
    borderRadius: 13,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: colors.g47,
  },
  iconStyle: {
    width: WP('2'),
    height: WP('2'),
    tintColor: colors.b1,
  },
  buttonsContainer: {
    bottom: 8,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
  },
  postalCodeContainer: {
    height: WP('7'),
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: WP('20'),
    justifyContent: 'center',
    paddingHorizontal: WP('3'),
    backgroundColor: colors.white,
  },
  txtStyle: {
    color: colors.b1,
    bottom: WP('2.5'),
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
  },
});

export const customStyle = [
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
