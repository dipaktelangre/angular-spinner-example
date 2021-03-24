export class SpinnerSettings {
  bgColor?: string;
  zIndex?: number;
  textColor?: string;
  spinnerColor?: string;
  fullscreen?: boolean;
}

export const DEFAULTS: SpinnerSettings = {
  bgColor: '#000',
  spinnerColor: '#fff',
  zIndex: 2,
  fullscreen: false,
  textColor: '#fff',
};
