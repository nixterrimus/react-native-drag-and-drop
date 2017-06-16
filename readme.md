# RN Drag and drop sample

This bridges a view with drag and drop to RN.

For this to work you need to run this code on an iPad running iOS 11.

## Installing

This isn't quite ready for use yet.  You can try it out by cloning the repo, and running the app.  You'll need to be running **Xcode 9** and testing on a device with **iOS 11**.

## `Draggable` Props

### `content` - The data that gets shared by a view when it's dragged from your app

It's one of `uri` or `text`.

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
