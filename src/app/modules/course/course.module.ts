// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// Routing
import { CourseRoutingModule } from './course-routing.module';

// Pipes

// Enums

// Guards

// Components

// Pages
import { CourseComponent } from './pages/course/course.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainModule } from 'src/app/templates/main2022/main.module';
import { ContentComponent } from './pages/content/content.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { QuestionsComponent } from './components/questions/questions.component';
@NgModule({
  declarations: [CourseComponent, DashboardComponent, ContentComponent, NavigationMenuComponent, QuestionsComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatToolbarModule,
    MainModule
  ]
})
export class CourseModule { }
