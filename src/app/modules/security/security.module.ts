// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material

// Routing
import { SecurityRoutingModule } from './security-routing.module';

// Pipes

// Enums

// Guards

// Components

// Pages
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, SignInComponent],
  imports: [CommonModule, SecurityRoutingModule]
})
export class SecurityModule {}
