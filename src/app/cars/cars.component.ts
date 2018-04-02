import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    carName = '';
    carYear = 2018;

    cars: [{name: string, year: number}] = [{
      name: 'Volvo',
      year: 2018
    },
    {
      name: 'BMW',
      year: 2010
    },
    {
      name: 'Audi',
      year: 2005
    },
    {
      name: 'Mazda',
      year: 2018
    }];

    addCar() {
      this.cars.push({
        name: this.carName,
        year: this.carYear
      });
      this.carName = '';
      this.carYear = 2018;
    }
}
