import { Component, Input } from '@angular/core';
import { AppState } from '../@ngrx/app.state';
import { Store } from '@ngrx/store';

import { DeleteCar, UpdateCar } from '../@ngrx/cars.action';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent {
  @Input()
    car: Car;

  constructor(private store: Store<AppState>) {}

  onBuy() {
    this.store.dispatch(new UpdateCar(this.car));
  }

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car));
  }
}
