import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import fb from "./screens/fb";
import ins from "./screens/ins";

export default class App extends React.Component {
  render() {
      
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen:fb },
  Instagram: { screen: ins }
});

const AppContainer = createAppContainer(TabNavigator);