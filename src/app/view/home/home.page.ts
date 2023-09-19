import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/entities/car';
import { CarService } from 'src/app/model/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listOfCars : Car[] = [];

  constructor(private carService : CarService, private router: Router) {
    this.listOfCars = this.carService.getAll();
  }

  goToEdit(index : number){
    this.router.navigate(['/details', index]);
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

}
