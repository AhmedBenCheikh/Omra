import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { ItemApi } from '../../services/service';
import { Http } from '@angular/http';
/**
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html',
  providers: [Http]
})
export class HotelsPage {

  public MecqueHotels:any ;
  public MedineHotels: any;
  public MecquehotelActive:String;
  public MedinehotelActive:String;
  constructor(private itemApi: ItemApi) {
  }

  ionViewDidLoad() {
    this.itemApi.getItems().then((data: any) => {
      this.MecqueHotels = data.Mecque;
      this.MedineHotels = data.Medine;
    })
    this.itemApi.getActiveMecqueHotel().subscribe(hotel =>{
      this.MecquehotelActive=hotel
    })
    this.itemApi.getActiveMedineHotel().subscribe(hotel =>{
      this.MedinehotelActive=hotel
    })
  }
  activeMecqueHotel(map: String){
    var divs = document.querySelectorAll('ion-checkbox'), i;
    for (i = 0; i < divs.length; ++i) {
      if((divs[i].firstElementChild.className) =="checkbox-icon checkbox-checked" && divs[i].getAttribute("id") == "hotelMecque")
      divs[i].firstElementChild.classList.remove("checkbox-checked")
    }
    this.itemApi.saveActiveMecqueHotel(map)
  }
  activeMedineHotel(map: String){
    var divs = document.querySelectorAll('ion-checkbox'), i;
    for (i = 0; i < divs.length; ++i) {
      if((divs[i].firstElementChild.className) =="checkbox-icon checkbox-checked" && divs[i].getAttribute("id") == "hotelMedina")
      divs[i].firstElementChild.classList.remove("checkbox-checked")
    }
    this.itemApi.saveActiveMedineHotel(map)
  }

}
