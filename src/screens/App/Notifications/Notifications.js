import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  appImages,
  checkConnected,
  networkText,
  profile_uri,
} from '../../../shared/exporter';
import styles from './styles';
import {getNotificationListRequest} from '../../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';

const Notifications = ({navigation}) => {
  const [data, setData] = useState([1, 2, 3]);
  const [isLoading, setIsLoading] = useState(false);
  const {userInfo} = useSelector(state => state?.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getNotificationList();
  }, []);

  const getNotificationList = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setIsLoading(true);
        const onSuccess = res => {
          setData(res?.notification);
          setIsLoading(false);
        };
        const onFailure = res => {
          setIsLoading(false);
        };
        dispatch(getNotificationListRequest(onSuccess, onFailure));
      } catch (error) {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation?.navigate('PersonChat', {
            id: item?.conversation_id,
            avatar: item?.sender_avatar,
            name: item?.sender_name,
            recipientID: item?.recipient_id,
            isBlock: item?.isBlock,
          });
        }}
        style={styles.itemContainer}>
        <Image
          source={{uri: item?.sender_avatar || profile_uri}}
          style={styles.imgStyle}
        />
        <View style={{flex: 1}}>
          <Text style={styles.labelTxtStyle}>{item?.title}</Text>
          <Text style={styles.descTxtStyle}>{item?.action}</Text>
          <Text style={styles.timeTxtStyle}>
            {moment(item?.updated_at).fromNow()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      {userInfo?.user?.profile_type === 'want_support_closer' && (
        <Text style={styles.headerTxtStyle}>Notifications</Text>
      )}
      {data?.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flStyle}
          keyExtractor={(item, index) => (item + index).toString()}
        />
      ) : (
        <View style={styles.noRecordsView}>
          <Text style={styles.noRecords}>
            {isLoading ? '' : 'No notifications found'}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Notifications;
