# Draggable for React Native

Bridges iOS 11's drag and drop features to React native.

For this to work you need to run this code on an iPad running iOS 11.

## Installing

This isn't quite ready for use yet.  You can try it out by cloning the repo, and running the app.  You'll need to be running **Xcode 9** and testing on a device with **iOS 11**.

## `Draggable`

Draggable is a draggable view with good defaults.  If you don't have special needs this is the component you'll want to use to support dragging from your app.

Draggable supports the following props

**`content`** - The data that gets shared by a view when it's dragged from your app

It's one of `uri` or `text`.  For example

```
content={{
    uri: "https://www.khanacademy.org/"
}}
```

```
content={{
    text: "Hello World!"
}}
```

**`onDragBegan` - callback when dragging begins

This callback is called once when the drag begins.  It receives no params and has no return value.

```
onDragBegan={() => {
  // This is a good place to update state of the original view
}}
```

**`onDragEnd` - callback when dragging begins

This callback is called once when the drag ends.  It receives no params and has no return value.

```
onDragEnd={() => {
  // This is a good place to update state of the original view
}}
```

## `DraggableWithoutFeedback`

This component has all of the draggable features but doesn't update the original view's look.  This might be confusing for users of your app so make sure it's what you really want.

The props are the same as `Draggable`

## Examples

Dragging some text:

```javascript
import { Draggable } from "draggable";

<Draggable
    content={{
    text: "This is some text I got from a React Native app"
    }}
>
    <Text>This is some text I got from a React Native app</Text>
</Draggable>
```

Dragging a URL:

```javascript
import { Draggable } from "draggable";

<Draggable
    content={{
        uri: "https://www.khanacademy.org/"
    }}
>
    <Text>Khan Academy</Text>
</Draggable>
```
