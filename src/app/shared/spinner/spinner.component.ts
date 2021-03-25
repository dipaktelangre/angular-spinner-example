import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  DEFAULTS,
  DEFAULT_SPINNER_NAME,
  SpinnerSettings,
  SpinnerSize,
  SpinnerStyle,
} from './spinner.model';

import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() settings: SpinnerSettings;

  options: SpinnerSettings;
  ngUnsubscribe: Subject<void> = new Subject();

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
    this.spinnerService
      .getSpinner(this.options.name)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((state) => {
        this.options = {
          ...this.options,
          show: state.show,
        };
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getIconClass(style: SpinnerStyle, icon: string, size: SpinnerSize): string {
    if (icon) {
      return `fa${SpinnerStyle[style]} fa-${icon} fa-${SpinnerSize[size]} fa-spin`;
    }
  }
}
