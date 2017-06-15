import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS
} from "react-native";
import Draggable from "./Draggable";

export default class helloDnD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelText: "Hello from React Native"
    };
  }
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
        <Draggable content={{ text: this.state.labelText }}>
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
            <TouchableOpacity
              onPress={() => {
                AlertIOS.prompt("Update text", null, text =>
                  this.setState({ labelText: text })
                );
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "600"
                }}
              >
                {this.state.labelText}
              </Text>
            </TouchableOpacity>
          </View>
        </Draggable>
        <Draggable
          content={{
            text: "This is some text I got from a React Native app"
          }}
        >
          <Text>This is some text I got from a React Native app</Text>
        </Draggable>

        <Draggable
          content={{
            uri: "https://www.khanacademy.org/"
          }}
        >
          <Text>Khan Academy</Text>
        </Draggable>
      </View>
    );
  }
}

AppRegistry.registerComponent("helloDnD", () => helloDnD);
