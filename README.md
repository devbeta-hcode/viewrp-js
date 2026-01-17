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
import { ViewRP } from "viewrp-js";

```

## require

```node
const { ViewRP } = require("viewrp-js");

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

```javascript
declare interface ElementWrapper {
  click({index, retry_time, timeout}:{index?:number, retry_time?:number, timeout?:number}): Promise<void>;
  setText({text, index, retry_time, timeout}:{text:string,index?:number, retry_time?:number, timeout?:number}): Promise<void>;
  all({retry_time, timeout}:{retry_time?:number, timeout?:number}): Promise<any[]>;
}
declare interface DeviceController {
  jsloop(iterations: number, callback: (index: number) => Promise<void>): Promise<void>;
  pause(is_pause: boolean): void;
  deviceId(): string;
  resolution(): { width: number, height: number, orientation: number };
  screenshot(): string;
  sleep(timeout?: number): Promise<any>;
  toast(text: string, timeout?: number): Promise<any>;
  unlockScreen(timeout?: number): Promise<any>;
  pressHome(timeout?: number): Promise<any>;
  pressBack(timeout?: number): Promise<any>;
  pressSwitch(timeout?: number): Promise<any>;
  getClipboard(timeout?: number): Promise<string>;
  setClipboard(text: string, timeout?: number): Promise<any>;
  appStart(packageName: string, timeout?: number): Promise<any>;
  appStop(packageName: string, timeout?: number): Promise<any>;
  appClear(packageName: string, timeout?: number): Promise<any>;
  appInfo(packageName: string, timeout?: number): Promise<any>;
  click(x: number, y: number, duration?: number, timeout?: number): Promise<any>;
  swipe(start_x: number, start_y: number, end_x: number, end_y: number, duration: number, timeout?: number): Promise<any>;
  keyCode(key: number, meta_state?: number, repeat?: boolean, timeout?: number): Promise<any>;
  keyText(text: string, timeout?: number): Promise<any>;
  setText(text: string, timeout?: number): Promise<any>;
  findElements(strategy: 'resourceId' | 'text' | 'xpath' | 'className', value: string): ElementWrapper;
}

```

### **System & Hardware Actions**
* **`unlockScreen(timeout?)`**: Wakes up the device and unlocks the lock screen.
* **`pressHome(timeout?)`**: Simulates pressing the physical **Home** button.
* **`pressBack(timeout?)`**: Simulates pressing the **Back** button.
* **`pressSwitch(timeout?)`**: Opens the **Recent Apps** / App Switcher screen.
* **`keyCode(key, ...)`**: Sends a specific Android KeyCode (e.g., `66` for Enter, `24` for Volume Up).
* **`keyText(text)`**: Sends raw keyboard input text.
* **`setText(text)`**: Sets text directly (usually used for focused fields).
* **`toast(text)`**: Displays a small popup message on the device screen.
* **`setClipboard(text)` / `getClipboard()`**: Writes to or reads from the device's system clipboard.

### **Screen & Touch Gestures**
* **`click(x, y, duration?, timeout?)`**: Taps the screen at specific coordinates `(x, y)`.
* **`swipe(start_x, start_y, end_x, end_y, duration)`**: Performs a swipe gesture from start to end points.
* **`resolution()`**: Returns the device's width, height, and orientation.
* **`screenshot()`**: Returns the current screen capture as a string.

### **App Management**
* **`appStart(packageName)`**: Launches an application (e.g., `com.android.chrome`).
* **`appStop(packageName)`**: Force-stops a running application (Requires root or system privileges).
* **`appClear(packageName)`**: Clears all data and cache for the specified app (Requires root or system privileges).
* **`appInfo(packageName)`**: Retrieves version and package details.

### **Data & Utilities**
* **`jsloop(iterations, callback)`**: A high-performance loop optimized for ViewRP infrastructure.
* **`pause(is_pause)`**: Pauses or resumes the execution of the script.
* **`sleep(timeout?)`**: Pauses the script for a duration (milliseconds).
* **`deviceId()`**: Returns the unique ID of the current device.

---

## 2. ElementWrapper Interface
Instead of using raw coordinates, `ElementWrapper` allows you to interact with UI components (buttons, text fields) intelligently.

### **Finding Elements**
Use `device.findElements(strategy, value)` to target elements.

| Strategy | Description | Example Value |
| :--- | :--- | :--- |
| `resourceId` | The unique ID in the app's code. | `com.android.settings:id/title` |
| `text` | The literal text displayed on screen. | `Login` |
| `className` | The Android View class type. | `android.widget.Button` |
| `xpath` | A XML-like path to the element. | `//android.widget.LinearLayout[1]` |

### **Available Actions**
* **`click({index, retry_time, timeout})`**: Clicks the found element. Use `index` if multiple elements are found (starts at `0`).
* **`setText({text, index, ...})`**: Inputs text into a text field.
* **`all({retry_time, timeout})`**: Returns an array of all elements matching the criteria.

---

## 3. Practical Example
Here is a simple script to open a browser and search for a website:

```javascript
async function searchTask() {
    // 1. Open Chrome
    await device.appStart("com.android.chrome");
    await device.sleep(2000);

    // 2. Find the search bar using its Class Name
    const inputs = device.findElements('className', 'android.widget.EditText');
    
    // 3. Type "ViewRP" into the first input field found
    await inputs.setText({ text: "ViewRP", index: 0 });

    // 4. Press Enter Key
    await device.keyCode(66);
    
    // 5. Notify the user via a Toast
    await device.toast("Search Command Sent!");
}

```
