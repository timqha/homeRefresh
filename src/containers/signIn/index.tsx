/**
 * @format
 */

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface Props {}
export default class SignIn extends React.Component<Props> {
  signIn = () => {
    alert("SIgnIN");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.signIn}>
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
