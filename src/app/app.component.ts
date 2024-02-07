import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { 
      title: 'Home', 
      url: '/home', 
      icon: 'home' 
    },
    { 
      title: 'Characters', 
      url: '/characters', 
      icon: 'people' 
    },
    { 
      title: 'Cars', 
      url: '/cars', 
      icon: 'car-sport' 
    },
    // { 
    //   title: 'Pokemon', 
    //   url: '/pokemon', 
    //   icon: 'sparkles' 
    // },
  ];
  constructor() {}
}
