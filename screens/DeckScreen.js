/* @flow */

import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';

export default class DeckScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>I'm the DeckScreen component</Text>
        <Text>I'm the DeckScreen component</Text>
        <Text>I'm the DeckScreen component</Text>
        <Text>I'm the DeckScreen component</Text>
        <Text>I'm the DeckScreen component</Text>
        <Text>I'm the DeckScreen component</Text>
        <Text>I'm the DeckScreen component</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
