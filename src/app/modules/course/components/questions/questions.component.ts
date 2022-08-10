import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sofka-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  frmReply: FormGroup = this.fb.group({
    reply: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(100)]]
  });

  fieldValidator(fiel: string) {
    return this.frmReply.controls?.[fiel].errors && this.frmReply.controls?.[fiel].touched

  }

  ngOnInit(): void {
  }

}
