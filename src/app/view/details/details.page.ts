import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Car } from 'src/app/model/entities/car';
import { CarService } from 'src/app/model/services/car.service';
import { UtilsService } from 'src/app/model/services/utils.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  car! : Car;
  brand! : string;
  model! : string;
  index! : number;
  edit : boolean = true;

  constructor(private utilsService : UtilsService, private alertController : AlertController, private actRoute : ActivatedRoute, private carService : CarService, private router : Router) {

  }

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      if(params['index']){
        this.index = params['index'];
      }
    })
    this.car = this.carService.getByIndex(this.index);
    this.brand = this.car.brand;
    this.model = this.car.model;
  }

  saveEdit(){
    if(this.brand){
      if(this.brand.length >= 3){
        if(this.model){
          if(this.model.length >= 2){
            let newCar : Car = new Car(this.brand, this.model);
            this.carService.saveEdit(this.index, newCar);
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

  enableEdit(){
    if(this.edit){
      this.edit = false;
    }else{
      this.edit = true;
    }
  }

  deleteConfirm(){
    this.presentConfirmAlert('Alert!', 'Are you sure you want to delete this car?')
  }

  deleteCar(){
    this.carService.deleteCar(this.index);
    this.router.navigate(['/home']);
  }

  async presentConfirmAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Cars list',
      subHeader: subHeader,
      message: message,
      buttons: [
        {text: 'Cancelar'},
        {text: 'Confirm', role: 'confirm', handler: (action)=>{this.deleteCar()}}
      ],
    });
  await alert.present();
  }
}
