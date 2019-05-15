import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutes } from './register.routing';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RegisterRoutes)
  ]
})
export class RegisterModModule { 

}
