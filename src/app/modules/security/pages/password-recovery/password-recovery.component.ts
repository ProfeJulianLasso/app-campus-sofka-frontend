import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';

=======
>>>>>>> Daniel-Steven-Gil-Cruz
import { FirebaseCodeErrorService } from '../../services/firebase-code-error.service';
@Component({
  selector: 'sofka-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {
  recoveryUser: FormGroup;
  hide: boolean;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private toastr: ToastrService
  ) {
    this.hide = true;
    this.recoveryUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * [
   *  Metodo recovery(), donde se puede recuperar la contraseña,
   *  se recupera el valor del email enviado const email y se realizan las
   *  validaciones corespondientes.
   * ]
   * @version [1,0.0]
   *
   * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
   * @since [1,0,0]
   *
   */
  recovery() {
    const email = this.recoveryUser.value.email;

    this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
<<<<<<< HEAD
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.firebaseError.codeError(error.code), 'Error';
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
=======
        /* this.toastr.info(
    'Le·enviamos·un·correo·para·restablecer·su·password',
    'Recuperar·Password'
  );*/
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.loading = false;
        //  this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
>>>>>>> Daniel-Steven-Gil-Cruz
      });
  }
}
