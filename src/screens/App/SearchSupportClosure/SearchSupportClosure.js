import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {BackHeader, MyStatusBar, SupportUserCard} from '../../../components';

import {commonStyles, spacing} from '../../../shared/exporter';

const SearchSupportClosure = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Looking For'} />
      </View>
      <View style={styles.contentContainer}>
        <View style={commonStyles.flex1}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={() => {
              return (
                <View>
                  <SupportUserCard />
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchSupportClosure;
