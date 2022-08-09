// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Guards

// Pages}
import { AuthComponent } from './pages/auth/auth.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'singin',
        component: SignInComponent
      },
      {
        path: 'singup',
        component: SignUpComponent
      },
      {
        path: 'password',
        component: PasswordRecoveryComponent
      },
      {
        path: '**',
        redirectTo: 'singin'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
