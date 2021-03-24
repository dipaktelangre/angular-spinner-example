import { Component } from '@angular/core';
import { SpinnerSettings } from './shared/spinner/spinner.model';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spinner';
  countries = COUNTRIES;

  spinnerEnabled;
  spinnerSetting: SpinnerSettings = {
    fullscreen: false,
  };

  spinnerEnabled1;
  spinnerSetting1: SpinnerSettings = {
    type: 'slash',
  };

  spinnerEnabled2;
  spinnerSetting2: SpinnerSettings = {
    type: 'fan',
    bgColor: '#445500',
    spinnerColor: '#ff4433',
  };

  toggleFullscreen() {
    let fullscreen = this.spinnerSetting.fullscreen;
    this.spinnerSetting = {
      ...this.spinnerSetting,
      fullscreen: !fullscreen,
    };
  }
}
