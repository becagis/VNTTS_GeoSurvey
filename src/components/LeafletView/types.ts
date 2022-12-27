import React from 'react'
import { NativeSyntheticEvent } from 'react-native'
import { WebViewError } from 'react-native-webview/lib/WebViewTypes'

export type ILeafletViewProps = {
  renderLoading?: () => React.ReactElement;
  onError?: (syntheticEvent: NativeSyntheticEvent<WebViewError>) => void;
  onLoadEnd?: () => void;
  onLoadStart?: () => void;
  onMessageReceived?: (message: WebviewLeafletMessage) => void;
  // mapLayers?: MapLayer[];
  // mapMarkers?: MapMarker[];
  // mapShapes?: MapShape[];
  // mapCenterPosition?: LatLng;
  // ownPositionMarker?: OwnPositionMarker;
  // zoom?: number;
  debug?: boolean;
  children?: React.ReactNode;
  androidHardwareAccelerationDisabled?: boolean;
};

export interface WebviewLeafletMessagePayload {
  // bounds?: LatLngBounds;
  // mapCenterPosition: LatLng;
  // mapMarkerID?: string;
  // touchLatLng?: LatLng;
  zoom?: number;
}

export interface WebviewLeafletMessage {
  event?: any;
  msg?: string;
  error?: string;
  payload?: WebviewLeafletMessagePayload;
}
