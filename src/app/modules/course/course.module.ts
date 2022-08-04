// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material

// Routing
import { CourseRoutingModule } from './course-routing.module';

// Pipes

// Enums

// Guards

// Components

// Pages
import { CourseComponent } from './pages/course/course.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [CourseComponent, DashboardComponent],
  imports: [CommonModule, CourseRoutingModule]
})
export class CourseModule {}
