import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseCodeErrorService } from '../../services/firebase-code-error.service';
@Component({
  selector: 'sofka-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {
  recoveryUser: FormGroup;
  hide: boolean;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.hide = true;
    this.recoveryUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * [
   *  contiene el metodo recovery() donde poderes recuperar la contraseña
   *  toma el input email enviado en el boton recuperar dentra a 
   *   .then(() => {
        this.router.navigate(['/login']);
        })
   *  si todo es exitoso manda el correo donde podemos recuperar la contraseña 
   *     
   *     .catch((error) => {
        this.loading = false;
        this.firebaseError.codeError(error.code), 'Error';
      });  
   *  si hay un error            
   * ]
   * @version [1,0.0]
   *
   * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
   * @since [1,0,0]
   *
   */
  recovery() {
    const email = this.recoveryUser.value.email;
    this.loading = true;
    this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.loading = false;
        this.firebaseError.codeError(error.code), 'Error';
      });
  }
}
