import React from "react";

import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SignInContextProvider } from "./src/contexts/authContext";

import { COLORs } from "./src/global/styles";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App (){
  return(
    <SignInContextProvider>
      <View style = {styles.container}>
        <StatusBar
          barStyle = "light-content"
          backgroundColor = {COLORs.buttons}
        />

        <RootNavigator />

      </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
