import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth.service';
import { FirebaseCodeErrorService } from '../../services/firebase-code-error.service';
@Component({
  selector: 'sofka-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {
  frmRecoveryUser: FormGroup;
  hide: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private toastr: ToastrService,
    private firebaseError: FirebaseCodeErrorService,) {
    this.hide = true;
    this.frmRecoveryUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * [
   *  Metodo recovery(), donde se puede recuperar la contraseña,
   *  se recupera el valor del email enviado const email y se llama
   *  el service
   * ]
   * @version [1,0.0]
   *
   * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
   * @since [1,0,0]
   *
   */
  recoveryPassword() {
    const email = this.frmRecoveryUser.value.email;
    if (this.frmRecoveryUser.invalid) {
      return;
    }
    this.authService.recovery(email).then(() => {
      this.toastr.info(
        'Le enviamos un correo para restablecer su password',
        'Recuperar Password'
      );
    })
      .catch((error) => {
        this.firebaseError.codeError(error.code), 'Error';
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      });
  }
}
