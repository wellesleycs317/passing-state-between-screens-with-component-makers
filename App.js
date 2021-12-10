// Using higher-order component-maker functions to pass state 
// between screen components in React Native. 
//
// Author: Lyn Turbak
// Date: 2021/12/09

import React, {useState, useEffect} from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import MyButton from './components/MyButton.js';
import makeCounter from './componentMakers/makeCounter.js';
import makeSignedInDisplay from './componentMakers/makeSignedInDisplay.js';
import makeHomeScreen from './componentMakers/makeHomeScreen.js';
import makeSignInScreen from './componentMakers/makeSignInScreen.js';
import makeDetailsScreen from './componentMakers/makeDetailsScreen.js';
import makeProfileScreen from './componentMakers/makeProfileScreen.js';
import { globalStyles } from './styles/globalStyles.js';

const Stack = createNativeStackNavigator();

export default function App() {

  // "global" counter state for App shared by screens
  const [count, setCount] = useState(0);
  const increment = () => setCount(count+1)
  const reset = () => setCount(0);
  const counterProps = { count, increment, reset };
  // The above is equivalent to:
  // counterProps = { count: count, 
  //                  increment: increment, 
  //                  reset: reset 
  //                  };

  // "global" signed-in state for App shared by screens
  const [signedInUser, setSignedInUser] = useState(null);
  const signInUser = username => (setSignedInUser(username))
  const signOutUser = () => (setSignedInUser(null))
  const signedInProps = { signedInUser, signInUser, signOutUser};
  // The above is equivalent to:
  // signedInProps = { signedInUser: signedInUser, 
  //                   signInUser: signInUser,
  //                   signOutUser: signOutUser,
  //                   };

  const screenProps = {counterProps, signedInProps};
  // The above is equivalent to:
  // screenProps = { counterProps: counterProps, 
  //                 screenProps: screenProps
  //               };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
          screenOptions={{ headerStyle: { backgroundColor: 'coral' }}}
          initialRouteName="Home">
        <Stack.Screen 
            name="Home" 
            initialParams={{ initialId: 42}}
            component={makeHomeScreen(screenProps)}
            /> 
        <Stack.Screen 
          name="SignIn" component={makeSignInScreen(signedInProps)} 
         />
        <Stack.Screen 
          name="Details" component={makeDetailsScreen(screenProps)} 
          initialParams={{ initialId: 57 }}
         />
        <Stack.Screen 
          name="Profiles" component={makeProfileScreen(screenProps)} 
          initialParams={{ initialId: 21 }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
