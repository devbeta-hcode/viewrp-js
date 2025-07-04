'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}

let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = { randomUUID };

function v4(options, buf, offset) {
    if (native.randomUUID && true && !options) {
        return native.randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    return unsafeStringify(rnds);
}

class findElement{
    constructor(keyName, value, sendData){
        this.data = {"keyName": keyName, "value": value};
        this.sendData = sendData;
    }

    all(){
        this.data["action"] = "findElements";
        return this.sendData(this.data);
    }

    click(index=0){
        this.data["action"] = "clickElement";
        this.data["index"] = index;
        return this.sendData(this.data);
    }

    setText(index=0, text){
        this.data["action"] = "setTextElement";
        this.data["index"] = index;
        this.data["text"] = text;
        return this.sendData(this.data);
    }
}

//  các key cho sự kiện app
class appEvent {
  static start = "start";
  static stop = "stop";
  static clear = "clear";
}

//  các key cho sự kiện keyboard
class keyEvent {
  static text = "KEYBOARD_TEXT";
  static code = "KEYBOARD_CODE";
}

//  các key cho sự kiện findElements
class findElEvent {
  static text = "text";
  static className = "className";
  static resourceId = "resourceId";
  static xpath = "xpath";
}

//  các key cho sự kiện clipboard
class clipboardEvent {
  static get = "get";
  static set = "set";
}

class DevApi {
  static sendData(data) {
    data["taskId"] = v4();
    return data;
  }

  static toast(text) {
    return this.sendData({ "action": "toastEvent", text: text });
  }

  static clipboard(keyName, text="") {
    return this.sendData({ 
      "action": "clipboard", 
      "keyName":keyName, 
      text: text 
    });
  }

  static unlockScreen(){
    return this.sendData({ "action": "onScreenEvent"});
  }

  static findElements(keyName, value){
    return new findElement(keyName, value, this.sendData)
  }

  static app(command, packageName){
    return this.sendData({ 
      "action": "appEvent", 
      "command": command,
      "packageName": packageName,

    });
  }

  static keyboard(typeKey, key, meta_state=0, repeat=0){
    return this.sendData({
      "action":"keyEvent", 
      "keyAction":"ACTION_DOWN", 
      "typeKey": typeKey,
      "key": key,
      "repeat":repeat,
      "meta_state":meta_state
    });
  }

  static click(x, y, duration){
    return this.sendData({ 
      "action": "clickEvent", 
      "x": x, 
      "y": y, 
      "duration": duration
    });
  }

  static swipe(start_x, start_y, end_x, end_y, duration){
    return this.sendData({ 
      "action": "swipeEvent", 
      "start_x": start_x, 
      "start_y": start_y, 
      "end_x": end_x, 
      "end_y": end_y, 
      "duration": duration 
    });
  }

  static setText(text){
    return this.sendData({ 
      "action": "setTextEvent", 
      "text": text,
    });
  }

}

exports.DevApi = DevApi;
exports.appEvent = appEvent;
exports.clipboardEvent = clipboardEvent;
exports.findElEvent = findElEvent;
exports.keyEvent = keyEvent;
