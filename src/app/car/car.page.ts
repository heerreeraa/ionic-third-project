import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './services/car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
 
  id: string;
  finalId: number;

  cars: any = [];

  imgUrl: string;
  brand: string;
  model: string;


  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService
  ) { 
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId = parseInt(this.id) - 1;
    // console.log("id", this.id);

    this.carService.getCar().subscribe(res => {
      // console.log("res:", res);
      this.cars = res;

      this.brand = this.cars[this.finalId].brand;
      this.model = this.cars[this.finalId].model;
      this.imgUrl = this.cars[this.finalId].imgUrl;
      
    })
  }

}
