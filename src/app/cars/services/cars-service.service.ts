import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private http: HttpClient,
  ) { }

  getCars() {
    return this.http
    .get("assets/files/cars.json")
    .pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Selected car',
      duration: 1500,
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
