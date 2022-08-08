import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide: boolean;
  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.hide = true;
  }
  ngOnInit(): void { }

  login: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.required, Validators.minLength(8), Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/), Validators.maxLength(8)]]
  });


  fieldValidator(fiel: string) {
    return this.login.controls?.[fiel].errors && this.login.controls?.[fiel].touched

  }

  singIn(email: string, password: string) {
    this.authService.SignIn(email, password);
  }
}
