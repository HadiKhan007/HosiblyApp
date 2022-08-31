import {View, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {appImages, colors, size, spacing} from '../../../shared/exporter';

import {useState} from 'react';
import {
  BackHeader,
  MyStatusBar,
  ReviewCard,
  ReviewHeader,
} from '../../../components';

const SupportUserReviews = () => {
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

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyStatusBar />
      <View style={spacing.my2}>
        <BackHeader subtitle={'Reviews'} />
      </View>
      <View style={styles.contentContainer}>
        <ReviewHeader
          showMenu={visible}
          onPresMenu={() => {
            setVisible(!visible);
          }}
          onPressItem={res => {
            setchoseStar(res);
            setVisible(false);
          }}
          star={choseStar}
        />

        {/* LIST */}
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

export default SupportUserReviews;
