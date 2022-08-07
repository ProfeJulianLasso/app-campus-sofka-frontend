import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide: boolean;
  constructor(private fb: FormBuilder) {
    this.hide = true;
  }
  singIng: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(8)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.max(8)]],
    confirm: ["", [Validators.required, Validators.max(8)]],
  })
  ngOnInit(): void { }



  fieldValidator(fiel: string) {
    return this.singIng.controls?.[fiel].errors && this.singIng.controls?.[fiel].touched
  }
}
