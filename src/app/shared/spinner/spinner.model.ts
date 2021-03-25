export class SpinnerSettings {
  name?: string;
  bgColor?: string;
  zIndex?: number;
  textColor?: string;
  spinnerColor?: string;
  fullscreen?: boolean;
  type?: string;
  show?: boolean;
}

export const DEFAULTS: SpinnerSettings = {
  name: 'spinner_default ',
  bgColor: '#000',
  spinnerColor: '#FFF',
  zIndex: 2,
  fullscreen: false,
  textColor: '#FFF',
  type: 'spinner',
  show: false,
};
