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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
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
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule

  ],
  exports: [LoginModalComponent]
})
export class SecurityModule { }
