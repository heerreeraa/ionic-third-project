import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient
  ) { }

  getCar() {
    return this.http
    .get("assets/files/cars.json")
    .pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }
}
