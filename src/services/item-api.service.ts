import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import { NativeGeocoder,NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
@Injectable()
export class ItemApi {

  Mecquekey:string ="Mecque"
  Medinekey:string ="Medine"
  constructor(private http: Http, private storage: Storage,private nativeGeocoder: NativeGeocoder, private geolocation: Geolocation) {}

  getItems(){
    return new Promise(resolve => {
        this.http.get('assets/data/hotels.json')
          .subscribe(res => resolve(res.json()));
    });
  }

  saveActiveMecqueHotel(map:String){
    this.storage.set(this.Mecquekey,map)
  }
  saveActiveMedineHotel(map:String){
    this.storage.set(this.Medinekey,map)
  }

  getActiveMecqueHotel(){
    return Observable.fromPromise(this.storage.get(this.Mecquekey)
    .then((token) => {
        return token;
    }));
  }

  getActiveMedineHotel(){
    return Observable.fromPromise(this.storage.get(this.Medinekey)
    .then((token) => {
        return token;
    }));
  }

  getPosition(){
    return Observable.fromPromise(this.geolocation.getCurrentPosition()
    .then((position: Geoposition) => {
      return position
    } 
    ))
  }
  getCity(lat : number, lng : number){
    return Observable.fromPromise(this.nativeGeocoder.reverseGeocode(lat,lng)
      .then(
        (result: NativeGeocoderReverseResult[]) =>{
          return (result[0].administrativeArea)
        } 
        ))
  }
}
