import { Action } from '@ngrx/store';

const initialState = {
  cars: [
    {name: 'Ford', model: 'MW1', createdAt: '2018-01-10T14:12', description: 'Good car', isSold: false},
    {name: 'Bentley', model: 'MB2', createdAt: '2018-01-10T17:12', description: 'Not bad car', isSold: true},
    {name: 'Bugatti', model: 'IW4', createdAt: '2018-01-10T19:12', description: 'Fancy car', isSold: false},
  ]
};

export function carsReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
