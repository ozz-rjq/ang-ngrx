import { Store } from '@ngrx/store';
import { AppState } from '../@ngrx/app.state';

import { Component } from '@angular/core';
import { Car } from '../models/car.model';
import { AddCar } from '../@ngrx/cars.action';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})

export class CarFormComponent {
  carBrend: string;
  carModel: string;

  constructor(private store: Store<AppState>) {}

  onAdd() {
    if (!this.carBrend || !this.carModel) {
      alert('You haven\'t entered one of the required fields');
      return;
    }

    const car: Car = {
      name: this.carBrend,
      model: this.carModel,
      description: 'This is a test car',
      createdAt: new Date().toISOString(),
      isSold: false
    };

    this.store.dispatch(new AddCar(car));

    this.carBrend = '';
    this.carModel = '';
  }

  onLoad() {

  }
}
