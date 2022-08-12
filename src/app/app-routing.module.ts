// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from './modules/security/guards/validate-token.guard';

// Guards

// Pages

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/security/security.module').then((m) => m.SecurityModule)
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./modules/course/course.module').then((m) => m.CourseModule),
    canLoad: [ValidateTokenGuard], // prevenir la carga de un componente
    canActivate: [ValidateTokenGuard] //previene que el usuario ingrese a una ruta en especifico

  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./modules/chat/chat.module').then((m) => m.ChatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
