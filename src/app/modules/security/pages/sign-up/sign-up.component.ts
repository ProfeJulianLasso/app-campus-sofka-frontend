import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MyErrorStateMatcher } from '../../validators/sync/passwordValidator';
import { PasswordSame } from '../../validators/sync/password-same.validator.sync';
@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  hide: boolean;
  hide2: boolean;
  submitted: boolean;
  matcher = new MyErrorStateMatcher;
  formsingUp: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toastr: ToastrService) {
    this.hide = true;
    this.hide2 = true;
    this.submitted = true;
    this.matcher = new MyErrorStateMatcher();
    this.formsingUp = new FormGroup(
      {
        name: new FormControl("", [Validators.required, Validators.minLength(8)]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(environment.passwordValidate), Validators.maxLength(8)]),
        confirmPassword: new FormControl("", [Validators.required]),
        checked: new FormControl("", Validators.required),
      },
      {
        validators: [PasswordSame.check]
      }
    );
  }

  ngOnInit(): void { }


  fieldValidator(fiel: string) {
    return this.formsingUp.controls?.[fiel].errors && this.formsingUp.controls?.[fiel].touched
  }

  registerAcoount() {
    const user = this.formsingUp.getRawValue();
    this.authService.SignUp(user.name, user.email, user.password).then(() => {
      this.formsingUp.reset();
      Object.keys(this.formsingUp.controls).forEach(key => {
        this.formsingUp.get(key)?.setErrors(null);
      });
      this.toastr.success(
        'Le enviamos un correo para la validacion de tu cuenta',
        'Registro exitoso'

      )
    }).catch(() => this.toastr.warning(
      'Ocurrio un error con el registro',
      'Registro fallido'));
  }
}
