import React from 'react';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../shared/exporter';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({backgroundColor = colors.white, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar
        {...props}
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={backgroundColor}
      />
    </SafeAreaView>
  </View>
);

export {MyStatusBar};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
