import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../templates/main2022/services/dashboard.service';
import { Course } from '../../../security/interfaces/ICourse';
import { Users } from '../../../notification/interfaces/IUsers';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listCourses: Course[] = [];
  listUsers: Users[] = [];
  page?: number;
  gridColumns = 3;
  name: string;
  constructor(private dashboardService: DashboardService) {
    this.name = "Mis Cursos 📚"
  }

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
        console.log(this.listUsers + 'yefer cursos');
        this.listUsers.forEach((userCourse) => {
          userCourse.courses.forEach((course) => {
            this.listCourses.push(course);
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
