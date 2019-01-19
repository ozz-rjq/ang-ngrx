import { Component } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent {
  cars = [
    {name: 'Ford', updated: '2018-01-10T14:12'},
    {name: 'Bentley', updated: '2018-01-10T17:12'},
    {name: 'Bugatti', updated: '2018-01-10T19:12'},
  ];

  constructor() {}
}
