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

const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState('');

  useEffect(() => {
    getPrivacyPolicy();
  }, []);

  const getPrivacyPolicy = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const onSuccess = res => {
          setPrivacyPolicy(res?.content);
          setLoading(false);
        };
        const onFailure = err => {
          console.log('err is => ', err);
          setLoading(false);
        };
        dispatch(staticPages('privacy_policy', onSuccess, onFailure));
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
      <BackHeader title="Privacy Policy" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {privacyPolicy === '' ? (
            <Text style={styles.txtStyle} />
          ) : (
            <RenderHtml
              contentWidth={scrWidth}
              source={{html: privacyPolicy}}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
