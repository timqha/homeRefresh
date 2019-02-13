/**
 * @format
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Home extends React.Component<> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.props.email}</Text>
        </View>
        <Text style={styles.welcome}>HOME!</Text>
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
