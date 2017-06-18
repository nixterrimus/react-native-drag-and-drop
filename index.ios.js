import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS,
  ScrollView
} from "react-native";
import { Draggable } from "./Draggable";

class Example extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 10,
          paddingVertical: 10,
          marginHorizontal: 12
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 5
          }}
        >
          {this.props.title}
        </Text>
        <View
          style={{
            alignItems: "center",
            borderTopWidth: StyleSheet.hairlineWidth,
            borderColor: "black",
            paddingTop: 10
          }}
        >
          {this.props.children}
        </View>
      </View>
    );
  }
}
export default class helloDnD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelText: "Hello from React Native",
      dragging: false
    };
  }
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#F5FCFF",
          marginTop: 22
        }}
        contentContainerStyle={{
          paddingVertical: 12
        }}
      >
        <Example title="Drag some text">
          <Draggable
            content={{
              text: "This is some text I got from a React Native app"
            }}
          >
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: "red",
                backgroundColor: "white"
              }}
            >
              <Text>This is some text I got from a React Native app</Text>
            </View>
          </Draggable>
        </Example>

        <Example title="Drag a URL">
          <Draggable
            content={{
              uri: "https://www.khanacademy.org/"
            }}
          >
            <Text
              style={{
                paddingVertical: 12,
                paddingHorizontal: 22,
                backgroundColor: "rgba(255,255,255,0.5)",
                fontWeight: "600"
              }}
            >
              🌐 Khan Academy
            </Text>
          </Draggable>
        </Example>

        <Example title="Drag a few things">
          <Draggable
            content={[
              {
                uri: "https://www.khanacademy.org/partner-content/pixar/simulation/hair-simulation-101/v/hair-simulation-intro"
              },
              {
                uri: "https://www.khanacademy.org/partner-content/pixar/simulation/hair-simulation-101/v/sim1-fix"
              },
              {
                uri: "https://www.khanacademy.org/partner-content/pixar/simulation/hair-simulation-101/v/sim2-fix"
              },
              {
                uri: "https://www.khanacademy.org/partner-content/pixar/simulation/hair-simulation-101/v/sim3-launch"
              },
              {
                uri: "https://www.khanacademy.org/partner-content/pixar/simulation/hair-simulation-101/v/sim4-fix"
              },
              {
                uri: "https://www.khanacademy.org/partner-content/pixar/simulation/hair-simulation-101/v/video5-launch"
              },
              {
                uri: "https://www.khanacademy.org/partner-content/pixar/simulation/hair-simulation-101/v/gtk-launch"
              }
            ]}
          >
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 22,
                backgroundColor: "rgba(255,255,255,0.5)"
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  marginBottom: 6
                }}
              >
                🌐 Hair simulation 101 (7 videos)
              </Text>
              <Text>
                Explore how millions of hairs can be simulated using a mass spring system.
              </Text>
            </View>
          </Draggable>
        </Example>

        <Example title="Multiple Data representations">
          <Draggable
            content={[
              [
                {
                  text: "The Transbay Tube is an underwater rail tunnel which carries Bay Area Rapid Transit's four transbay lines under San Francisco Bay between the cities of San Francisco and Oakland in California. The tube is 3.6 miles (5.8 km) long; including the approaches from the nearest stations (one of which is underground), it totals 6 miles (10 km) in length. It has a maximum depth of 135 feet (41 m) below sea level."
                },
                {
                  uri: "https://en.wikipedia.org/wiki/Transbay_Tube"
                }
              ]
            ]}
          >
            <Text
              style={{
                paddingVertical: 12,
                paddingHorizontal: 22,
                backgroundColor: "rgba(255,255,255,0.5)",
                fontWeight: "600"
              }}
            >
              The Transbay Tube is an underwater rail tunnel which carries Bay Area Rapid Transit's four transbay lines under San Francisco Bay between the cities of San Francisco and Oakland in California. The tube is 3.6 miles (5.8 km) long; including the approaches from the nearest stations (one of which is underground), it totals 6 miles (10 km) in length. It has a maximum depth of 135 feet (41 m) below sea level.
            </Text>
          </Draggable>
        </Example>

        <Example title="Cancelling a touchable when a drag begins">
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
        </Example>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("helloDnD", () => helloDnD);
