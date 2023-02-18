import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biometric',
  templateUrl: './biometric.page.html',
  styleUrls: ['./biometric.page.scss'],
})
export class BiometricPage implements OnInit {
  biometricAuth = localStorage.getItem('biometricAuth') || false;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  biometricYes(){
    localStorage.setItem('biometricAuth', '/unlock-by-biometric');
    this.router.navigate(['/unlock-by-biometric'])
  }

  biometricNO(){    
    // localStorage.setItem('biometricAuth', 'false');
    localStorage.setItem('biometricAuth', 'nobiometricAuth');
    this.router.navigate(['/home'])
  }
}
