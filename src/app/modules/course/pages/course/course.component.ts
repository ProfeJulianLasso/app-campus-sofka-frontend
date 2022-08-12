import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../templates/main2022/services/dashboard.service';
import { Course } from '../../../security/interfaces/ICourse';
import { Users } from 'src/app/modules/notification/interfaces/IUsers';
@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  listCourses: Course[] = [];
  listUsers: Users[] = [];
  page?: number;

  constructor(private dashboardService: DashboardService) {}

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
    this.dashboardService.getCoursesUser().subscribe(
      (data) => {
        this.listUsers = data;
        console.log(this.listUsers + 'yefer users');
        this.listUsers.forEach((userCourse) => {
          userCourse.courses.forEach((course) => {
            this.listCourses.push(course);
            console.log(this.listCourses + 'yefer cursos');
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
