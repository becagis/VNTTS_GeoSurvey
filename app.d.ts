/// <reference types="nativewind/types" />

declare module '@env' {
  export const REACT_APP_APP_NAME: string;
}

declare module 'webview-state-bridge' {
  export const nativeMiddleware;
  export const webMiddleware;
}

declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
