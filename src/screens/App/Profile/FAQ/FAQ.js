import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import {
  Spacer,
  AppHeader,
  AppLoader,
  BackHeader,
  MyStatusBar,
} from '../../../../components';
import RenderHtml from 'react-native-render-html';
import {checkConnected, scrWidth, WP} from '../../../../shared/exporter';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {staticPages} from '../../../../redux/actions';

const FAQ = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [faqs, setFAQs] = useState('');

  useEffect(() => {
    getFAQs();
  }, []);

  const getFAQs = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const onSuccess = res => {
          setFAQs(res?.content);
          setLoading(false);
        };
        const onFailure = err => {
          console.log('err is => ', err);
          setLoading(false);
        };
        dispatch(staticPages('faq', onSuccess, onFailure));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Error', networkText);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppLoader loading={loading} />
      <MyStatusBar />
      <AppHeader />
      <Spacer androidVal={WP('4')} iOSVal={WP('4')} />
      <BackHeader title="FAQ" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {faqs === '' ? (
            <Text style={styles.txtStyle} />
          ) : (
            <RenderHtml contentWidth={scrWidth} source={{html: faqs}} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQ;
