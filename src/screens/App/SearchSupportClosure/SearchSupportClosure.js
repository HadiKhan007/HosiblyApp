import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import {
  AppLoader,
  BackHeader,
  MyStatusBar,
  SearchBar,
  SupportUserCard,
} from '../../../components';

import {
  checkConnected,
  commonStyles,
  networkText,
  spacing,
} from '../../../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';
import {
  get_suuport_users,
  selected_suuport_user_data,
} from '../../../redux/actions';
import {setProfileVisitApi} from '../../../shared/service/AppService';
import {useIsFocused} from '@react-navigation/core';

const SearchSupportClosure = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setfilteredData] = useState([]);
  const [supportData, setSupportData] = useState([]);
  const {support_users} = useSelector(state => state?.supportReducer);
  const isFocus = useIsFocused(null);
  const dispatch = useDispatch(null);

  //Get Suppport User
  useEffect(() => {
    if (isFocus) {
      getSupportUser();
    }
  }, [isFocus]);

  //Get Support User
  const getSupportUser = async () => {
    const check = await checkConnected();
    if (check) {
      const onSuccess = async res => {
        setSupportData(support_users?.support_closer);
        setfilteredData(support_users?.support_closer);
      };
      const onFailure = async res => {
        Alert.alert('Error', res);
      };
      dispatch(get_suuport_users(null, onSuccess, onFailure));
    } else {
      Alert.alert('Error', networkText);
    }
  };

  //Search Item
  const searchItem = async search => {
    setSearchText(search);
    let searchData = [];
    searchData = filteredData?.filter(item => {
      return item?.full_name?.toUpperCase().includes(search.toUpperCase());
    });
    setSupportData(searchData);
  };

  const selectedItem = async item => {
    setLoading(true);
    const body = {
      user_id: item?.id,
    };
    const res = await setProfileVisitApi(body);
    if (res) {
      setLoading(false);
      navigation?.navigate('SupportProfile', {item: item});
    } else {
      setLoading(false);
      Alert.alert('Error', 'Something went wrong!');
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Looking For'} />
      </View>
      <View style={styles.contentContainer}>
        <SearchBar
          onChangeText={text => {
            searchItem(text);
          }}
        />
        <View style={[commonStyles.flex1, spacing.py4]}>
          <FlatList
            data={supportData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    selectedItem(item);
                  }}>
                  <SupportUserCard item={item} />
                </TouchableOpacity>
              );
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index?.toString()}
          />
        </View>
      </View>
      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};

export default SearchSupportClosure;
