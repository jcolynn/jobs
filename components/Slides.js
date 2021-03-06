/* @flow */

import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slide, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText} >
            {slide.text}
          </Text>
          {this.renderLastSlide(index)}
        </View>
      );
    })
  }


  render() {
    return (
      <ScrollView
        style={styles.container}
        horizontal
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slideText: {
    fontSize: 30,
    color: 'white'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
});
