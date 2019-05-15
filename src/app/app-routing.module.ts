import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
const routes: Routes = [
  { path: 'login', loadChildren: './views/login-mod/login-mod.module#LoginModModule'},
  { path: 'register', loadChildren: './views/register-mod/register-mod.module#RegisterModModule'},
  { path: 'home', loadChildren: './views/home-mod/home-mod.module#HomeModModule'},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
