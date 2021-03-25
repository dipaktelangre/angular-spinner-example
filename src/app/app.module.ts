import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerModule } from './shared/spinner/spinner.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbAlertModule, SpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
