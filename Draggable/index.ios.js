// @flow
import React, { Component, PropTypes } from "react";
import { requireNativeComponent } from "react-native";

NativeDraggableItem = requireNativeComponent("NSRDraggableView", null);

/*
Returns:

An array of arrays representing:

[
  //Item to drag,
  //Item to drag,
  //Item to drag [
    // Data Representation
    // Data Representation
  ]
]
*/
function mapInputContentToNativeContent(content) {
  let contentItems;
  if (Array.isArray(content)) {
    contentItems = content;
  } else {
    contentItems = [content];
  }

  return contentItems.map(data => {
    if (Array.isArray(data)) {
      return data
    }
    return [data];
  });
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
