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
import {AppStarRating, MenuList} from '../../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {ProfileModal} from '../../../components/Modal/ProfileModel';
import ReviewModal from '../../../components/Modal/ReviewModal';

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
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.topContainer}>
        <View style={styles.arrowcon}>
          <TouchableOpacity onPress={() => {}}>
            <Image style={styles.imgIcon} source={appIcons.backArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewtext}>Reviews</Text>
        </View>
      </View>
      <View style={styles.starContainer}>
        <Text style={styles.reviewtext}>Reviews(43)</Text>
        <View style={styles.dropdownstyle}>
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
            onPress={() => setShowModal(!showModal)}>
            <Icon
              style={{
                paddingHorizontal: 10,
                color: colors.b9,
                border: 1.5,
              }}
              name={'down'}
              size={12}
            />
          </TouchableOpacity>
          <View>
            <ReviewModal show={showModal} />
          </View>
        </View>
      </View>
      <FlatList
        data={reviews}
        renderItem={({item}) => {
          return (
            <View key={item?.id} style={styles.topView}>
              <View>
                <Image style={styles.imagestyle} source={item?.image} />
              </View>
              <View style={styles.innerView}>
                <View style={styles.centerView}>
                  <Text style={styles.nameText}>{item?.title}</Text>
                  <View style={styles.starRating}>
                    <AppStarRating
                      style={styles.starRating}
                      disabled={false}
                      maxStars={5}
                      fullStarColor={colors.starcolor}
                      starSize={size.small}
                    />
                  </View>
                </View>
                <View style={styles.commitContainer}>
                  <Text style={styles.commenttext}>{item?.description}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SupportReviews;
