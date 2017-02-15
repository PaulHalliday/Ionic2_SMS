import { Component } from '@angular/core';
import { SMS } from 'ionic-native'
import { NavController, ToastController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Text object
  text = {
    "number": "", 
    "message": "",
  };

  constructor(private toastCtrl: ToastController, public navCtrl: NavController) {

  }

  sendTextMessage() {
    SMS.send(this.text.number, this.text.message).then((result) => {
      let successToast = this.toastCtrl.create({
        message: "Text message sent successfully",
        duration: 3000
      })
      successToast.present();
    }, (error) => {
      let errorToast = this.toastCtrl.create({
        message: "Text message not sent. :(",
        duration: 3000
      })
      errorToast.present();
    });
  }

}
