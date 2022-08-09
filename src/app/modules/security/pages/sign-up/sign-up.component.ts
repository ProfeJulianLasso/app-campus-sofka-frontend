import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CustomValidators } from '../../validators/sync/passwordValidator';
@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  hide: boolean;
  hide2: boolean;
  submitted: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private toastr: ToastrService) {
    this.hide = true;
    this.hide2 = true;
    this.submitted = true;
  }
  formsingUp: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(8)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/), Validators.maxLength(8)]],
    passwordConfirm: ["", Validators.required],

  },
    CustomValidators.mustMatch('password', 'passwordConfirm') // insert here
  )
  ngOnInit(): void { }



  get f() {
    return this.formsingUp.controls;
  }

  fieldValidator(fiel: string) {
    return this.formsingUp.controls?.[fiel].errors && this.formsingUp.controls?.[fiel].touched
  }

  registerAcoount() {
    this.submitted = true;
    if (this.formsingUp.invalid) {
      return;
    }
    const user = this.formsingUp.getRawValue();
    this.authService.SignUp(user.name, user.email, user.password).then(() => this.toastr.success(
      'Le enviamos un correo para la validacion de tu cuenta',
      'Registro exitoso'
    )).catch(() => this.toastr.warning(
      'Ocurrio un error con el registro',
      'Registro fallido'));
  }

}
