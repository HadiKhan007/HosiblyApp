import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Alert, Image, SafeAreaView} from 'react-native';
import {
  AppLoader,
  BackHeader,
  MyStatusBar,
  PreviewImageCover,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  appIcons,
  checkConnected,
  colors,
  networkText,
  spacing,
} from '../../../../shared/exporter';
import styles from './styles';
import {Divider} from 'react-native-elements/dist/divider/Divider';

// redux stuff
import {useDispatch} from 'react-redux';
import {getSchoolInfo} from '../../../../redux/actions';

const SchoolDetails = ({navigation, route}) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  // redux stuff
  const dispatch = useDispatch();

  useEffect(() => {
    getSchool();
  }, []);

  const getSchool = async () => {
    let id = route?.params?.item?.id;
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const params = new FormData();
        params.append('school_id', id);
        const onSuccess = res => {
          console.log('School res ==> ', res);
          setItem(res);
          setLoading(false);
        };
        const onFailure = res => {
          setLoading(false);
          Alert.alert('Error', res);
        };
        dispatch(getSchoolInfo(params, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };

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
          style={
            type === 'link' ? styles.linkValueTxtStyle : styles.valueTxtStyle
          }>
          {value}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppLoader loading={loading} />
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader
          left={5}
          subtitle={'School Details'}
          // rightIcon={
          //   <Image
          //     resizeMode="contain"
          //     source={appIcons.bookmarksIcon}
          //     style={styles.iconStyle}
          //   />
          // }
        />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <PreviewImageCover
            h1={item?.name}
            uri={'https://wallpaperaccess.com/full/1700222.jpg'}
          />
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
              <ItemRow title="Address:" value={item?.address} />
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
    </SafeAreaView>
  );
};

export default SchoolDetails;
