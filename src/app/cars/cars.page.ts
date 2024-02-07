import { Component, OnInit } from '@angular/core';
import { CarsService } from './services/cars-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  token: string = localStorage.getItem('token');
  cars: any = [];

  constructor(
    private carsService: CarsService
    ) { }

  ngOnInit() {
    console.log("token", this.token);
    // localStorage.removeItem('token');
    localStorage.clear;
    this.carsService.getCars().subscribe(res => {
      // console.log("res:", res);
      this.cars = res;
    })
  }


  showAlert2() {
    this.carsService.presentToast1();
  }



}
