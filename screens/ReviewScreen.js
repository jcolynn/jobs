/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import { Button } from 'react-native-elements';

export default class ReviewScreen extends Component {
  static navigationOptions = props => {

    return {
      headerTitle: 'Review Jobs',
      headerRight: (
        <Button
          title="Settings"
          onPress = { () => props.navigation.navigate('settings')}
          backgroundColor = "rgba(0,0,0,0)"
          color="rgba(0,125,255,1)"
        />),
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the ReviewScreen component</Text>
        <Text>I'm the ReviewScreen component</Text>
        <Text>I'm the ReviewScreen component</Text>
        <Text>I'm the ReviewScreen component</Text>
        <Text>I'm the ReviewScreen component</Text>
        <Text>I'm the ReviewScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
