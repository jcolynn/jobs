/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default class AuthScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>I'm the AuthScreen component</Text>
        <Text>I'm the AuthScreen component</Text>
        <Text>I'm the AuthScreen component</Text>
        <Text>I'm the AuthScreen component</Text>
        <Text>I'm the AuthScreen component</Text>
        <Text>I'm the AuthScreen component</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
