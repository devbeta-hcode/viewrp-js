## Supported framework (runs best on React)
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
  npm install github:haduchau321/ViewRP-Vite
```

## import

```node
import { ViewRP } from "ViewRP";
```

## require

```node
const { ViewRP } = require("ViewRP");
```

## controlRef

```node
import { useRef } from "react";
const controlRef = useRef(null);
```

## dataDevice

```node
const dataDevice = {
  device_id: 21408686,
  passwd: 12345
};
```

## use

```node
<ViewRP
  serve={`https://viewrp.com/api/v1/client/device/connect-control`}
  ref={controlRef} // useRef
  dataDevice={dataDevice}
  maxWidth={320} // maximum size of width
  showAssistive={true} // show accessibility button
  showDeviceId={true} // display DeviceId
  // syncEvent={(data)=>{
  //   console.log(data); // receive event to synchronize operation
  // }}
  // syncButton={(device_id)=>{
  //   console.log(device_id);  event click sync button
  // }}
/>
```
