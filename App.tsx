import React from "react";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";

import {Colors} from "react-native/Libraries/NewAppScreen";
import {LoginPage} from "./src/pages/Login/LoginPage";

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Colors.darker} />
      <LoginPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darker,
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
