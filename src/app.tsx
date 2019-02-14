/**
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
// import { StyleSheet } from "react-native";
import { observer, inject } from "mobx-react/native";

import { IAuthStore } from "./types";
import Home from "./containers/home";

interface Props {
  auth?: IAuthStore;
}
@inject("auth")
@observer
export default class App extends Component<Props> {
  render() {
    const { auth } = this.props;
    return (
      <Home email={auth && auth.email} />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
// });
