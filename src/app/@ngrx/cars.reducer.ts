import { CARS_ACTION, AddCar } from './cars.action';

const initialState = {
  cars: [
    {name: 'Ford', model: 'MW1', createdAt: '2018-01-10T14:12', description: 'Good car', isSold: false},
    {name: 'Bentley', model: 'MB2', createdAt: '2018-01-10T17:12', description: 'Not bad car', isSold: true},
    {name: 'Bugatti', model: 'IW4', createdAt: '2018-01-10T19:12', description: 'Fancy car', isSold: false},
  ]
};

export function carsReducer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CARS_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload ]
      };
    default:
      return state;
  }
}
