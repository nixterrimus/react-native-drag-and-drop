import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Draggable from "./Draggable";

export default class helloDnD extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F5FCFF",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Draggable>
          <View
            style={{
              backgroundColor: "#F56218",
              width: 200,
              height: 200,
              borderRadius: 8,
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: 12
            }}
          >
            <View
              style={{
                backgroundColor: "#F9F4E0",
                width: 80,
                height: 80,
                borderRadius: 40,
                marginBottom: 20
              }}
            />
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "600"
              }}
            >
              Hello, from React Native
            </Text>
          </View>
        </Draggable>
      </View>
    );
  }
}

AppRegistry.registerComponent("helloDnD", () => helloDnD);
