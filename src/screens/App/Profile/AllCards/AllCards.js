import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {AppButton, AppHeader, BackHeader, Spacer} from '../../../../components';
import {appIcons, colors, WP} from '../../../../shared/exporter';
import styles from './styles';

const AllCards = ({navigation}) => {
  const [method, setMethod] = useState('cards');

  const renderItem = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.itemContainer}
        onPress={() => navigation.navigate('CardDetails')}>
        <View style={styles.row}>
          <View>
            <Text style={styles.titleTxtStyle}>Harden Eusaff</Text>
            <Text style={styles.valTxtStyle}>**** **** **** 3456</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.boxStyle}>
            <Icon
              type={'entypo'}
              name={'dots-three-horizontal'}
              size={22}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
        <Image
          resizeMode="contain"
          source={appIcons.visa}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader subtitle={'Manage Cards'} />
      <BackHeader
        isBox={true}
        title={'Manage Cards'}
        boxIcon={
          <Icon name={'plus'} type={'entypo'} size={22} color={colors.white} />
        }
      />
      <Spacer androidVal={WP('5.5')} iOSVal={WP('5.5')} />
      <FlatList
        data={[1, 2, 3]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item, index) => item + index.toString()}
      />
      <View style={styles.bottomView}>
        <AppButton
          title="Continue"
          onPress={() => handleNavigation()}
          borderColor={colors.white}
          shadowColor={colors.white}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllCards;
