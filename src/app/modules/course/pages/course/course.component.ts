import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../templates/main2022/services/dashboard.service';
import { Course } from '../../../security/interfaces/ICourse';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  listCourse: Course[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.courseAll();
  }

  courseAll() {
    this.dashboardService.getCourses().subscribe(
      (data) => {
        this.listCourse = data;
        console.log(this.listCourse);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
