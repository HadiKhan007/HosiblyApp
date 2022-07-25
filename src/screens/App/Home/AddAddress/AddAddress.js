import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  AddressCard,
  BackHeader,
  FilterInput,
  MyStatusBar,
} from '../../../../components';
import {colors, spacing} from '../../../../shared/exporter';
import styles from './styles';
import {Divider} from 'react-native-elements/dist/divider/Divider';

const AddAddress = ({navigation}) => {
  const [address, setAddress] = useState('');
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Enter Address'} />
      </View>
      <View style={styles.contentContainer}>
        <Divider color={colors.g13} />
        <FilterInput
          onPressIn={() => {
            navigation?.navigate('AddAddress');
          }}
          keyboardType={'default'}
          placeholder={'Street Address'}
          onChangeText={text => {
            setAddress(text);
          }}
          value={address}
        />
        <Divider color={colors.g13} />
        <Text style={styles.h1}>People who searched this address</Text>
        <View style={{flex: 1}}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={() => {
              return (
                <View>
                  <AddressCard />
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddAddress;
