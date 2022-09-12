import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {useIsFocused} from '@react-navigation/core';
import {
  AppButton,
  AppHeader,
  AppLoader,
  BackHeader,
} from '../../../../components';
import {
  WP,
  size,
  colors,
  appLogos,
  checkConnected,
  networkText,
} from '../../../../shared/exporter';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {
  createAdminConversationRequest,
  getQueries,
} from '../../../../redux/actions';

const Support = ({navigation}) => {
  const isFocus = useIsFocused();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [support, setSupport] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (count === 0) {
      getAllQueries(true);
    } else {
      getAllQueries(false);
    }
  }, [isFocus]);

  const getAllQueries = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const onSuccess = res => {
          setSupport(res?.tickets);
          setLoading(false);
        };
        const onFailure = err => {
          console.log('err is => ', err);
          setLoading(false);
        };
        dispatch(getQueries(onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  const handleAdminChat = async ticket => {
    const check = await checkConnected();
    if (check) {
      try {
        const data = new FormData();
        data.append('support_id', ticket?.id);
        setLoading(true);
        const onSuccess = res => {
          setLoading(false);
          navigation?.navigate('AdminChat', {
            id: res?.conversation?.id,
            recipientID: res?.conversation?.recipient_id,
          });
        };
        const onFailure = res => {
          console.log('CREATE CONVO ID err ', res);
          setLoading(false);
        };
        dispatch(createAdminConversationRequest(data, onSuccess, onFailure));
      } catch (error) {
        setLoading(false);
        console.log('CREATE CONVO catch ', error);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.itemContainer(item?.image)}
        onPress={() => handleAdminChat(item?.ticket)}>
        <View style={styles.rowContainer}>
          <Image source={appLogos.supportLogo} style={styles.imgStyle} />
          <View style={{flex: 1}}>
            <View style={styles.reviewRow}>
              <Text style={styles.dateTxtStyle}>
                {moment(item?.ticket?.created_at).format('L')}
              </Text>
              <Text style={styles.statusTxtStyle(item?.ticket?.status)}>
                {item?.ticket?.status}
              </Text>
            </View>
            <Text style={styles.numTxtStyle}>
              {item?.ticket?.ticket_number}
            </Text>
          </View>
        </View>
        <Text style={styles.infoTxtStyle}>{item?.ticket?.description}</Text>
        {item?.image !== '' && (
          <Image source={{uri: item?.image}} style={styles.queryImgStyle} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppLoader loading={loading} />
      <AppHeader subtitle={'Support'} />
      <BackHeader title={'Support'} />
      <View style={styles.contentContainer}>
        {support?.length > 0 ? (
          <FlatList
            data={support}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingTop: WP('5')}}
          />
        ) : (
          <View style={styles.noRecordsView}>
            <Text style={styles.noRecords}>No queries found</Text>
          </View>
        )}
      </View>
      <View style={styles.bottomView}>
        <AppButton
          title="Send New Message"
          onPress={() => navigation.navigate('SupportQuery')}
          shadowColor={colors.white}
          borderColor={colors.white}
          fontSize={size.tiny}
        />
      </View>
    </SafeAreaView>
  );
};

export default Support;
