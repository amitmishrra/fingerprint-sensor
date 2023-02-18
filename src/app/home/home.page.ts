import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router, private platform : Platform, private faio : FingerprintAIO) {}

  // this.platform.ready().then(()=>{

  // })

  showBiometric(){
    this.faio.show({})
      .then((result: any) => { this.router.navigate(['/home'])})
      .catch((error: any) => null);
  }

  ionViewDidEnter(){
    localStorage.getItem('biometricAuth') == 'true' ? this.showBiometric : null
  }

  logout(){
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('biometricAuth');
    // location.reload();
    this.router.navigate(['/login']);
  }

}
