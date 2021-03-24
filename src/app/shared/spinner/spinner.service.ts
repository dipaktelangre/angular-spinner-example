import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { filter } from 'rxjs/operators';

import {
  SpinnerSettings,
  DEFAULTS,
  DEFAULT_SPINNER_NAME,
} from './spinner.model';

class SpinnerState {
  name: string;
  show: boolean;
}

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  private spinner$ = new BehaviorSubject<SpinnerState>(null);
  constructor() {}

  getSpinner(name: string = DEFAULT_SPINNER_NAME): Observable<SpinnerState> {
    return this.spinner$
      .asObservable()
      .pipe(filter((x: SpinnerState) => x && x.name === name));
  }

  show(name: string = DEFAULT_SPINNER_NAME): void {
    this.spinner$.next({ name, show: true });
  }

  hide(name: string = DEFAULT_SPINNER_NAME): void {
    this.spinner$.next({ name, show: false });
  }
}
