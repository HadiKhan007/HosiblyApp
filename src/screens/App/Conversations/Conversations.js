import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {ChatModal, AppLoader} from '../../../components';
import {appIcons, appImages, checkConnected} from '../../../shared/exporter';
import styles from './styles';
import {getconversationListRequest} from '../../../redux/actions';

import {useSelector, useDispatch} from 'react-redux';

const Conversations = ({navigation}) => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

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
        };
        const onFailure = res => {
          setIsLoading(false);
        };
        dispatch(getconversationListRequest(onSuccess, onFailure));
      } catch (error) {
        setIsLoading(false);
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
          <Text style={styles.descTxtStyle}>
            {item?.item?.message ? item?.item?.message : 'Draft'}
          </Text>
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
            closeRow(rowMap, data?.index);
            setShowModal(true);
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

  return (
    <SafeAreaView style={styles.rootContainer}>
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
      />
      <AppLoader loading={isLoading} />
    </SafeAreaView>
  );
};

export default Conversations;
