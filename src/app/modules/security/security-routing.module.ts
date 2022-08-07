// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Guards

// Pages
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [

  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'singin',
        component: SignInComponent,
      },
      {
        path: 'singup',
        component: SignUpComponent,
      },
      {
        path: '**',
        redirectTo: 'singup'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }