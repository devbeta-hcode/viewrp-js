## Installation
```node
  npm install git+https://github.com/haduchau321/ControlMyRPP-Reacjs.git
```

## import
  ```node
  import { ControlMyRPP } from "MyRPP";
```

## require
  ```node
  const {ControlMyRPP} = require('MyRPP');
```

## controlRef
  ```node
  import { useRef } from "react";
  const controlRef = useRef(null);
```

## displayId
  ```node
  import { useRef } from "react";
  const displayId = 0;
  // or
  const displayId = Math.floor(Math.random() * 999999);
  // or
  const displayId = device_id;
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
  <ControlMyRPP
    serve={`https://myrpp.org/api/v1/client/device/connect-control`}
    ref={controlRef} // useRef
    displayId={displayId} // it is similar to key must be unique value, can be 0 if there is only 1
    dataDevice={dataDevice}
    maxWidth={320} // maximum size of width
    showAssistive={true} // show accessibility button
    showDeviceId={true} // display DeviceId
    // syncFun={(data)=>{
    //   console.log(data); // receive event to synchronize operation
    // }}
  />
```
