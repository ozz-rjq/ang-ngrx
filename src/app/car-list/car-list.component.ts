import { Component } from '@angular/core';

import * as moment from 'moment';

import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent {
  cars: Car[] = [
    {name: 'Ford', model: 'MW1', createdAt: '2018-01-10T14:12', description: 'Good car', isSold: false},
    {name: 'Bentley', model: 'MB2', createdAt: '2018-01-10T17:12', description: 'Not bad car', isSold: true},
    {name: 'Bugatti', model: 'IW4', createdAt: '2018-01-10T19:12', description: 'Fancy car', isSold: false},
  ];

  constructor() {}
}
