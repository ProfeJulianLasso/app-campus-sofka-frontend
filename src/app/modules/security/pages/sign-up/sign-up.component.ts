import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { passwordValidator } from '../../validators/sync/passwordValidator';
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
    password: ["", [Validators.required, Validators.pattern(environment.passwordValidate)]],
    passwordConfirm: ["", Validators.required],
    check: [true, Validators.required]
  },

    [
      passwordValidator.MatchValidator(
        'password',
        'passwordConfirm'
      )
    ]
  )
  ngOnInit(): void { }



  get passwordMatchError(): boolean {
    return (
      this.singUp.getError('match') &&
      this.singUp.get('passwordConfirm')?.touched &&
      !this.singUp.get('passwordConfirm')?.hasError('required')
    );
  }


  fieldValidator(fiel: string) {
    return this.singUp.controls?.[fiel].errors && this.singUp.controls?.[fiel].touched
  }

  registerAcoount(name: string, email: string, password: string, confirm: string) {
    this.authService
      .SignUp(name, email, password)
      .then((res) => this.singUp.reset());
  }
}
