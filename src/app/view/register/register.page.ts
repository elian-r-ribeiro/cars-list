import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/entities/car';
import { CarService } from 'src/app/model/services/car.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  brand! : string;
  model! : string;
  
  constructor(private carService : CarService, private router : Router) { }

  ngOnInit() {
  }

  register(){
    let newCar : Car = new Car(this.brand, this.model);
    this.carService.register(newCar);
    this.router.navigate(['/home']);
  }
}
