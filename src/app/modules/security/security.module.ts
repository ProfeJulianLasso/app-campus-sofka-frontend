// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

// Routing
import { SecurityRoutingModule } from './security-routing.module';

// Pipes

// Enums

// Guards

// Components
import { LoginModalComponent } from './components/login-modal/login-modal.component';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    SignInComponent,
    LoginModalComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [LoginModalComponent]
})
export class SecurityModule {}
