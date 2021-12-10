import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton.js';
import { globalStyles } from '../styles/globalStyles.js';

export default function makeSignedInDisplay(signedInProps) {
  function SignedInDisplay() {
    return (
      signedInProps.signedInUser && // Only display this component if a user is signed in
      <View style={globalStyles.subComponentContainer}>
        <Text style={styles.counterText}>Signed in: {signedInProps.signedInUser}</Text>
        <MyButton 
          title={'Sign Out'} 
          onPress={signedInProps.signOutUser}
        />
      </View>
    );
  }
  return SignedInDisplay;
}

const styles = StyleSheet.create({
  counterText: {
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
  },
});