import React, {useState} from 'react';
import {Text, View, SafeAreaView, Alert, ScrollView} from 'react-native';
import {
  AppButton,
  AppHeader,
  AppLoader,
  BackHeader,
  DayBox,
  TimePickerCard,
} from '../../../components';
import {checkConnected, colors, weekDays} from '../../../shared/exporter';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';

const ScheduleDay = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [week_days, setWeek_days] = useState(weekDays);
  const {userInfo} = useSelector(state => state?.auth);
  const dispatch = useDispatch(null);

  //On Submit
  const onSubmit = async values => {
    const check = await checkConnected();
    if (check) {
      // setLoading(true);
      const imgObj = {
        uri: values?.image?.path,
        type: values?.image?.mime,
        name: values?.image?.fileName || 'image',
      };

      const form = new FormData();
      form.append('user[description]', values?.desc);
      form.append('user[avatar]', imgObj);
      form.append('user[profession]', professionList);
      navigation?.navigate('UploadDocuments');
    } else {
      Alert.alert('Error', 'At least one profession required!');
    }
  };

  const setSelectedDay = (item, index) => {
    week_days[index].selected = !item?.selected;
    setWeek_days([...week_days]);
  };
  return (
    <>
      <SafeAreaView style={styles.rootContainer}>
        <AppHeader />
        <BackHeader title={'Set Your Schedule'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Text style={[styles.h1Style]}>Profession</Text>
            <View style={styles.listCon}>
              {week_days.map((item, index) => {
                return (
                  <View>
                    <DayBox
                      day={item.day}
                      onPress={() => {
                        setSelectedDay(item, index);
                      }}
                      bgColor={item?.selected ? colors.white : colors.g8}
                      borderWidth={item?.selected ? 1 : 0}
                      borderColor={item?.selected ? colors.p2 : colors.g8}
                      tick={item?.selected ? true : false}
                    />
                  </View>
                );
              })}
            </View>
            <View>
              <Text style={[styles.h1Style]}>Starts at</Text>

              <TimePickerCard dateValue={new Date()} minTime={new Date()} />
            </View>
            <View>
              <Text style={[styles.h1Style]}>Ends at</Text>
              <TimePickerCard dateValue={new Date()} minTime={new Date()} />
            </View>
            <AppButton title={'Set'} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <AppLoader loading={loading} />
    </>
  );
};

export default ScheduleDay;
