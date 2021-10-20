import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Register from "./Views/Register";
import Login from "./Views/Login";
import Home from "./Views/Home";

class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    Home: Home,
  },
  {
    initialRouteName: "Login",
  }
);

export default createAppContainer(AppNavigator);
