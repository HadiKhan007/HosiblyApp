import React from 'react';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../shared/exporter';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const MyStatusBar = ({barStyle, backgroundColor = colors.white, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar
        {...props}
        translucent={true}
        barStyle={barStyle || 'dark-content'}
        backgroundColor={backgroundColor}
      />
    </SafeAreaView>
  </View>
);

export {MyStatusBar};

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
