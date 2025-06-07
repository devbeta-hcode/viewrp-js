## Installation

```node
  npm install github:haduchau321/ViewRP-reacjs
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
  serve={`https://myrpp.org/api/v1/client/device/connect-control`}
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
