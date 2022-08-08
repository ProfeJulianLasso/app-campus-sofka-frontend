import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide: boolean;
  hide2: boolean;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.hide = true;
    this.hide2 = true;
  }
  singUp: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(8)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/), Validators.maxLength(8)]],
    confirm: ["", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/), Validators.maxLength(8)]],

  })
  ngOnInit(): void { }



  fieldValidator(fiel: string) {
    return this.singUp.controls?.[fiel].errors && this.singUp.controls?.[fiel].touched
  }

  registerAcoount(name: string, email: string, password: string, confirm: string) {
    this.authService.SignUp(name, email, password).then(res => console.log(res))
  }
}
