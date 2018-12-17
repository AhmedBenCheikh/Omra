import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TawafPage } from '../pages/tawaf/tawaf';
import { IhramPage } from '../pages/ihram/ihram';
import { IbrahimPage } from '../pages/ibrahim/ibrahim';
import { ZamzamPage } from '../pages/zamzam/zamzam';
import { SaiiPage } from '../pages/saii/saii';
import { HalkPage } from '../pages/halk/halk';
import { MapsPage } from '../pages/maps/maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { HotelsPage } from '../pages/hotels/hotels';
import { ItemApi } from '../services/service';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { NativeGeocoder } from '@ionic-native/native-geocoder';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TawafPage,
    IhramPage,
    IbrahimPage,
    ZamzamPage,
    SaiiPage,
    HalkPage,
    MapsPage,
    HotelsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TawafPage,
    IhramPage,
    IbrahimPage,
    ZamzamPage,
    SaiiPage,
    HalkPage,
    MapsPage,
    HotelsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    LocationAccuracy,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpModule,
    ItemApi,
    NativeGeocoder
  ]
})
export class AppModule {}
