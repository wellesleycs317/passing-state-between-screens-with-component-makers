import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton.js';
import makeCounter from '../componentMakers/makeCounter.js';
import makeSignedInDisplay from '../componentMakers/makeSignedInDisplay.js';
import { globalStyles } from '../styles/globalStyles.js'
import { formatJSON } from '../utils.js'

export default function makeHomeScreen(screenProps) {
  const Counter = makeCounter(screenProps.counterProps);
  const SignedInDisplay = makeSignedInDisplay(screenProps.signedInProps);
  function HomeScreen(props) {
    return (
      <View style={globalStyles.screen}>
        <Counter/>
        <SignedInDisplay/>
        <Text style={globalStyles.json}>props: {formatJSON(props)}</Text>
        <View style={globalStyles.buttonHolder}>
          <MyButton
              title="Go to SignIn"
              onPress={() => props.navigation.navigate('SignIn')}
            />
          <MyButton
              title="Go to Details"
              onPress={() => props.navigation.navigate('Details', {a: 1, b: 2, paramId: 23})}
            />
        </View>
      </View>
    );
  }
  return HomeScreen;
}