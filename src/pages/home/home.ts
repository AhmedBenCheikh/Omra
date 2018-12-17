import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TawafPage } from '../tawaf/tawaf';
import { IhramPage } from '../ihram/ihram';
import { IbrahimPage } from '../ibrahim/ibrahim';
import { ZamzamPage } from '../zamzam/zamzam';
import { SaiiPage } from '../saii/saii';
import { HalkPage } from '../halk/halk';
import { MapsPage } from '../maps/maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  openTawafPage(){
    this.navCtrl.push(TawafPage)
  }
  openIhramPage(){
    this.navCtrl.push(IhramPage)
  }
  openIbrahimPage(){
    this.navCtrl.push(IbrahimPage)
  }
  openZamzamPage(){
    this.navCtrl.push(ZamzamPage)
  }
  openSaiiPage(){
    this.navCtrl.push(SaiiPage)
  }
  openHalkPage(){
    this.navCtrl.push(HalkPage)
  }
  openMapsPage(){
    this.navCtrl.push(MapsPage)
  }
}
