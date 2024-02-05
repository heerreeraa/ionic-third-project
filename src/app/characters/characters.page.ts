import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss']
})
export class CharactersPage implements OnInit {

  characters: any = [];

  permission: boolean; 

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
  ];

  constructor(
    private router: Router, 
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.permission = true;
    this.getCharacters().subscribe(res => {
      console.log("res:", res);
      this.characters = res;
    })
  }

  goToHome() {
    this.router.navigate(['/home'])
  }

  getCharacters() {
    return this.http
    .get("assets/files/characters.json")
    .pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

}
