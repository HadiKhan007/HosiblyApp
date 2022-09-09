import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import {appImages, checkConnected} from '../../../shared/exporter';
import styles from './styles';
import {getNotificationListRequest} from '../../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';

const Notifications = () => {
  const [data, setData] = useState([1, 2, 3]);
  const [isLoading, setIsLoading] = useState(false);
  const {userInfo} = useSelector(state => state?.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('NOTIFICATION SCREEN');
    getNotificationList();
  }, []);

  const getNotificationList = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setIsLoading(true);
        const onSuccess = res => {
          console.log('RES notify ', res);
          setData(res);
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

  const renderItem = () => {
    return (
      <View style={styles.itemContainer}>
        <Image source={appImages.person1} style={styles.imgStyle} />
        <View style={{flex: 1}}>
          <Text style={styles.labelTxtStyle}>Update your profile</Text>
          <Text style={styles.descTxtStyle}>
            Hey! Please update your profile...
          </Text>
          <Text style={styles.timeTxtStyle}>3 min ago</Text>
        </View>
      </View>
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
