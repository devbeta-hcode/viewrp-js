export interface FindElementPayload {
  action: string;
  keyName: string;
  value: string;
  index?: number;
  text?: string;
  [key: string]: any;
}

export default class findElement {
  data: {
    keyName: string;
    value: string;
    action?: string;
    index?: number;
    text?: string;
    [key: string]: any;
  };

  sendData: (data: any) => any;

  constructor(
    keyName: string,
    value: string,
    sendData: (data: any) => any
  );

  all(): FindElementPayload;

  click(index?: number): FindElementPayload;

  setText(index: number, text: string): FindElementPayload;
}

export interface DevApiPayload {
  action?: string;
  [key: string]: any;
}

export declare class DevApi {
  static sendData(data: Record<string, any>): DevApiPayload;

  static toast(text: string): DevApiPayload;

  static clipboard(keyName: string, text?: string): DevApiPayload;

  static unlockScreen(): DevApiPayload;

  static findElements(
    keyName: string,
    value: string
  ): findElement;

  static app(
    command: string,
    packageName: string
  ): DevApiPayload;

  static keyboard(
    typeKey: string,
    key: number,
    meta_state?: number,
    repeat?: number
  ): DevApiPayload;

  static click(x: number, y: number, duration: number): DevApiPayload;

  static swipe(
    start_x: number,
    start_y: number,
    end_x: number,
    end_y: number,
    duration: number
  ): DevApiPayload;

  static setText(text: string): DevApiPayload;
}

export class appEvent {
    static start: string;
    static stop: string;
    static clear: string;
}
export class keyEvent {
    static text: string;
    static code: string;
}
export class findElEvent {
    static text: string;
    static className: string;
    static resourceId: string;
    static xpath: string;
}
export class clipboardEvent {
    static get: string;
    static set: string;
}

