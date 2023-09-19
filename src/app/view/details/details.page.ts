import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/entities/car';
import { CarService } from 'src/app/model/services/car.service';

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

  constructor(private actRoute : ActivatedRoute, private carService : CarService) {

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

}
