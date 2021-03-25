import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpinnerComponent } from './spinner.component';

@NgModule({
  imports: [BrowserModule],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [],
})
export class SpinnerModule {}
