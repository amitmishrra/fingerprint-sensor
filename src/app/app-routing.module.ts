import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: localStorage.getItem('loggedIn') && localStorage.getItem('biometricAuth')=="/unlock-by-biometric" ? '/unlock-by-biometric': 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'biometric',
    loadChildren: () => import('./biometric/biometric.module').then( m => m.BiometricPageModule)
  },
  {
    path: 'unlock-by-biometric',
    loadChildren: () => import('./unlock-by-biometric/unlock-by-biometric.module').then( m => m.UnlockByBiometricPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
