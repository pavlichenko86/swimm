import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    carName = '';
    addCarStatus = false;
    cars = ['BMW', 'Ford', 'Audi', 'Bently', 'Porshe', 'Toyota'];
    items = [
      new Date(2018, 3, 3),
      new Date(2015, 2, 7),
      new Date(2011, 11, 10),
      new Date(2000, 4, 3)
];

    constructor () {
    }

    addCar () {
        this.addCarStatus = true;
        this.cars.push(this.carName);
        this.carName = '';
    }

}
