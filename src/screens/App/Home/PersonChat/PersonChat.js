import React, {useRef, useState, useLayoutEffect} from 'react';
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
import {ChatHeader, ChatModal, Spacer} from '../../../../components';
import {
  WP,
  colors,
  appIcons,
  appImages,
  platformOrientedCode,
} from '../../../../shared/exporter';
import styles from './styles';
import {chat} from '../../../../shared/utilities/constant';

const PersonChat = ({navigation}) => {
  const isFocus = useIsFocused();
  const [fresh, setFresh] = useState(true);
  const [message, setMessage] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cameraImage, setCameraImage] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [galleryImage, setGalleryImage] = useState('');
  const [allMessages, setAllMessages] = useState(chat);
  const [modalType, setModalType] = useState('report');

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
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

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.msgContainer}>
        {item.viewType === 'sender' ? (
          // Sender Bubble
          <View style={styles.senderBubble}>
            <View style={styles.senderBubbleStyles}>
              <Text style={styles.senderMsgStyles}>{item.message}</Text>
            </View>
          </View>
        ) : (
          // Receiver Bubble
          <View style={styles.receiverBubble}>
            <View style={{width: '70%'}}>
              <View style={styles.receiverBubbleStyles}>
                <Text style={styles.receiverMsgStyles}>{item.message}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  const onSend = () => {};

  const hideItemClick = type => {
    setShowMenu(false);
    setModalType(type);
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ChatHeader onPressIcon={() => setShowMenu(true)} rightIcon />
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
                  source={appImages.person3}
                  style={styles.personImgStyle}
                />
                <Text style={styles.nameTxtStyle}>Aspen Franci</Text>
              </View>
            );
          }}
        />
      ) : (
        <View style={styles.noRecordsView}>
          <Text style={styles.noRecords}>
            {isLoading ? '' : 'No events found'}
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
        <ChatModal
          type={modalType}
          show={showModal}
          onPressHide={() => setShowModal(false)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PersonChat;
