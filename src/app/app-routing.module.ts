import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'car/:id',
    loadChildren: () => import('./car/car.module').then( m => m.CarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
