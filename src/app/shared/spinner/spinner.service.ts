import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { DEFAULTS } from './spinner.model';

export class SpinnerState {
  name: string;
  show: boolean;
}

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  private spinner$ = new BehaviorSubject<SpinnerState>(null);
  constructor() {}

  getSpinner(name: string = DEFAULTS.name): Observable<SpinnerState> {
    return this.spinner$
      .asObservable()
      .pipe(filter((f: SpinnerState) => f && f.name === name));
  }

  show(name: string = DEFAULTS.name): void {
    this.spinner$.next({
      name: name,
      show: true,
    });
  }

  hide(name: string = DEFAULTS.name): void {
    this.spinner$.next({
      name: name,
      show: false,
    });
  }
}
