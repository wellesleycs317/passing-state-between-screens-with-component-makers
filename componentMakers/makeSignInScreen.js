import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton.js';
import makeLabeledTextInput from '../componentMakers/makeLabeledTextInput.js';
import makeSignedInDisplay from '../componentMakers/makeSignedInDisplay.js';

import { globalStyles } from '../styles/globalStyles.js';

export default function makeSignInScreen(signedInProps) {
  const SignedInDisplay = makeSignedInDisplay(signedInProps);
  function SignInScreen(props) {
    [readUserName, LabeledTextInput] = makeLabeledTextInput('User Name:')
    function signIn() {
      signedInProps.signInUser(readUserName());
    }
    // {signedInProps.signedInUser ? styles.invisible : styles.visible}
    return (
      <View style={globalStyles.screen}>
        <View style={[styles.signIn, signedInProps.signedInUser ? globalStyles.invisible : globalStyles.visible]}>
          <LabeledTextInput/>
          <MyButton 
            title={'Sign In'} 
            onPress={signIn}
          />
        </View> 
        <SignedInDisplay/>
        <MyButton
            title="Go Home"
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
    );
  }
  return SignInScreen
}

const styles = StyleSheet.create({
  signIn: {
      width: '90%',
      borderWidth: 1,
      borderStyle: 'dashed', // Lyn sez: doesn't seem to work 
      borderColor: 'blue',
      backgroundColor: 'aliceblue',
      padding: 20,
  },
});

