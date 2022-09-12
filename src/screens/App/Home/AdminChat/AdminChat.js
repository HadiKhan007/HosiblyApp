import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useIsFocused} from '@react-navigation/core';
import ImagePicker from 'react-native-image-crop-picker';
import {Menu, MenuItem} from 'react-native-material-menu';
import {
  ChatHeader,
  ChatModal,
  Spacer,
  useActionCable,
  useChannel,
} from '../../../../components';
import {
  WP,
  HP,
  colors,
  appIcons,
  appImages,
  platformOrientedCode,
  appLogos,
} from '../../../../shared/exporter';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {CHAT_URL} from '../../../../shared/utilities/endpoints';
import {
  sendMessage,
  getAllMessagesRequest,
  readMessagesRequest,
  blockUserRequest,
  getAllAdminMessagesRequest,
  sendMessageToAdmin,
} from '../../../../redux/actions';

const AdminChat = ({navigation, route}) => {
  const isFocus = useIsFocused();
  const [fresh, setFresh] = useState(true);
  const [message, setMessage] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cameraImage, setCameraImage] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [galleryImage, setGalleryImage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [modalType, setModalType] = useState('report');
  const {userInfo} = useSelector(state => state?.auth);
  const [id, setId] = useState(route?.params?.id);
  const [name, setname] = useState(route?.params?.name);
  const [avatar, setavatar] = useState(route?.params?.avatar);
  const [recipientID, setRecipientId] = useState(route?.params?.recipientID);

  const {actionCable} = useActionCable(CHAT_URL, userInfo?.user?.auth_token);
  const {subscribe, unsubscribe, send, connected} = useChannel(actionCable);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
  }, [isFocus]);

  useEffect(() => {
    try {
      subscribe(
        {
          channel: 'SupportConversationChannel',
          channel_key: `support_conversations_${id}`,
        },
        {
          received: msg => {
            console.log('MESSAGE  ', msg?.body);
            setAllMessages(allMessages => [msg?.body, ...allMessages]);
          },
          connected: () => {
            console.log('Connected');
          },
        },
      );
    } catch (err) {
      console.log('err', err);
    }
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    getAdminMesssgeList();
  }, [isFocus]);

  //Gallery Handlers
  const showGallery = () => {
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
      }).then(image => {
        setGalleryImage(image);
      });
    }, 400);
  };
  //Camera Handlers
  const showCamera = () => {
    setTimeout(() => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
      }).then(image => {
        setCameraImage(image);
      });
    }, 400);
  };

  const getAdminMesssgeList = () => {
    try {
      const cbSuccess = res => {
        if (res) {
          setAllMessages(res?.messages);
        }
      };
      const cbFailure = err => {};
      dispatch(getAllAdminMessagesRequest(id, cbSuccess, cbFailure));
    } catch (err) {}
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.msgContainer}>
        {item?.user_id === userInfo?.user?.id ? (
          // Sender Bubble
          <View style={styles.senderBubble}>
            <View style={styles.senderBubbleStyles}>
              {item?.image ? (
                <Image
                  source={{uri: item?.image}}
                  style={{
                    height: HP('15'),
                    width: HP('20'),
                    borderRadius: 10,
                    paddingBottom: 5,
                  }}
                />
              ) : null}
              {item?.body ? (
                <Text
                  style={[
                    styles.senderMsgStyles,
                    {paddingTop: item?.image ? 10 : null},
                  ]}>
                  {item?.body}
                </Text>
              ) : null}
            </View>
          </View>
        ) : (
          // Receiver Bubble
          <View style={styles.receiverBubble}>
            <View style={{width: '70%'}}>
              <View style={styles.receiverBubbleStyles}>
                {item?.image ? (
                  <Image
                    source={{uri: item?.image}}
                    style={{
                      height: HP('15'),
                      width: HP('20'),
                      borderRadius: 10,
                      paddingBottom: 5,
                    }}
                  />
                ) : null}
                {item?.body ? (
                  <Text
                    style={[
                      styles.receiverMsgStyles,
                      {paddingTop: item?.image ? 10 : null},
                    ]}>
                    {item?.body}
                  </Text>
                ) : null}
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  const onSend = () => {
    setVisibility(true);
    try {
      const imgObj = {
        uri: galleryImage.path,
        type: galleryImage.mime,
        name: galleryImage.fileName || 'image',
      };
      const data = new FormData();
      if (message) {
        data.append('message[body]', message);
      }
      if (galleryImage || cameraImage) {
        data.append('message[image]', imgObj);
      }
      const cbSuccess = res => {
        console.log('ADMIN MESSGAE SENT SUCCESSFULY');
        setVisibility(false);
        setMessage('');
        setGalleryImage('');
        setCameraImage('');
      };
      const cbFailure = err => {
        setVisibility(false);
      };
      dispatch(sendMessageToAdmin(data, id, cbSuccess, cbFailure));
    } catch (err) {
      console.log('[err]', err);
      setVisibility(false);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ChatHeader
        name={'Housibly'}
        source={''}
        onPressIcon={() => setShowMenu(false)}
      />
      <Spacer androidVal={WP('2')} iOSVal={WP('2')} />
      {allMessages?.length > 0 ? (
        <FlatList
          inverted
          data={allMessages}
          extraData={fresh}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={() => {
            return (
              <View style={styles.personView}>
                <Image
                  resizeMode="contain"
                  source={appLogos.roundLogo}
                  style={styles.personImgStyle}
                />
                <Text style={styles.nameTxtStyle}>{'Housibly'}</Text>
              </View>
            );
          }}
        />
      ) : (
        <View style={styles.noRecordsView}>
          <Text style={styles.noRecords}>
            {isLoading ? '' : 'No message found'}
          </Text>
        </View>
      )}
      <KeyboardAvoidingView
        behavior={platformOrientedCode('height', 'padding')}>
        <View style={styles.inputView}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={'Type here...'}
              value={message}
              ellipsizeMode="tail"
              multiline
              maxHeight={75}
              onChangeText={text => setMessage(text)}
              placeholderTextColor={colors.g40}
              style={styles.inputStyles}
            />
            {visibility ? (
              <ActivityIndicator
                animating
                size={'small'}
                color={colors.p1}
                style={{left: 3}}
              />
            ) : (
              <Icon
                name={'send'}
                type={'ionicons'}
                size={22}
                color={colors.g16}
                onPress={() => onSend()}
              />
            )}
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => showGallery()}>
            <Image
              source={
                galleryImage == ''
                  ? appIcons.galleryIcon
                  : {
                      uri: platformOrientedCode(
                        galleryImage?.path,
                        galleryImage?.sourceURL,
                      ),
                    }
              }
              style={[styles.iconStyle, {marginRight: 7}]}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => showCamera()}>
            <Image
              resizeMode="contain"
              source={
                cameraImage == ''
                  ? appIcons.cameraIcon
                  : {
                      uri: platformOrientedCode(
                        cameraImage?.path,
                        cameraImage?.sourceURL,
                      ),
                    }
              }
              style={[styles.iconStyle, {marginLeft: 7}]}
            />
          </TouchableOpacity>
        </View>
        {showModal && (
          <ChatModal
            type={modalType}
            show={showModal}
            // onPressHide={() => alert('Ok')}
            onPressHide={() => alert('ok')}
            name={name}
            source={avatar}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AdminChat;
