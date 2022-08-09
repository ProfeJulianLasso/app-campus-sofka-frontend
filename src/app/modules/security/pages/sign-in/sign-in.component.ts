import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide: boolean;
  submitted: boolean;
  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {
    this.hide = true;
    this.submitted = true;
  }
  ngOnInit(): void { }

  frmLogin: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.required, Validators.minLength(8), Validators.pattern(environment.passwordValidate), Validators.maxLength(8)]]
  });


  fieldValidator(fiel: string) {
    return this.frmLogin.controls?.[fiel].errors && this.frmLogin.controls?.[fiel].touched

  }

  singIn() {
    const login = this.frmLogin.getRawValue();
    if (this.frmLogin.invalid) {
      return;
    }
    this.authService.SignIn(login.email, login.password).then(() => {
      this.validateStatus();
    }).catch(err => {
      console.log(err)
    })
  }

  validateStatus() {
    if (this.authService.status_user) {
      setTimeout(() => {
        this.router.navigate(["/dashboard"])
      }, 2000);
    }
  }
}
