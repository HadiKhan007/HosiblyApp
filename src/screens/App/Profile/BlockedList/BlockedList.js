import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {AppHeader, BackHeader, ChatModal} from '../../../../components';
import {appImages, checkConnected} from '../../../../shared/exporter';
import styles from './styles';
import {
  getBlockUserListRequest,
  blockUserRequest,
} from '../../../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';

const BlockedList = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllBlockedUsers();
  }, []);
  const unBlockUser = item => {
    try {
      const data = new FormData();
      data.append('user_id', item?.item?.id);
      data.append('is_blocked', false);
      const cbSuccess = res => {
        getAllBlockedUsers();
      };
      const cbFailure = err => {};
      console.log('message data', data);
      dispatch(blockUserRequest(data, cbSuccess, cbFailure));
    } catch (err) {
      console.log('[err]', err);
      setVisibility(false);
    }
  };

  const getAllBlockedUsers = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setIsLoading(true);
        const onSuccess = res => {
          setData(res?.blocked_users);
          setIsLoading(false);
        };
        const onFailure = err => {
          setIsLoading(false);
          console.log('err..', err);
        };
        dispatch(getBlockUserListRequest(onSuccess, onFailure));
      } catch (error) {
        setIsLoading(false);
        console.log('err', error);
      }
    } else {
      setIsLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  const renderItem = item => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={
            item?.item?.profile_image
              ? {uri: item?.item?.profile_image}
              : appImages.person2
          }
          style={styles.imgStyle}
        />
        <View style={{flex: 1}}>
          <Text style={styles.labelTxtStyle}>{item?.item?.name}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => setShowModal(true)}>
            <Text style={styles.btnTxtStyle}>Unblock</Text>
          </TouchableOpacity>
        </View>
        <ChatModal
          type={'Unblock'}
          show={showModal}
          onPressHide={() => [setShowModal(false), unBlockUser(item)]}
          name={item?.item?.name}
          source={
            item?.item?.profile_image
              ? {uri: item?.item?.profile_image}
              : appImages.person3
          }
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader subtitle={'Settings'} />
      <BackHeader title={'Block Lists'} />
      {data?.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flStyle}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.noRecordsView}>
          <Text style={styles.noRecords}>
            {isLoading ? '' : 'No user found'}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default BlockedList;
