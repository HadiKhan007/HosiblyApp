import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {ChatModal} from '../../../components';
import {appIcons, appImages} from '../../../shared/exporter';
import styles from './styles';

const Conversations = ({navigation}) => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const renderItem = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.itemContainer}
        onPress={() => navigation.navigate('PersonChat')}>
        <Image source={appImages.person1} style={styles.imgStyle} />
        <View style={{flex: 1}}>
          <View style={styles.innerRow}>
            <Text style={styles.labelTxtStyle}>Aspen Franci</Text>
            <View style={styles.countContainer}>
              <Text style={styles.countTxtStyle}>1</Text>
            </View>
          </View>
          <Text style={styles.descTxtStyle}>
            Hey! Please update your profile...
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
    </SafeAreaView>
  );
};

export default Conversations;
