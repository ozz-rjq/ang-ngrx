import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { NgMatModule } from './ng-mat.module';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarListComponent } from './car-list/car-list.component';
import { carsReducer } from './@ngrx/cars.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarFormComponent,
    CarListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMatModule,
    StoreModule.forRoot({carsStore: carsReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
