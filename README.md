## Supported Components framework
| Framework                  | Compatible with Vite-built components?    | Additional Notes                       |
|---------------------------|--------------------------------------------|----------------------------------------|
| **Vite + React**          | ✅ Native compatibility                     | Already based on Vite                  |
| **Next.js**               | ✅ Fully compatible                         | Import as usual                        |
| **Remix**                 | ✅ Compatible                               | No issues                              |
| **Gatsby**                | ✅ Compatible                               | Use like any React package             |
| **CRA (Create React App)**| ✅ Compatible                               | Import or install as an npm package    |
| **Storybook**             | ✅ Great for UI testing                     | Works well                             |
| **Electron (React UI)**   | ✅ Compatible                               | Used in the renderer process           |
| **React Native**          | ⚠️ Not directly compatible                 | Uses a different rendering system (no DOM) |


## Installation

```node
  npm i github:devbeta-hcode/viewrp-js
  or 
  npm i viewrp-js
```

## import

```node
import { ViewRP } from "viewrp-js/Components";
import { 
  DevApi, 
  appEvent, 
  keyEvent, 
  findElEvent, 
  clipboardEvent 
} from "viewrp-js/DevApi";

```

## require

```node
const { ViewRP } = require("viewrp-js/Components");
const { 
  DevApi, 
  appEvent, 
  keyEvent, 
  findElEvent, 
  clipboardEvent 
} = require("viewrp-js/DevApi");

```

## controlRef

```node
import { useRef } from "react";
const controlRef = useRef(null);
```

## dataDevice

```node
const dataDevice = {
  device_id: "21408686",
  passwd: "12345"
};
```

## `maxWidth` This is the maximum width size when in portrait, with landscape everything will automatically fit

```node
const [maxWidth, setMaxWidth] = useState(333);
```

## use

```node
<ViewRP
  api={"https://viewrp.com/api/v1/client/device/connect-control"}
  ref={controlRef} // useRef
  codec={"avc1.42001E"}
  hardwareAcceleration={"prefer-hardware"}
  dataDevice={dataDevice}
  maxWidth={320} // maximum size of width
  showAssistive={true} // show accessibility button
  showDeviceId={true} // display DeviceId
  // onSyncEvent={(data)=>{
  //   console.log(data); // receive event to synchronize operation
  // }}
  // onSyncButton={(device_id)=>{
  //   console.log(device_id);  event click sync button
  // }}
/>
```

<br>

## Codec

| Codec String         | Meaning (Profile / Level)                           | When to Use                                                  |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| `"avc1.42001E"`      | H.264 **Baseline**, Level 3.0                       | For low-end devices, basic streams, highest compatibility    |
| `"avc1.4D001E"`      | H.264 **Main**, Level 3.0                           | For general-purpose streaming, good browser/device support   |
| `"avc1.64001E"`      | H.264 **High**, Level 3.0                           | Higher quality, commonly used with Android MediaCodec        |

<br>

## hardwareAcceleration
| Value                 | Meaning                                                                | When to Use                                        |
| --------------------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| `"no-preference"`     | Let the browser decide automatically                                   | Default if you don’t set anything                  |
| `"prefer-hardware"` ✅ | Prefer hardware acceleration (GPU/SoC), fallback to software if needed | **Best for low latency**, and avoids crashes       |
| `"prefer-software"`   | Prefer software decoding, use hardware only if necessary               | Rarely used, only when hardware decoding has bugs  |
| `"require-hardware"`  | Must use hardware acceleration, will fail if not available             | For systems you fully control, e.g., media centers |
| `"require-software"`  | Must use software decoding, will fail if not available                 | For debugging, benchmarking software quality       |


<br>

## Use the synchronization feature `syncEvent and syncButton`

- pay attention to 2 events in Components `syncEvent` and `syncButton`

- for example create 1 useState to specify which controlRef is the main
```node
const [defaultDeviceId, setDefaultDeviceId] = useState(null);
```

