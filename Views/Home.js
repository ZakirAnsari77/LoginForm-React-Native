import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  onPress = () => {
    this.props.navigation.navigate("Home");
  };
  render() {
    let { Container, cardText, card, cardImage } = styles;
    return (
      <View style={Container}>
        <TouchableOpacity style={card}>
          <Image
            style={cardImage}
            source={{
              uri: "",
            }}
          />
          <Text style={cardText}>
            Shivaji Nagar, Shivaji Nagar, Parbhani - 431401, Nr Swami Samarth
            Mandir (Map)Hospitals
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 40,
  },
  cardText: {
    fontSize: 16,
    padding: 10,
  },

  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});
