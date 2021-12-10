import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import makeLabeledTextInput from '../componentMakers/makeLabeledTextInput.js';
import MyButton from '../components/MyButton.js';
import makeCounter from '../componentMakers/makeCounter.js';
import makeSignedInDisplay from '../componentMakers/makeSignedInDisplay.js';
import { globalStyles } from '../styles/globalStyles.js'
import { formatJSON } from '../utils.js'

export default function makeProfileScreen(screenProps) {
  function ProfileScreen(props) {
    const Counter = makeCounter(screenProps.counterProps);
    const SignedInDisplay = makeSignedInDisplay(screenProps.signedInProps);
    return (
      <View style={globalStyles.screen}>
        <Text>Profiles Screen</Text>
        <Counter/>
        <SignedInDisplay/>
        <Text style={globalStyles.json}>props: {formatJSON(props)}</Text>
        <View style={globalStyles.buttonHolder}>
          <MyButton title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
          <MyButton
            title="Go to Details"
            onPress={() => props.navigation.push('Details')}/>
          <MyButton title="Go back" onPress={props.navigation.goBack} />
          <MyButton
            title="Go back to first screen in stack"
            onPress={() => props.navigation.popToTop()}
          />
      </View>
      </View>
    );
  }
  return ProfileScreen;
}