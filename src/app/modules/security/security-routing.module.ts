// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards

// Pages
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {}
