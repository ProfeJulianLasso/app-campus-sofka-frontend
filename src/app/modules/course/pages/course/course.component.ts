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

  constructor(private dashboardService: DashboardService) {
    this.saveLocalStorage();
  }

  ngOnInit(): void {
    this.courseAll();
  }

  /**
   * [
   *  Metodo courseAll(), se optiene el usuario con sus cursos
   *  dashboardService.getCoursesUser(), suscribe la data y la guardo
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
        this.listUsers.forEach((userCourse) => {
          userCourse.courses.forEach((course) => {
            this.listCourses.push(course);
            localStorage.setItem('course', JSON.stringify(this.listCourses));
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveLocalStorage() {
    const dataCourses = this.listCourses;
    localStorage.setItem('course', JSON.stringify(dataCourses));
  }
}
