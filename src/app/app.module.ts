import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMatModule } from './ng-mat.module';
import { CarComponent } from './car/car.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarFormComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
