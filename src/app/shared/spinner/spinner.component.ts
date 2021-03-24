import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DEFAULTS, SpinnerSettings } from './spinner.model';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnChanges {
  @Input() settings: SpinnerSettings;
  @Input() show: boolean = true;

  options: SpinnerSettings = {
    bgColor: DEFAULTS.bgColor,
    spinnerColor: DEFAULTS.spinnerColor,
    textColor: DEFAULTS.textColor,
    zIndex: DEFAULTS.zIndex,
    fullscreen: DEFAULTS.fullscreen,
    type: DEFAULTS.type,
  };

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.settings && changes.settings.currentValue) {
      this.options = {
        ...this.options,
        ...changes.settings.currentValue,
      };
    }
    console.log(changes);
  }

  ngOnInit() {}
}
