import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  redirect(){
    this.navCtrl.push('CardPage');
  }

  constructor(public navCtrl: NavController) {

  }

}
