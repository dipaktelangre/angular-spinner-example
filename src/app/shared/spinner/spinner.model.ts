export const DEFAULT_SPINNER_NAME = 'primary_spinner';

export class SpinnerSettings {
  name: string;
  bgColor?: string;
  zIndex?: number;
  textColor?: string;
  spinnerColor?: string;
  fullscreen?: boolean;
  type?: string;
  show?: boolean;
}

export const DEFAULTS: SpinnerSettings = {
  name: DEFAULT_SPINNER_NAME,
  bgColor: '#000',
  spinnerColor: '#fff',
  zIndex: 2,
  fullscreen: false,
  textColor: '#fff',
  type: 'spinner',
  show: false,
};
