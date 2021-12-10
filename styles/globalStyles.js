import React, {useState, useEffect} from "react";
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  json: {
    padding: 10, 
    color: 'blue', 
    borderWidth: 1,
    borderStyle: 'dashed', // Lyn sez: doesn't seem to work 
    borderColor: 'blue',
  },
  subComponentContainer: {
    padding: 10, 
    color: 'blue', 
    borderWidth: 1,
    borderStyle: 'dashed', // Lyn sez: doesn't seem to work 
    borderColor: 'coral',
    backgroundColor: 'pink',
  },
  buttonHolder: {
    flexDirection: "row",
    flexWrap: "wrap",
   justifyContent: 'center',
  },
  invisible: {
    display: 'none',
  },
  visible: {
    display: 'flex',
  },
});