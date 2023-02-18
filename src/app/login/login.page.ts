import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private faio: FingerprintAIO, private router: Router, private modalCtrl: ModalController) { }

  biometric = localStorage.getItem('biometric') || false;
  username = '';
  password = '';
  loggedIn = localStorage.getItem('loggedIn') || false;

  message = '';

  ngOnInit() {
  }

  storeVariables() {
    // localStorage.setItem('username', this.username);
    // localStorage.setItem('password', this.password);
  }

  deleteVariables() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('loggedIn');
  }

  bioLogin() {
    this.faio.isAvailable()
      .then((result: any) =>{
        localStorage.getItem('biometricAuth') == 'nobiometricAuth' ? this.router.navigate(['/home']) : this.router.navigate(['/biometric'])
      })
      .catch((error: any) => this.router.navigate(['/home']));
  }


  login() {
    if (this.username == 'admin' && this.password == 'admin') {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', `${this.loggedIn}`);
      this.bioLogin()
      this.username = '';
      this.password = '';
    } else {
      this.message = 'Invalid Credentials';
    }



  }

}
