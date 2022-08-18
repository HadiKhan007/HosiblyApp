import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  TextBox,
  AppButton,
  AppHeader,
  AppLoader,
  BackHeader,
  ImagePickerModal,
} from '../../../../components';
import ImagePicker from 'react-native-image-crop-picker';
import {
  size,
  colors,
  appIcons,
  platformOrientedCode,
  checkConnected,
} from '../../../../shared/exporter';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {addQuery} from '../../../../redux/actions';

const SupportQuery = ({navigation}) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [queryImage, setQueryImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  //Gallery Handlers
  const showGallery = () => {
    setShowModal(false);
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        mediaType: 'photo',
      }).then(image => {
        setQueryImage(image);
      });
    }, 400);
  };

  //Camra Handlers
  const showCamera = () => {
    setShowModal(false);
    setTimeout(() => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
      }).then(image => {
        setQueryImage(image);
      });
    }, 400);
  };

  const submitQuery = async () => {
    if (query === '') return alert('Please add your query!');
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const params = new FormData();
        params.append('support[description]', query);
        if (queryImage !== '') {
          params.append('support[image]', {
            name: queryImage?.filename || 'image',
            uri: queryImage?.path,
            type: queryImage?.mime,
          });
        }
        const onSuccess = res => {
          setQuery('');
          setQueryImage('');
          setLoading(false);
          navigation.navigate('Support');
        };
        const onFailure = err => {
          console.log('err is => ', err);
          setLoading(false);
        };
        dispatch(addQuery(params, onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppLoader loading={loading} />
      <AppHeader subtitle={'Support'} />
      <BackHeader title={'Support'} />
      <View style={styles.contentContainer}>
        <Text style={styles.h1Style}>Your Message</Text>
        <TextBox
          value={query}
          onChangeText={txt => setQuery(txt)}
          placeholder={'Write something here ...'}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setShowModal(true);
          }}>
          <Image
            source={
              queryImage === ''
                ? appIcons.cameraIcon
                : {
                    uri: platformOrientedCode(
                      queryImage?.path,
                      queryImage?.sourceURL,
                    ),
                  }
            }
            style={styles.imgStyle(queryImage)}
          />
        </TouchableOpacity>
        <Text style={styles.descTxtStyle}>Attach Image or Proof</Text>
      </View>
      <View style={styles.bottomView}>
        <AppButton
          title="Send Message"
          fontSize={size.tiny}
          shadowColor={colors.white}
          borderColor={colors.white}
          onPress={() => submitQuery()}
        />
      </View>
      {showModal && (
        <ImagePickerModal
          show={showModal}
          onPressHide={() => setShowModal(false)}
          onPressGallery={() => {
            showGallery();
          }}
          onPressCamera={() => {
            showCamera();
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default SupportQuery;
