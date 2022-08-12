import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../interfaces/IQuestion';
import { CourseTopicsService } from '../../services/course-topics.service';
@Component({
  selector: 'sofka-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  visibility: boolean;
  constructor(private fb: FormBuilder, private courseService: CourseTopicsService) {
    this.questions = [];
    this.visibility = false;
  }
  frmReply: FormGroup = this.fb.group({
    reply: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(100)]]
  });

  fieldValidator(fiel: string) {
    return this.frmReply.controls?.[fiel].errors && this.frmReply.controls?.[fiel].touched

  }

  ngOnInit(): void {
    this.getQuestion()
  }

  getQuestion() {
    this.courseService.getQuestion().subscribe(res => {
      console.log(res)
      this.questions[0] = res;
    })
  }

  answer() {
    this.visibility = true;
  }


}
