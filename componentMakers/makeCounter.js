import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton.js';
import { globalStyles } from '../styles/globalStyles.js';

export default function makeCounter(counterProps) {
  function Counter() {
    return (
      <View style={globalStyles.subComponentContainer}>
        <Text style={styles.counterText}>{counterProps.count}</Text>
        <View style={styles.buttonHolder}>
          <MyButton 
            title={'Increment'} 
            onPress={counterProps.increment}
          />
          <MyButton 
            title={'Reset'} 
            onPress={counterProps.reset}
          />
        </View>
      </View>
    );
  }
  return Counter;
}

const styles = StyleSheet.create({
  counterText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  buttonHolder: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
  },
});
