import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private alertController : AlertController){}

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Cars list',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
  await alert.present();
  }
}
