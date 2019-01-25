import { CARS_ACTION, CarsActions } from './cars.action';

const initialState = {
  cars: [
    {id: 1, name: 'Ford', model: 'MW1', createdAt: '2018-01-10T14:12', description: 'Good car', isSold: false},
    {id: 2, name: 'Bentley', model: 'MB2', createdAt: '2018-01-10T17:12', description: 'Not bad car', isSold: true},
    {id: 3, name: 'Bugatti', model: 'IW4', createdAt: '2018-01-10T19:12', description: 'Fancy car', isSold: false},
  ]
};

export function carsReducer(state = initialState, action: CarsActions) {
  switch (action.type) {
    case CARS_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload ]
      };
    case CARS_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(car => car.id !== action.payload.id)]
      };
    default:
      return state;
  }
}
