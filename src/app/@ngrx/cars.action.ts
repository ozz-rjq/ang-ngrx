import { Action } from '@ngrx/store';
import { Car } from '../models/car.model';

export namespace CARS_ACTION {
  export const ADD_CAR = 'ADD_CAR';
}

export class AddCar implements Action {
  readonly type = CARS_ACTION.ADD_CAR;

  constructor(public payload: Car) {}
}
