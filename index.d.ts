import { FC, Ref } from "react";

export interface DataDevice {
  device_id: string;
  passwd: string;
}

export interface ViewRPProps {
  ref?: Ref<any>;
  maxWidth?: number;
  api: string;
  codec?: "avc1.42001E" | "avc1.4D001E" | "avc1.64001E";
  hardwareAcceleration?: "no-preference" | "prefer-hardware" | "prefer-software" | "require-hardware" | "require-software" null;
  dataDevice: DataDevice;
  showAssistive?: boolean;
  showDeviceId?: boolean;
  onSyncEvent?: (data: any) => void;
  onSyncButton?: (deviceId: string) => void;
}


declare const ViewRP: FC<ViewRPProps>;

export default ViewRP;
