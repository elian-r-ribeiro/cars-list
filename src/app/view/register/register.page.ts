import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/entities/car';
import { CarService } from 'src/app/model/services/car.service';
import { UtilsService } from 'src/app/model/services/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  brand! : string;
  model! : string;
  
  constructor(private utilsService : UtilsService, private carService : CarService, private router : Router) { }

  ngOnInit() {
  }

  register(){
    if(this.brand){
      if(this.brand.length >= 3){
        if(this.model){
          if(this.model.length >= 2){
            let newCar : Car = new Car(this.brand, this.model);
            this.carService.register(newCar);
            this.router.navigate(['/home']);
          }else{
            this.utilsService.presentAlert('Error!', 'The field model needs to have at least two characters of length!');
          }
        }else{
          this.utilsService.presentAlert('Error!', 'The field model is necessary!');
        }
      }else{
        this.utilsService.presentAlert('Error!', 'The field brand needs to have at least three characters of length!');
      }
    }else{
      this.utilsService.presentAlert('Error!', 'The field brand is necessary!');
    }
  }
}
