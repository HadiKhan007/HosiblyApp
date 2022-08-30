import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {appIcons, appImages, colors, size} from '../../../shared/exporter';

import {useState} from 'react';
import {
  AppStarRating,
  BackHeader,
  MenuList,
  MyStatusBar,
  ReviewCard,
} from '../../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {ProfileModal} from '../../../components/Modal/ProfileModel';
import {Menu, MenuItem} from 'react-native-material-menu';

const SupportReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 0,
      title: 'Hanna Torff',
      description:
        'Harden is such a great Home inspector. He ensures that our new house will be clean good to live in. Thank you Harden 😊',
      image: appImages.hanna,
    },
    {
      id: 1,
      title: 'Carter Kenter',
      description:
        'Scheduled a pretty last minute inspection with Harden, and crew - to say the least, Inspect Canada absolutely delivered. All the information was presented to my wife and I clearly, with possible avenues for solutions as well as their general thoughts. We were taken on a comprehensive tour of the building as well.',
      image: appImages.Carter,
    },
    {
      id: 2,
      title: 'Hanna Press',
      description:
        'Harden’s inspection work was very impressive! He was very thorough in showing us around the house, and demonstrating what worked well, and what needed improvement. He was honest in his report and even gave recommendations on how to improve the house. ',
      image: appImages.Press,
    },
    {
      id: 4,
      title: 'James George',
      description:
        'Purchased our very first condo together with my girlfriend and needed a home inspection. Booking was easy and priced extremely well. Harden was incredibly detailed and thorough with our inspection. He took the time to walk through the entire unit and explain all the points he had inspected and everything he wanted to address. He also had a detailed report with photos and recommendations sent to my email within minutes of the inspection being completed. I would definitely recommend Harden.',
      image: appImages.James,
    },
  ]);
  const [choseStar, setchoseStar] = useState(0);
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <BackHeader subtitle={'Reviews'} />
      <View style={styles.contentContainer}>
        <View style={styles.starContainer}>
          <Text style={styles.reviewtext}>Reviews(43)</Text>
          <AppStarRating
            style={styles.starRating}
            disabled={true}
            maxStars={1}
            fullStarColor={colors.starcolor}
            starSize={size.h6}
          />
          <Text style={styles.reviewtext}>{choseStar}</Text>
          <TouchableOpacity
            style={styles.btnRow}
            onPress={() => setVisible(!visible)}>
            <Icon
              style={{
                paddingHorizontal: 5,
                color: colors.b10,
                paddingBottom: 5,
                paddingLeft: 5,
                border: 1.5,
              }}
              name={'down'}
              size={15}
            />
          </TouchableOpacity>
          <View style={styles.itemContainer}>
            <Menu visible={visible} onRequestClose={hideMenu}>
              {[5, 4, 3, 2, 1].map(item => {
                return (
                  <MenuItem style={styles.menuItem}>
                    <AppStarRating
                      style={styles.starRating}
                      disabled={false}
                      maxStars={item}
                      fullStarColor={colors.starcolor}
                      starSize={size.small}
                    />

                    <Text style={styles.itemCon}>{item}</Text>
                  </MenuItem>
                );
              })}
            </Menu>
            {/* <ReviewModal show={showModal} /> */}
          </View>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={reviews}
            renderItem={({item}) => {
              return (
                <View>
                  <ReviewCard
                    image={appImages.hanna}
                    title={'Hanna Torff'}
                    description={
                      'Harden is such a great Home inspector. He ensures that our new house will be clean good to live in. Thank you Harden 😊'
                    }
                    star={5}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SupportReviews;
