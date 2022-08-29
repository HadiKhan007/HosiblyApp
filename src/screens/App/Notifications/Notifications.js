import React, {useState} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import {appImages} from '../../../shared/exporter';
import styles from './styles';

const Notifications = () => {
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  const [isLoading, setIsLoading] = useState(false);

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
