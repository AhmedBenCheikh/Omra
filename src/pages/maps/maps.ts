import { Component} from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

//Geolocation Plugin
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { ItemApi } from '../../services/service';

declare var google;
/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  
  public Destination: string ;
  MyLocation: any;
  public currentCity: any
  public latitude:number
  public longtitude:number
  constructor(public navCtrl: NavController,private locationAccuracy: LocationAccuracy,public itemApi: ItemApi,public loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'الرجاء الانتظار'
    });
  
    loading.present();
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () =>{
            this.itemApi.getPosition().subscribe(pos => {
              this.itemApi.getCity(pos.coords.latitude,pos.coords.longitude).subscribe(data =>{
                this.currentCity=data
                if(data == "Gabes"){
                  this.itemApi.getActiveMecqueHotel().subscribe(data =>{
                    console.log(data)
                    this.Destination = data
                    this.calculateAndDisplayRoute(pos)
                    loading.dismiss();
                  })
                }else if(data == "Al Madinah Province"){
                  this.itemApi.getActiveMedineHotel().subscribe(data =>{
                    this.Destination = data
                    this.calculateAndDisplayRoute(pos)
                    loading.dismiss();
                  })
                }
                
              })
            })
          } 
        );
      }
    });
  }
  calculateAndDisplayRoute(pos) {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'));
    let position={
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    }
    map.setCenter(position);
    this.MyLocation = new google.maps.LatLng(position);
    directionsService.route({
      origin: this.MyLocation,
      destination: this.Destination,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
    directionsDisplay.setMap(map);
}
 
}
