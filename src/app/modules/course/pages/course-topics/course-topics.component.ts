import { Component, OnInit } from '@angular/core';
import { CourseTopicsService } from '../../services/course-topics.service';
import { CourseTopics } from '../../interfaces/ICourseTopics';

@Component({
  selector: 'sofka-course-topics',
  templateUrl: './course-topics.component.html',
  styleUrls: ['./course-topics.component.scss']
})
export class CourseTopicsComponent implements OnInit {
  listCoursesTopics: CourseTopics[] = [];
  gridColumns = 3;
  name: string;
  constructor(private courseTopicsService: CourseTopicsService) {
    this.name = 'Temas 📚';
  }

  ngOnInit(): void {
    this.courseTopicAll();
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
  courseTopicAll() {
    this.courseTopicsService.getCoursesTopics().subscribe(
      (data) => {
        this.listCoursesTopics = data;
        console.log(this.listCoursesTopics + 'yefer cursos');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
