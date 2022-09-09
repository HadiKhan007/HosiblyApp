import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {ChatModal, AppLoader, MyStatusBar} from '../../../components';
import {
  appIcons,
  appImages,
  checkConnected,
  networkText,
} from '../../../shared/exporter';
import styles from './styles';
import {
  deleteConversationRequest,
  getconversationListRequest,
} from '../../../redux/actions';

import {useSelector, useDispatch} from 'react-redux';

const Conversations = ({navigation}) => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    getAllConversationList();
  }, []);

  const {userInfo} = useSelector(state => state?.auth);

  const getAllConversationList = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setIsLoading(true);
        const onSuccess = res => {
          setData(res);
          setIsLoading(false);
          setRefreshing(false);
        };
        const onFailure = res => {
          setIsLoading(false);
          setRefreshing(false);
        };
        dispatch(getconversationListRequest(onSuccess, onFailure));
      } catch (error) {
        setIsLoading(false);
        setRefreshing(false);
      }
    } else {
      setIsLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate('PersonChat', {
            id: item?.item?.id,
            avatar: item?.item?.avatar,
            name: item?.item?.full_name,
            recipientID: item?.item?.recipient_id,
            isBlock: item?.item?.is_blocked,
          })
        }>
        <Image
          source={
            item?.item?.avatar ? {uri: item?.item?.avatar} : appImages.person3
          }
          style={styles.imgStyle}
        />
        <View style={{flex: 1}}>
          <View style={styles.innerRow}>
            <Text style={styles.labelTxtStyle}>{item?.item?.full_name}</Text>
            {item?.item?.unread_message > 0 ? (
              <View style={styles.countContainer}>
                <Text style={styles.countTxtStyle}>
                  {item?.item?.unread_message}
                </Text>
              </View>
            ) : null}
          </View>
          <Text style={styles.descTxtStyle}>{item?.item?.message}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const closeRow = (map, key) => {
    map && map[key] && map[key].closeRow();
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <View style={styles.backBtnsContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.delBtnStyle}
          onPress={() => {
            setItem(data?.item);
            closeRow(rowMap, data?.index);
            setTimeout(() => {
              setShowModal(true);
            }, 500);
          }}>
          <Image
            resizeMode="contain"
            source={appIcons.delIcon}
            style={styles.delIconStyle}
          />
          <Text style={styles.delBtnTxtStyle}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const deleteConvo = async () => {
    setShowModal(false);
    const check = await checkConnected();
    if (check) {
      try {
        setIsLoading(true);
        const onSuccess = res => {
          getAllConversationList();
        };
        const onFailure = res => {
          setIsLoading(false);
        };
        dispatch(deleteConversationRequest(item?.id, onSuccess, onFailure));
      } catch (error) {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    getAllConversationList;
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      {userInfo?.user?.profile_type === 'want_support_closer' && (
        <Text style={styles.headerTxtStyle}>Messages</Text>
      )}
      {data?.length > 0 ? (
        <SwipeListView
          useFlatList
          data={data}
          renderItem={renderItem}
          leftOpenValue={0}
          rightOpenValue={-75}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          closeOnScroll
          onRowDidOpen={onRowDidOpen}
          onRowOpen={(rowKey, rowMap) => {
            let key = rowKey;
            if (key === rowKey) return;
            setTimeout(() => {
              rowMap[rowKey].closeRow();
            }, 2000);
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flStyle}
          keyExtractor={(item, index) => index.toString()}
          renderHiddenItem={(data, rowMap) => renderHiddenItem(data, rowMap)}
        />
      ) : (
        <View style={styles.noRecordsView}>
          <Text style={styles.noRecords}>
            {isLoading ? '' : 'No conversations found'}
          </Text>
        </View>
      )}
      <ChatModal
        type={'Delete'}
        show={showModal}
        onPressHide={() => setShowModal(false)}
        onPress={deleteConvo}
        name={item?.full_name}
        source={item?.avatar}
      />
      <AppLoader loading={isLoading} />
    </SafeAreaView>
  );
};

export default Conversations;
