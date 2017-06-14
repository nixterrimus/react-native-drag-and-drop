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
import Droppable from "./Droppable";

class ColorSwatch extends Component {
  render() {
    const { color } = this.props;
    return (
      <Draggable>
        <View
          style={{
            width: 66,
            height: 66,
            borderRadius: 33,
            backgroundColor: color
          }}
        />
      </Draggable>
    );
  }
}
export default class helloDnD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelText: "Hello from React Native",
      textColor: "#F9F4E0",
      backgroundColor: "#F56218"
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
        <Draggable content={this.state.labelText}>
          <View
            style={{
              backgroundColor: this.state.backgroundColor,
              width: 200,
              height: 200,
              borderRadius: 8,
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: 12
            }}
          >
            <Droppable>
              <View
                style={{
                  backgroundColor: this.state.textColor,
                  width: 88,
                  height: 88,
                  borderRadius: 44,
                  marginBottom: 20
                }}
              />
            </Droppable>
            <TouchableOpacity
              onPress={() => {
                AlertIOS.prompt("Update text", null, text =>
                  this.setState({ labelText: text })
                );
              }}
            >
              <Text
                style={{
                  color: this.state.textColor,
                  textAlign: "center",
                  fontWeight: "600"
                }}
              >
                {this.state.labelText}
              </Text>
            </TouchableOpacity>
          </View>
        </Draggable>

        <View
          style={{
            marginTop: 40
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: 400,
              justifyContent: "space-between"
            }}
          >
            <ColorSwatch color="#E39494" />
            <ColorSwatch color="#5B5778" />
            <ColorSwatch color="#A3C6CC" />
            <ColorSwatch color="#DADBC1" />
            <ColorSwatch color="#FCE8B8" />
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("helloDnD", () => helloDnD);
