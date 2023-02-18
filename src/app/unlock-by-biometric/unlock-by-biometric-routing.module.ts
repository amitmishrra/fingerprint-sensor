import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnlockByBiometricPage } from './unlock-by-biometric.page';

const routes: Routes = [
  {
    path: '',
    component: UnlockByBiometricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnlockByBiometricPageRoutingModule {}
