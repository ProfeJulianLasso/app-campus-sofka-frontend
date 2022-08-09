// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from './modules/security/guards/validate-token.guard';
import { DashboardComponent } from './templates/main2022/components/dashboard/dashboard.component';
import { MenuComponent } from './templates/main2022/components/menu/menu.component';
import { CourseComponent } from './modules/course/pages/course/course.component';

// Guards

// Pages

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/security/security.module').then((m) => m.SecurityModule)
  },
  {
    path: "dashboard", component: DashboardComponent,
    canLoad: [ValidateTokenGuard], // prevenir la carga de un componente
    canActivate: [ValidateTokenGuard] //previene que el usuario ingrese a una ruta en especifico

  },
  {
    path: 'course',
    loadChildren: () =>
      import('./modules/course/course.module').then((m) => m.CourseModule)
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
