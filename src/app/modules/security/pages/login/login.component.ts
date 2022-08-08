import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean;
  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.hide = true;
  }

  login: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.required, Validators.minLength(8), Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/), Validators.maxLength(8)]]
  });

  ngOnInit(): void { }

  fieldValidator(fiel: string) {
    return this.login.controls?.[fiel].errors && this.login.controls?.[fiel].touched

  }

  singIn(email: string, password: string) {
    this.authService.SignIn(email, password);
  }
}

