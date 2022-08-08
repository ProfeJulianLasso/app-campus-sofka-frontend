import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../templates/main2022/services/dashboard.service';
import { Course } from '../../../security/interfaces/ICourse';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listCourses: Course[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.courseAll();
  }

  courseAll() {
    this.dashboardService.getCourses().subscribe(
      (data) => {
        this.listCourses = data;
        console.log(this.listCourses + 'yefer cursos');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
