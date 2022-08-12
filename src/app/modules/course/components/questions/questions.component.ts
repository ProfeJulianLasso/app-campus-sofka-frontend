import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../interfaces/IQuestion';
import { CourseTopicsService } from '../../services/course-topics.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'sofka-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  visibility: boolean;
  position: number;
  size: number = 0;
  constructor(private fb: FormBuilder, private courseService: CourseTopicsService, private router: ActivatedRoute) {
    this.questions = [];
    this.visibility = false;
    this.position = this.value;
    setTimeout(() => {
      this.size = this.sizeQuestion;
    }, 2000);

  }
  frmReply: FormGroup = this.fb.group({
    reply: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(100)]]
  });

  fieldValidator(fiel: string) {
    return this.frmReply.controls?.[fiel].errors && this.frmReply.controls?.[fiel].touched

  }
  get positionQuestion() {
    return this.position
  }
  ngOnInit(): void {
    this.getQuestion()

  }

  getQuestion() {
    const idReceipt = this.router.snapshot.params['id'];
    const idTopic = localStorage.getItem("idTopic");
    this.courseService.getQuestion(idReceipt, idTopic).subscribe(res => {
      this.questions.push(...res);
    })
  }


  answer(question: Question) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Una vez enviada tu respuesta no se modificara",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        const reply = this.frmReply.value.reply;
        question.answers.push(reply)
        this.courseService.postQuestion(question).subscribe();
        this.visibility = true;
        this.frmReply.reset();
        Object.keys(this.frmReply.controls).forEach(key => {
          this.frmReply.get(key)?.setErrors(null);
        });
      }
    })
  }

  get value(): number {
    if (localStorage.getItem("value") == null) {
      localStorage.setItem("value", JSON.stringify(0));
    }
    const value = localStorage.getItem("value");
    return Number(value);
  }

  get sizeQuestion(): number {
    return this.questions.length;
  }

  nextQuestion() {
    this.position = this.value + 1;
    this.visibility = false;
    localStorage.setItem("value", JSON.stringify(this.position));
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




