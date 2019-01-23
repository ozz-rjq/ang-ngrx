import { Car } from '../models/car.model';

export interface AppState {
  carsStore: {
    cars: Car[]
  };
}
