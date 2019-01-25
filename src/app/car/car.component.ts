import { Component, Input } from '@angular/core';
import { Car } from '../models/car.model';
import { AppState } from '../@ngrx/app.state';
import { Store } from '@ngrx/store';
import { DeleteCar } from '../@ngrx/cars.action';

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

  }

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car));
  }
}
