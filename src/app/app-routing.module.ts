// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards

// Pages

const routes: Routes = [
  {
    path: 'security',
    loadChildren: () =>
      import('./modules/security/security.module').then((m) => m.SecurityModule)
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
export class AppRoutingModule {}
