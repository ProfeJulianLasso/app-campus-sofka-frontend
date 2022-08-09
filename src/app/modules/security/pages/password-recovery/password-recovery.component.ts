import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'sofka-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {
  recoveryUser: FormGroup;
  hide: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.hide = true;
    this.recoveryUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * [
   *  recoveryPassword(), donde se puede recuperar la contraseña,
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
    const email = this.recoveryUser.value.email;
    this.authService.recovery(email);
  }
}
