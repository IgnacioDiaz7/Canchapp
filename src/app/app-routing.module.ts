import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'canchas',
    loadChildren: () => import('./canchas/canchas.module').then( m => m.CanchasPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'canchas',
    loadChildren: () => import('./formularios/Canchas/canchas/canchas.module').then( m => m.CanchasPageModule)
  },
  {
    path: 'canchas-duoc',
    loadChildren: () => import('./formularios/Canchas/canchas-duoc/canchas-duoc.module').then( m => m.CanchasDUOCPageModule)
  },
  {
    path: 'multi-vlc',
    loadChildren: () => import('./formularios/Canchas/multi-vlc/multi-vlc.module').then( m => m.MultiVLCPageModule)
  },
  {
    path: 'manquecura-vlc',
    loadChildren: () => import('./formularios/Canchas/manquecura-vlc/manquecura-vlc.module').then( m => m.ManquecuraVLCPageModule)
  },
  {
    path: 'gym-mun-quilicura',
    loadChildren: () => import('./formularios/Canchas/gym-mun-quilicura/gym-mun-quilicura.module').then( m => m.GymMunQuilicuraPageModule)
  },
  {
    path: 'gym-entretiempo',
    loadChildren: () => import('./formularios/Canchas/gym-entretiempo/gym-entretiempo.module').then( m => m.GymEntretiempoPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
