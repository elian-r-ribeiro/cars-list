import { Injectable } from '@angular/core';
import { Car } from '../entities/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  brand! : string;
  model! : string;
  listOfCars : Car[] = [];

  constructor() {
    let c1 : Car = new Car('Lamborghini', 'Huracan');
    this.listOfCars.push(c1);
  }

  getAll(){
    return this.listOfCars;
  }

  getByIndex(index : number){
    return this.listOfCars[index];
  }

  register(car : Car){
    this.listOfCars.push(car);
  }

  saveEdit(index : number, newCar : Car){
    this.listOfCars[index] = newCar;
  }

  deleteCar(index : number){
    this.listOfCars.splice(index);
  }
}
