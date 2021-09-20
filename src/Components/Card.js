import React from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import {PEACH} from '../Assets/Colors'

export default function Card(props) {
  return (
    <ScrollView
      style={ styles.card}>
      <View>{props.children}</View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: PEACH,
    width: '100%',
    // height: 275,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 28,
    paddingTop: 15,

  }
});
