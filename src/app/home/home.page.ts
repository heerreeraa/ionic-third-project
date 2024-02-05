import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages = [
    { 
      title: 'Home', 
      url: '/home', 
      icon: 'home' 
    },
    { 
      title: 'Customers', 
      url: '/customers', 
      icon: 'people' 
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
