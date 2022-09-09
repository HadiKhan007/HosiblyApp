import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
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
  checkConnected,
  family,
} from '../../../../shared/exporter';
import styles from './styles';
import {chat, networkText} from '../../../../shared/utilities/constant';
import {useDispatch, useSelector} from 'react-redux';
import {CHAT_URL} from '../../../../shared/utilities/endpoints';
import {
  sendMessage,
  getAllMessagesRequest,
  readMessagesRequest,
  blockUserRequest,
  createConversationRequest,
  reportUserRequest,
  createAdminConversationRequest,
} from '../../../../redux/actions';
// let ticketId = 0;
const PersonChat = ({navigation, route}) => {
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
  const [loadingAllMessages, setLoadingAllMessages] = useState(false);
  const {userInfo} = useSelector(state => state?.auth);
  const [id, setId] = useState(route?.params?.id);
  const [name, setname] = useState(route?.params?.name);
  const [avatar, setavatar] = useState(route?.params?.avatar);
  const [recipientID, setRecipientId] = useState(route?.params?.recipientID);
  const [isBlock, setisBlock] = useState(route?.params?.isBlock);

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
          channel: 'ConversationChannel',
          channel_key: `conversations_${id}`,
        },
        {
          received: msg => {
            console.log('MESSAGE  ', msg);
            setAllMessages(allMessages => [msg, ...allMessages]);
            // setAllMessages(allMessages => [msg?.image, ...allMessages]);
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
  }, [allMessages]);

  useEffect(() => {
    getMesssgeList();
    readMessage();
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

  const getMesssgeList = () => {
    console.log('getMesssgeList');
    setLoadingAllMessages(true);
    try {
      const data = new FormData();
      data.append('conversation_id', id);
      const cbSuccess = res => {
        setLoadingAllMessages(false);
        setAllMessages(res?.messages);
      };
      const cbFailure = err => {
        setLoadingAllMessages(false);
      };
      dispatch(getAllMessagesRequest(data, cbSuccess, cbFailure));
    } catch (err) {
      setLoadingAllMessages(false);
    }
  };

  const readMessage = () => {
    try {
      const data = new FormData();
      data.append('conversation_id', id);
      const cbSuccess = res => {
        console.log('READ MESSAGAE==> OK');
      };
      const cbFailure = err => {
        console.log('Read msg err ==> ', err);
      };
      dispatch(readMessagesRequest(data, cbSuccess, cbFailure));
    } catch (err) {}
  };

  const renderItem = ({item, index}) => {
    // {
    //   console.log('ITEM ', item);
    // }
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
              <Text
                style={[
                  styles.senderMsgStyles,
                  {paddingTop: item?.image ? 10 : null},
                ]}>
                {item.body}
              </Text>
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
                <Text
                  style={[
                    styles.receiverMsgStyles,
                    {paddingTop: item?.image ? 10 : null},
                  ]}>
                  {item.body}
                </Text>
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
      data.append('conversation_id', id);
      if (message) {
        data.append('message[body]', message);
      }
      if (galleryImage || cameraImage) {
        data.append('message[image]', imgObj);
      }
      const cbSuccess = res => {
        setVisibility(false);
        setMessage('');
        setGalleryImage('');
        setCameraImage('');
      };
      const cbFailure = err => {
        setVisibility(false);
      };
      console.log('message data', data);
      dispatch(sendMessage(data, cbSuccess, cbFailure));
    } catch (err) {
      console.log('[err]', err);
      setVisibility(false);
    }
  };

  const blockUser = () => {
    try {
      const data = new FormData();
      data.append('user_id', recipientID);
      data.append('is_blocked', true);
      const cbSuccess = res => {
        alert('User added in blacklist.');
        navigation.goBack();
      };
      const cbFailure = err => {};
      dispatch(blockUserRequest(data, cbSuccess, cbFailure));
    } catch (err) {
      console.log('[err]', err);
      setVisibility(false);
    }
  };

  const reportUser = () => {
    try {
      const data = new FormData();
      data.append('reported_user', recipientID);
      const cbSuccess = res => {
        // ticketId = res?.ticket_generate?.id;
        handleAdminChat(res?.ticket_generate?.id);
      };
      const cbFailure = err => {};
      dispatch(reportUserRequest(data, cbSuccess, cbFailure));
    } catch (err) {
      console.log('[err] report err', err);
      setVisibility(false);
    }
  };

  const handleAdminChat = async ticketId => {
    console.log('ticketId', ticketId);
    // return;
    const check = await checkConnected();
    if (check) {
      try {
        const data = new FormData();
        data.append('support_id', ticketId);
        setIsLoading(true);
        const onSuccess = res => {
          setIsLoading(false);
          console.log('CREATE CONVO ID ', res);
          navigation?.navigate('AdminChat', {
            id: res?.conversation?.id,
            recipientID: res?.conversation?.recipient_id,
          });
        };
        const onFailure = res => {
          console.log('CREATE CONVO ID err ', res);

          setIsLoading(false);
        };
        dispatch(createAdminConversationRequest(data, onSuccess, onFailure));
      } catch (error) {
        setIsLoading(false);
        console.log('CREATE CONVO catch ', error);
      }
    } else {
      setIsLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  const hideItemClick = type => {
    setShowMenu(false);
    setModalType(type);
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const handleModal = () => {
    if (modalType == 'Report') {
      setShowModal(false);
      handleAdminChat();
      reportUser();
    } else if (modalType == 'Block') {
      blockUser();
      setShowModal(false);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ChatHeader
        name={name || ' '}
        source={avatar ? {uri: avatar} : appImages.person3}
        onPressIcon={() => setShowMenu(true)}
        rightIcon={isBlock ? false : true}
      />
      <View style={styles.menuContainer}>
        <Menu
          visible={showMenu}
          style={styles.menuStyle}
          onRequestClose={() => setShowMenu(false)}>
          <MenuItem
            style={styles.menuItemStyle}
            textStyle={styles.menuTxtStyle}
            onPress={() => hideItemClick('Report')}>
            <Text style={[styles.menuTxtStyle, {left: 1.5}]}>Report User</Text>
          </MenuItem>
          <MenuItem
            style={styles.menuItemStyle}
            textStyle={styles.menuTxtStyle}
            onPress={() => hideItemClick('Block')}>
            <Text style={styles.menuTxtStyle}>Block User</Text>
          </MenuItem>
        </Menu>
      </View>
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
                  source={avatar ? {uri: avatar} : appImages.person3}
                  style={styles.personImgStyle}
                />
                <Text style={styles.nameTxtStyle}>{name || ''}</Text>
              </View>
            );
          }}
        />
      ) : (
        <View style={styles.noRecordsView}>
          <Text style={styles.noRecords}>
            {loadingAllMessages ? '' : 'No message found'}
          </Text>
        </View>
      )}
      <KeyboardAvoidingView
        behavior={platformOrientedCode('height', 'padding')}>
        {isBlock ? (
          <Text style={styles.blockText}>You are blocked</Text>
        ) : (
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
        )}
        {showModal && (
          <ChatModal
            type={modalType}
            show={showModal}
            onPress={() => handleModal()}
            name={name}
            source={avatar ? {uri: avatar} : appImages.person3}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PersonChat;
