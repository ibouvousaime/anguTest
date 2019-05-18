import { Routes } from "@angular/router";
import { LoginComponent } from './login.component';
import { ForgotPassCComponent } from '../forgot-pass-c/forgot-pass-c.component';


export const LoginRoutes: Routes = [
    {
        path: '', component: LoginComponent
    },
    { path: 'forgot', component: ForgotPassCComponent}
];
