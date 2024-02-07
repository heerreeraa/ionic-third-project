import { Component, OnInit } from '@angular/core';
import { CarsService } from './services/cars-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  cars: any = [];

  constructor(
    private carsService: CarsService
    ) { }

  ngOnInit() {
    this.carsService.getCars().subscribe(res => {
      // console.log("res:", res);
      this.cars = res;
    })
  }


  showAlert2() {
    this.carsService.presentToast1();
  }



}
