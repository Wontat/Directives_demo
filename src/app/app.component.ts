import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  appName = 'This is a One-way Data binding example..';
  clientName: string = 'Enter your name here';

  appliedCSSClass = 'yellow';
  notappliedCSSClass = true;
  myColor = 'green';

  //Event binding

  message = '';

  onButtonClick() {
    this.message = 'It was clicked!';
  }

  //Event as an alert()
  showAlert() {
    alert('It was clicked!');
  }

  // for two-way data binding demo
  myName = 'Andrei C. Bagang';

  //ngIf Demo
  showElement = true;

  //ngFor Demo
  items = [
    'Mendo Breathe',
    'Northern Lights',
    'Grandaddy Purple',
    'Super Silver Haze',
    'White Apple Tartz',
  ];

  //ngSwitch
  selectedOption = 3;

  //ngStyle
  color = 'violet';

  //ngClass
  isBold = true;
  isItalic = true;

  //ngModel
  name = '';
}
