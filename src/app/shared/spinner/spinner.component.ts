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
import { DEFAULTS, SpinnerSettings } from './spinner.model';

import { SpinnerService, SpinnerState } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() settings: SpinnerSettings;
  options: SpinnerSettings;

  ngUnscribe: Subject<void> = new Subject();

  constructor(private spinnerService: SpinnerService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.settings) {
      if (changes.settings.isFirstChange()) {
        this.options = {
          ...DEFAULTS,
          ...changes.settings.currentValue,
        };
        console.log(changes.settings.currentValue);
      } else {
        this.options = {
          ...this.options,
          ...changes.settings.currentValue,
        };
        console.log(this.options);
      }
    }
  }

  ngOnInit() {
    this.spinnerService
      .getSpinner(this.options.name)
      .pipe(takeUntil(this.ngUnscribe))
      .subscribe((state: SpinnerState) => {
        this.options = {
          ...this.options,
          show: state.show,
        };
      });
  }

  ngOnDestroy(): void {
    this.ngUnscribe.next();
    this.ngUnscribe.complete();
  }
}
