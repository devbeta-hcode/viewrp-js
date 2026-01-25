import { FC, Ref, CSSProperties } from "react";

export interface DataDevice {
  device_id: string;
  passwd: string;
}

export interface ViewRPProps {
  ref?: Ref<any>;
  maxWidth?: number;
  api: string;
  codec: "avc1.42001E" | "avc1.4D001E" | "avc1.64001E";
  hardwareAcceleration: "no-preference" | "prefer-hardware" | "prefer-software";
  dataDevice: DataDevice;
  showAssistive?: boolean;
  showDeviceId?: boolean;
  style?: CSSProperties,
  autoResize: boolean,
  onSyncEvent?: (data: any) => void;
  onSyncButton?: (deviceId: string) => void;
  evtIsConnect: (is_connect: boolean) => void;
}


declare const ViewRP: FC<ViewRPProps>;

export default ViewRP;
