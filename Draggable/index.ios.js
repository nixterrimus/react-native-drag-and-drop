// @flow
import React, { Component, PropTypes } from "react";
import { requireNativeComponent } from "react-native";

NativeDraggableItem = requireNativeComponent("NSRDraggableView", null);

function mapInputContentToNativeContent(content) {
  if (Array.isArray(content)) {
    return content;
  }
  return [content];
}

export const DraggableWithoutFeedback = props => {
  const propsForNativeView = {
    ...props,
    content: mapInputContentToNativeContent(props.content)
  };
  
  return <NativeDraggableItem {...propsForNativeView} />;
};

type DraggableContent =
  | {
      uri: string
    }
  | {
      text: string
    };

type DraggableProps = {
  content: DraggableContent,
  onDragBegan: () => void,
  onDragEnd: () => void
};
export class Draggable extends Component {
  props: DraggableProps;

  constructor(props: DraggableProps) {
    super(props);
    this.state = {
      dragging: false
    };
  }

  render() {
    return (
      <DraggableWithoutFeedback
        {...this.props}
        onDragBegan={() => {
          this.setState({ dragging: true });
          this.props.onDragBegan && this.props.onDragBegan();
        }}
        onDragEnd={() => {
          this.setState({ dragging: false });
          this.props.onDragEnd && this.props.onDragEnd();
        }}
        style={{
          opacity: this.state.dragging ? 0.5 : 1.0
        }}
      >
        {this.props.children}
      </DraggableWithoutFeedback>
    );
  }
}