- onSyncButton when we press the `sync` button in the accessibility menu like `iphone` this event will receive the `device_id` we want to set as `defaultControlRef`
```node
onSyncButton={(device_id)=>{
  setDefaultDeviceId(device_id); // set this device_id to which controlRef is the main
}}
```

- for example we have a list of `controlRef`
```node
const ListControlRef = [controlRef_1, controlRef_2, controlRef_3]; // .... 4,5,6 ....
```

- onSyncEvent this is the event of operations such as shortcuts, touch gestures, keyboard
```node
onSyncEvent={dataDevice.device_id===defaultDeviceId ? (data)=>{
  ListControlRef.map((item)=>{
    if(item.current.getDeviceId() != defaultDeviceId){ // ignore your own controlRef
      item.current.sync(data);
    }
  }: null)
}}
```

## use with api for automation

- `DevApi` to `format` the type of data sent

- use `controlRef` to connect api in Components ViewRP
```node
// send api request, put in async/await if you want to get a response
// get_data is the content returned from DevApi
const resp = await controlRef.current.api(get_data);
console.log(resp)
```

- for example `toast` displays a message on the screen
```node
const text = "abc"; // this is the content sent to display
const get_data = DevApi.toast(text); // return data json

// send api request, put in async/await if you want to get a response
const resp = await controlRef.current.api(get_data);
console.log(resp)

// more concise
const resp = await controlRef.current.api(DevApi.toast("hello"));
console.log(resp)
```

- unlock Screen
```node
const get_data = DevApi.unlockScreen();
```

- clipboard `get | set` use `clipboardEvent` to set the type of `keyName`
```node
// get
const get_data = DevApi.clipboard(clipboardEvent.get);

// set
const text = "abc 123"; // this is the content sent to the clipboard
const get_data = DevApi.clipboard(clipboardEvent.set, text);
```

- app `start | stop | clear` use `appEvent` to set `command` type
```node
const get_data = DevApi.app(appEvent.start);
```

- click `x,y`
```node
const x = 500; // x coordinate on phone screen
const y = 500; // y coordinate on phone screen
const duration = 1; // time to press button in seconds
const get_data = DevApi.click(x, y, duration);
```

- keyboard use `keyEvent` to set `typeKey` type (must use ViewRP to use this function)
```node

// typeKey text key type `str`
const key = "a";
const get_data = DevApi.keyboard(keyEvent.text, key);

// typeKey code type `int`
const key = 29;
const get_data = DevApi.keyboard(keyEvent.code, key);

// for keystrokes we use `meta_state`
// for example ctrl+a
const key = 29;
const meta_state = 4096;
const get_data = DevApi.keyboard(keyEvent.code, key, meta_state);

```

- swipe
```node
const start_x = 500; // starting x coordinate on phone screen
const start_y = 200; // starting y coordinate on phone screen
const end_x = 500; // starting x coordinate on phone screen
const end_y = 300; // starting y coordinate on phone screen
const duration = 1; // swipe time in seconds
const get_data = DevApi.swipe(x, y, duration);
```

- setText
```node
const text = "abc"; // this is the content sent to write to the input
const get_data = DevApi.setText(text);
```

- findElements `all | click | setText` use `findElEvent` to set the type `keyName`
```node
const value = "chrome"; // this is the value sent to query
const el = DevApi.findElements(findElEvent.text, value);

// keyName = className
const value = "android.widget.EditText";
const el = DevApi.findElements(findElEvent.className, value);

// keyName = resourceId
const value = "com.google.android.youtube:id/bnt_save";
const el = DevApi.findElements(findElEvent.resourceId, value); 

// keyName = xpath 
const value = "//*[@resource-id='com.google.android.youtube:id/related_chip_cloud']/android.widget.LinearLayout[2]"; 
const el = DevApi.findElements(findElEvent.xpath, value); 

// get all response list `[]` 
const get_data = el.all() 

// click 
const get_data = el.click() 

// setText 
const text = "abc"; // this is the content sent to be written to the input 
const get_data = el.setText(text)
```