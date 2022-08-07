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
  constructor(private fb: FormBuilder,
    public authService: AuthService
  ) {
    this.hide = true;
  }

  login: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]]
   // password: ["", [Validators.required, Validators.max(8)]],

  })

  ngOnInit(): void { }

  fieldValidator(fiel: string) {

  }

  singIn() {
    const email = this.login.value.email;
    const password = this.login.value.password;

    this.authService.SignIn(email, password);

  }
}

