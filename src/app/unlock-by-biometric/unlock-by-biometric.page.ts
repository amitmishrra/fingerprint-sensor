import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
@Component({
  selector: 'app-unlock-by-biometric',
  templateUrl: './unlock-by-biometric.page.html',
  styleUrls: ['./unlock-by-biometric.page.scss'],
})
export class UnlockByBiometricPage implements OnInit {

  constructor(private router: Router,  private faio : FingerprintAIO) { }

  ngOnInit() {
  }
  unlock(){   
    this.faio.show({})
      .then((result: any) => { this.router.navigate(['/home'])})
      .catch((error: any) => null);
  }
}
