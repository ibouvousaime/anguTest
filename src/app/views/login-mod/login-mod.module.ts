import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { LoginRoutes } from '../login/login-routing';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassCComponent } from '../forgot-pass-c/forgot-pass-c.component';



@NgModule({
  declarations: [LoginComponent,ForgotPassCComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes)
  ]
})
export class LoginModModule { }
