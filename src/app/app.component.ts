import { Component } from '@angular/core';
import { SpinnerSettings } from './shared/spinner/spinner.model';
import { SpinnerService } from './shared/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spinner';

  spinnerSettings: SpinnerSettings = {
    show: true,
    type: 'slash',
    bgColor: '#cc4444',
  };

  spinnerSettings1: SpinnerSettings = {
    name: 'fan-spinner',
    show: true,
    type: 'sync',
    bgColor: '#cc44FF',
    spinnerColor: '#aaFFEE',
    zIndex: 10,
  };

  constructor(private spinnerService: SpinnerService) {}

  toggleSpinner(settings: SpinnerSettings) {
    if (settings.show) {
      this.spinnerService.hide(settings.name);
    } else {
      this.spinnerService.show(settings.name);
    }

    settings.show = !settings.show;
  }

  toggleFullscreen(settings: SpinnerSettings) {
    this.spinnerSettings = {
      ...this.spinnerSettings,
      ...{
        fullscreen: !this.spinnerSettings.fullscreen,
      },
    };
  }
}
