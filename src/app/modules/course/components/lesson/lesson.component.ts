import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../interfaces/ILesson';
import { CourseTopicsService } from '../../services/course-topics.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'sofka-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  lessons: Lesson[]
  position: number;
  size: number = 0;
  constructor(private courseService: CourseTopicsService, private router: ActivatedRoute) {
    this.lessons = []
    this.position = this.value
    setTimeout(() => {
      this.size = this.sizeQuestion;
    }, 2000);
  }

  ngOnInit(): void {
    this.getLesson();
    console.log(this.lessons)
  }

  get positionQuestion() {
    return this.position
  }

  getLesson() {
    const idReceipt = this.router.snapshot.params['id'];
    const idTopic = localStorage.getItem("idTopic");
    this.courseService.getLesson(idReceipt, idTopic).subscribe(res => {
      this.lessons.push(...res);
    });

  }

  get value(): number {
    if (localStorage.getItem("lesson") == null) {
      localStorage.setItem("lesson", JSON.stringify(0));
    }
    const value = localStorage.getItem("lesson");
    return Number(value);
  }
  get sizeQuestion(): number {
    return this.lessons.length;
  }

  next() {
    this.position = this.value + 1;
    localStorage.setItem("lesson", JSON.stringify(this.position));
    if (this.size === this.position) {
      Swal.fire({
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2242/2242681.png',
        text: "Felicitaciones has completado con exito las preguntas , pasa a la siguiente lección",
        imageHeight: 400,
        imageAlt: 'A tall image'
      })
    }
  }
}
