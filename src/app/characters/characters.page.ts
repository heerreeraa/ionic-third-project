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
  searchedCharacter: any;

  permission: boolean; 

  constructor(
    private router: Router, 
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.permission = true;
    this.getCharacters().subscribe(res => {
      // console.log("res:", res);
      this.characters = res;
      this.searchedCharacter = this.characters;
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

  // Funcion Buscar
  searchCharacter(event) {
    console.log("Funcion Bucar activada!");
    
    const text = event.target.value;
    if(text && text.trim() != ''){
      this.searchedCharacter = this.searchedCharacter.filter((character : any) => {
        return (character.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

  doRefresh(event) {
    console.log("doRefresh function enter");
    this.getCharacters();
    setTimeout(() => {
      console.log("doRefresh timeout launched");

      event.target.complete();
    }, 2000);
  }

}
