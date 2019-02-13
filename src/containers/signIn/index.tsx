/**
 * @format
 */

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class SignIn extends React.Component<> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => alert("SIgnIN")}>
          <Text style={styles.welcome}>SIGN IN!</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#444888",
    marginBottom: 5,
  },
});
