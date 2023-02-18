import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnlockByBiometricPageRoutingModule } from './unlock-by-biometric-routing.module';

import { UnlockByBiometricPage } from './unlock-by-biometric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnlockByBiometricPageRoutingModule
  ],
  declarations: [UnlockByBiometricPage]
})
export class UnlockByBiometricPageModule {}
