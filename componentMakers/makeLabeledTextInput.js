import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles.js';

export default function makeLabeledTextInput(label) {

  // The following is a stub function name assigned
  // from within LabeledTextInput. This is a kludge
  // that allows the call to useState to appear *within*
  // the LabledTextInput function. If it is defined
  // *outside* the the LabledTextInput function, 
  // the the LabledTextInput component redisplays
  // any container (such as in SignInScreen), which
  // is unacceptable from a user interface point of view. 
  let readAndEraseInputOuter;
  function readAndEraseInput() {
    return readAndEraseInputOuter();
  }
  function LabledTextInput () {
    const [input, setInput] = React.useState('');
    function readAndEraseInputInner() {
      let savedInput = input; 
      setInput('')
      return savedInput;
    }
    readAndEraseInputOuter = readAndEraseInputInner;
    return (
      <View style={styles.labeledInput}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput placeholder="Enter a user name"
          style={styles.textInput}
          value={input}
          onChangeText={setInput} />
      </View>
    );
  }
  return [readAndEraseInput, LabledTextInput]
}

const styles = StyleSheet.create({
  labeledInput: {
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
  },
  inputLabel: {
      fontSize: 20,
  },
  textInput: {
      width: "80%",
      fontSize: 20,
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: 1,
      marginBottom: 8,
  },
});
