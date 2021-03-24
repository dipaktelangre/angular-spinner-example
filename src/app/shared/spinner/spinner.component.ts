import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  DEFAULTS,
  DEFAULT_SPINNER_NAME,
  SpinnerSettings,
} from './spinner.model';

import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnChanges {
  @Input() settings: SpinnerSettings;

  options: SpinnerSettings;

  constructor(private spinnerService: SpinnerService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.settings) {
      if (changes.settings.isFirstChange()) {
        this.options = {
          ...DEFAULTS,
          ...changes.settings.currentValue,
        };
      } else {
        this.options = {
          ...this.options,
          ...changes.settings.currentValue,
        };
      }
    }
    console.log(changes);
  }

  ngOnInit() {
    this.spinnerService.getSpinner(this.options.name).subscribe((state) => {
      this.options = {
        ...this.options,
        show: state.show,
      };
    });
  }
}
