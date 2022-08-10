// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { ContentComponent } from './pages/content/content.component';

// Guards

// Pages
import { CourseComponent } from './pages/course/course.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      { path: "course-list", component: CourseComponent },
      {
        path: "course-content", component: ContentComponent,
        children: [
          {
            path: "question", component: QuestionsComponent
          }
        ]
      },
      { path: "**", redirectTo: "course-list" }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
