import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private http: HttpClient,
  ) { }

  getPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=8&offset=9');
  }
  

  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Ciudad seleccionada',
      duration: 2000,
      position: "bottom"
    })
    toast.present()
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "Se ha borrado la ciudad correctamente",
      buttons: ["Ok"]
    });
    await alert.present()
    // Esto hace que la alerta no se cierre hasta que el usuarion no la cierre
    let result = await alert.onDidDismiss();
    console.log(result);
  } 

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "¿Estás seguro que desea eliminar la ciudad?",
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log("No cancel");
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log("Ciudad eliminada");
          }
        }
    ]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  } 
}
