import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CitiesService } from './services/cities-service.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: any = [];

  constructor(
    private http: HttpClient,
    private citiesService: CitiesService
    ) { }

  ngOnInit() {
    this.citiesService.getCities().subscribe(res => {
      console.log("res:", res);
      this.cities = res;
    })
  }


  showAlert2() {
    this.citiesService.presentAlert2();
  }



}
