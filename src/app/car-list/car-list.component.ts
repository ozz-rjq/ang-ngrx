import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { Car, Cars } from '../models/car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../@ngrx/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent implements OnInit {
  cars: Car[] = [];

  carsState: Observable<Cars>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.carsState = this.store.select('carsStore');
  }
}
