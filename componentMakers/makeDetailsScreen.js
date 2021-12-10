import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import makeLabeledTextInput from '../componentMakers/makeLabeledTextInput.js';
import MyButton from '../components/MyButton.js';
import makeCounter from '../componentMakers/makeCounter.js';
import makeSignedInDisplay from '../componentMakers/makeSignedInDisplay.js';
import { globalStyles } from '../styles/globalStyles.js';
import { formatJSON } from '../utils.js'

export default function makeDetailsScreen(screenProps) {
  const Counter = makeCounter(screenProps.counterProps);
  const SignedInDisplay = makeSignedInDisplay(screenProps.signedInProps);
  function DetailsScreen(props) {
    return (
      <View style={globalStyles.screen}>
        <Counter/>
        <SignedInDisplay/>
        <Text>Details Screen</Text>
        <Text>a: {props.route.params.a}</Text>
        <Text>b: {props.route.params.b}</Text>
        <Text style={globalStyles.json}>props: {formatJSON(props)}</Text>
        <View style={globalStyles.buttonHolder}>
          <MyButton title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
          <MyButton
            title="Go to Details... again"
            onPress={() => props.navigation.push('Details', {b: props.route.params.b+1})}/>
          <MyButton
            title="Go to Profile"
            onPress={() => props.navigation.navigate('Profiles')}/>
          <MyButton title="Go back" onPress={() => props.navigation.goBack()} />
          <MyButton
              title="Go back to first screen in stack"
              onPress={() => props.navigation.popToTop()}
            />
        </View>
      </View>
    );
  }
  return DetailsScreen;
}