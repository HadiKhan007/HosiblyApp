import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  BackHeader,
  MyStatusBar,
  PreviewField,
  PreviewImageBox,
  PreviewImageCover,
  PreviewInfoCard,
  PriceInput,
  SmallHeading,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  appIcons,
  colors,
  condo_items,
  inputItems,
  size,
  spacing,
  WP,
} from '../../../../shared/exporter';
import styles from './styles';
import {Divider} from 'react-native-elements/dist/divider/Divider';

const PropertyDetail = ({navigation}) => {
  const [previewImg, setPreviewImg] = useState(
    'https://wallpaperaccess.com/full/1700222.jpg',
  );
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Preview'} />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <PreviewImageCover uri={previewImg} />
          <View>
            <FlatList
              data={[
                'https://wallpaperaccess.com/full/1700222.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7E729KFGnU7PHF1gtIWPK17A00TcIBc1EQ&usqp=CAU',
              ]}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setPreviewImg(item);
                    }}>
                    <PreviewImageBox onPress={() => {}} uri={item} />
                  </TouchableOpacity>
                );
              }}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
          <View style={spacing.my2}>
            <Text style={styles.header}>Information</Text>
            <FlatList
              data={[
                {id: 0, h1: 'Price', h2: '$25,000', icon: appIcons.priceTag},
                {id: 0, h1: 'Year Built', h2: '2012', icon: appIcons.built},
              ]}
              renderItem={({item}) => {
                return <PreviewInfoCard item={item} />;
              }}
              numColumns={2}
            />
            <Text numberOfLines={6} style={styles.desc}>
              Luxurious and upgraded, this 4 bedroom, 4.5 bathroom home of 5,281
              sq. ft. (including poolhouse, per independent third-party
              measurement) rests on a lot of 1.23 acres (per county) on a
              peaceful cul-de-sac in the Lakeside neighborhood. Richly-appointed
              spaces include large gathering areas. More...
            </Text>
            <Divider color={colors.g13} />
            <PreviewField
              title={'Street Address'}
              subtitle={'4517 New York Ave. Manchester, Kentucky 39495'}
            />
            <PreviewField title={'Unit'} subtitle={'23'} />
            <PreviewField title={'Lot Frontage (sqm)'} subtitle={'23'} />
            <PreviewField title={'Lot Depth (sqm)'} subtitle={'23'} />
            <PreviewField title={'Lot Size (feet)'} subtitle={'23'} />
            <PreviewField title={'Is This Lot Irregular?'} subtitle={'23'} />
            <PreviewField title={'Property Taxes'} subtitle={'23'} />
            <PreviewField title={'Tax Year'} subtitle={'23'} />
            <View style={spacing.my4}>
              <Divider color={colors.g13} />
              <FlatList
                data={[...inputItems, ...condo_items]}
                renderItem={({item}) => {
                  return (
                    <View>
                      <PreviewField
                        source={item?.Img}
                        title={item?.title}
                        subtitle={'value'}
                      />
                    </View>
                  );
                }}
              />
            </View>

            <View style={styles.descBox}>
              <SmallHeading title={'Property Description'} />
              <SmallHeading
                textColor={colors.g22}
                title={
                  'Luxurious and upgraded, this 4 bedroom, 4.5 bathroom home of 5,281 sq. ft. (including poolhouse, per independent third-party measurement) rests on a lot of 1.23 acres (per county) on a peaceful cul-de-sac in the Lakeside neighborhood. Richly-appointed spaces include large gathering areas.x'
                }
              />
              <SmallHeading title={'Appliances and other Items'} />
              <SmallHeading textColor={colors.g22} title={'N/A'} />
            </View>
          </View>
          <View style={styles.spacRow}>
            <AppButton
              width={'45%'}
              bgColor={colors.g21}
              title={'Save'}
              fontSize={size.tiny}
              borderColor={colors.g21}
              onPress={() => {
                navigation?.goBack();
              }}
              shadowColor={colors.white}
            />
            <AppButton
              onPress={() => {
                // navigation?.navigate('PropertyDetail');
              }}
              width={'45%'}
              bgColor={colors.p2}
              title={'Post'}
              fontSize={size.tiny}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PropertyDetail;
