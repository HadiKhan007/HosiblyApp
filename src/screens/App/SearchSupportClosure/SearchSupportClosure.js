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

const SearchSupportClosure = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setfilteredData] = useState([]);
  const [supportData, setSupportData] = useState([]);
  const dispatch = useDispatch(null);

  //Get Suppport User
  useEffect(() => {
    getSupportUser();
  }, []);

  //Get Support User
  const getSupportUser = async () => {
    const check = await checkConnected();
    if (check) {
      const onSuccess = async res => {
        setSupportData(res?.support_closer);
        setfilteredData(res?.support_closer);
        setLoading(false);
      };
      const onFailure = async res => {
        setLoading(false);
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
    const onSuccess = async res => {
      navigation?.navigate('SupportProfile');
      setLoading(false);
    };
    const onFailure = async res => {
      setLoading(false);
      Alert.alert('Error', res);
    };
    dispatch(selected_suuport_user_data(item, onSuccess, onFailure));
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
            keyExtractor={(item, index) => index?.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchSupportClosure;
