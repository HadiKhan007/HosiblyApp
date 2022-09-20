import React, {useEffect, useState, useCallback} from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  AppButton,
  AppLoader,
  BackHeader,
  ContactModal,
  MyStatusBar,
  PreviewField,
  PreviewImageBox,
  PreviewImageCover,
  PreviewInfoCard,
  PriceInput,
  SmallHeading,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  appIcons,
  checkConnected,
  colors,
  networkText,
  size,
  spacing,
  WP,
} from '../../../../shared/exporter';
import styles from './styles';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {addProperty} from '../../../../shared/service/PropertyService';

// redux stuff
import {useDispatch, useSelector} from 'react-redux';
import {set_address_request} from '../../../../redux/actions';

const SchoolDetails = ({navigation}) => {
  const [loading, setloading] = useState(false);
  const [previewImg, setPreviewImg] = useState('');
  const [textShown, setTextShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  // redux stuff
  const dispatch = useDispatch();
  const {add_property_detail} = useSelector(state => state?.appReducer);

  // Set Preview Image
  useEffect(() => {
    setPreviewImg(
      add_property_detail?.images[0].path ||
        'https://wallpaperaccess.com/full/1700222.jpg',
    );
  }, []);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 6);
  }, []);

  const contactUser = () => {
    console.log('Contact User');
  };

  const ItemRow = ({title, value, type = ''}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.titleTxtStyle}>{title}</Text>
        <Text
          style={type === 'link' ? styles.linkValueTxtStyle : styles.valueTxtStyle}>
          {value}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader
          left={10}
          subtitle={'School Details'}
          rightIcon={
            <Image
              resizeMode="contain"
              source={appIcons.bookmarksIcon}
              style={styles.iconStyle}
            />
          }
        />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <PreviewImageCover h1={'Summit Height PS'} uri={previewImg} />
          <View style={spacing.my2}>
            <Text style={styles.header}>Information</Text>
            <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 6}
              style={styles.descTxtStyle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
            {lengthMore ? (
              <Text onPress={toggleNumberOfLines} style={styles.readTxtStyle}>
                {textShown ? 'Less...' : 'More...'}
              </Text>
            ) : null}
            <View style={spacing.my4}>
              <Divider color={colors.g13} />
              <ItemRow title="Phone Number:" value="(416) 395-2920" />
              <ItemRow title="Fax:" value="(416) 395-2920" />
              <ItemRow
                title="Email Address:"
                value="Summit@tdsb.on.ca"
                type="link"
              />
              <ItemRow
                title="Address:"
                value="139 Armour Blvd, North York, ON, M3H 1M1"
              />
              <ItemRow title="Principal:" value="Bill Mah" />
              <ItemRow title="Vice-Principal (s):" value="Vacant" />
              <ItemRow
                title="Office Staff:"
                value="Sandra Magnani Susan Layefsky"
              />
              <ItemRow
                title="School Council Chair(s):"
                value="Richard Freilich Judith Borts"
              />
              <ItemRow title="Superintended" value="Domenic Giorgi" />
              <ItemRow title="Learning Network" value="LN12" />
              <ItemRow title="Trustee" value="Alexandra Lulka" />
              <ItemRow title="Ward" value="Ward 5" type="link" />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {showModal && (
        <ContactModal
          show={showModal}
          name={'Aspen Franci'}
          source={''}
          onPress={() => contactUser()}
          onPressHide={() => setShowModal(false)}
        />
      )}
      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};

export default SchoolDetails;
