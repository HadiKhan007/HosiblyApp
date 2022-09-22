import {StyleSheet} from 'react-native';
import {WP, colors, size, family} from '../../../../shared/exporter';

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
    borderRadius: 15,
    paddingTop: 9,
    paddingBottom: 5,
    paddingHorizontal: 7,
    backgroundColor: colors.white,
  },
  calloutImgContainer: {
    borderRadius: 10,
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
  zoomIconsStyle: {
    width: WP('12'),
    height: WP('12'),
    marginBottom: WP('2.5'),
  },
  bottomView: {
    width: '100%',
    bottom: WP('6'),
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    paddingHorizontal: WP('5'),
    justifyContent: 'space-between',
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
    flexDirection: 'row',
  },
  postalCodeContainer: {
    height: WP('7'),
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: WP('9'),
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
  itemContainer: {
    padding: 6,
    width: '100%',
    borderRadius: 13,
    flexDirection: 'row',
    backgroundColor: colors.g48,
  },
  imgStyle: {
    borderRadius: 15,
    width: WP('26.3'),
    height: WP('24.1'),
    marginRight: WP('2.5'),
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameTxtStyle: {
    width: '72%',
    color: colors.white,
    fontSize: size.large,
    fontFamily: family.Gilroy_SemiBold,
  },
  txtContainer: {
    width: WP('9'),
    borderRadius: 5,
    height: WP('4.4'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.r1,
  },
  newTxtStyle: {
    left: 0.5,
    color: colors.white,
    fontSize: size.xxtiny,
    fontFamily: family.Gilroy_Regular,
  },
  simpleRow: {
    paddingTop: 13,
    paddingBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallTxtStyle: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
  },
  bedIconStyle: {
    width: 14,
    height: 9,
    marginRight: 3,
    tintColor: colors.white,
  },
  bathIconStyle: {
    width: 11,
    height: 11,
    marginLeft: 8,
    marginRight: 4,
    tintColor: colors.white,
  },
  heartIconStyle: {
    width: 13,
    height: 11,
    marginRight: 5,
  },
  heartTxtStyle: {
    color: colors.r2,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
  },
  timeTxtStyle: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
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
