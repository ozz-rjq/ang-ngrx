import { Component } from '@angular/core';

import * as moment from 'moment';

import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent {
  cars: Car[] = [];

  constructor() {}
}
