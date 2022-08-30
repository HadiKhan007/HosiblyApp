import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {AppHeader, BackHeader, ChatModal} from '../../../../components';
import {appImages} from '../../../../shared/exporter';
import styles from './styles';

const BlockedList = ({navigation}) => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const renderItem = () => {
    return (
      <View style={styles.itemContainer}>
        <Image source={appImages.person2} style={styles.imgStyle} />
        <View style={{flex: 1}}>
          <Text style={styles.labelTxtStyle}>Ruben Bergson</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => setShowModal(true)}>
            <Text style={styles.btnTxtStyle}>Unblock</Text>
          </TouchableOpacity>
        </View>
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
            {isLoading ? '' : 'No conversations found'}
          </Text>
        </View>
      )}
      <ChatModal
        type={'Unblock'}
        show={showModal}
        onPressHide={() => setShowModal(false)}
      />
    </SafeAreaView>
  );
};

export default BlockedList;
