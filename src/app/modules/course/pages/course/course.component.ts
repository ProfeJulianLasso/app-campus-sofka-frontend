import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../templates/main2022/services/dashboard.service';
import { Course } from '../../../security/interfaces/ICourse';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  listCourses: Course[] = [];
  page?: number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.courseAll();
  }

  /**
   * [
   *  Metodo courseAll(), se optiene todos los cursos
   *  dashboardService.getCourses(), suscribe la data y la guardo
   *  this.listCourses para mostrarla en la vista
   * ]
   * @version [1,0.0]
   *
   * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
   * @since [1,0,0]
   *
   */
  courseAll() {
    this.dashboardService.getCourses().subscribe(
      (data) => {
        this.listCourses = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
