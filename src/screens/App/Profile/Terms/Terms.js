import React, {useState, useEffect} from 'react';
import {SafeAreaView, Alert, Text, View, ScrollView} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {AppHeader, BackHeader, AppLoader} from '../../../../components';
import {checkConnected, scrWidth} from '../../../../shared/exporter';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {staticPages} from '../../../../redux/actions';

const Terms = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [termsConditions, setTermsConditions] = useState('');

  useEffect(() => {
    getTermsConditions();
  }, []);

  const getTermsConditions = async () => {
    const check = await checkConnected();
    if (check) {
      try {
        setLoading(true);
        const onSuccess = res => {
          setTermsConditions(res?.content);
          setLoading(false);
        };
        const onFailure = err => {
          console.log('err is => ', err);
          setLoading(false);
        };
        dispatch(staticPages('terms&condition', onSuccess, onFailure));
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
      <AppHeader subtitle={'Terms & Conditions'} />
      <BackHeader title={'Terms & Conditions'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {termsConditions === '' ? (
            <Text style={styles.txtStyle} />
          ) : (
            <RenderHtml
              contentWidth={scrWidth}
              source={{html: termsConditions}}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Terms;
