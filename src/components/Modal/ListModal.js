import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import {family, size, WP, colors} from '../../shared/exporter';

export const ListModal = ({
  listRef,
  list,
  getValue,
  height,
  title,
  onPressCross,
  onPressTick,
  selected,
  closable,
}) => {
  const StoreList = (item, index) => {
    if (getValue) {
      getValue(item, index);
    }
  };

  return (
    <RBSheet
      ref={listRef}
      height={height}
      openDuration={250}
      closeOnPressBack={false}
      closeOnPressMask={false}
      customStyles={{
        container: styles.container,
      }}>
      <View style={styles.aiRow}>
        <Icon name={'cross'} type={'entypo'} onPress={onPressCross} />
        <Text style={styles.textStyle}>{title}</Text>
        <Icon name={'check'} type={'ionicons'} onPress={onPressTick} />
      </View>

      <View style={styles.gradientStyle}>
        <FlatList
          data={list}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.buttonContainer,
                  {
                    backgroundColor:
                      selected?.text == item?.text ? colors.g20 : colors.white,
                  },
                ]}
                onPress={() => StoreList(item, index)}>
                <Text
                  numberOfLines={1}
                  style={[
                    styles.textStyle,
                    {fontFamily: family.Gilroy_Medium},
                  ]}>
                  {item?.text}
                </Text>
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  gradientStyle: {
    width: '100%',

    flex: 1,
    paddingHorizontal: WP('4'),
    paddingVertical: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
    color: colors.b1,
  },
  h1: {
    fontSize: size.h1,
    fontFamily: family.Gilroy_SemiBold,
    textAlign: 'center',
    paddingVertical: 10,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.g12,
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
  },
});
