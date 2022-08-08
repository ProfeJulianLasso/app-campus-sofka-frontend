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
  loading = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.recoveryUser = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  recovery() {
    const email = this.recoveryUser.value.correo;
    this.loading = true;
    this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        /* this.toastr.info(
    'Le·enviamos·un·correo·para·restablecer·su·password',
    'Recuperar·Password'
  );*/
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.loading = false;
        //  this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      });
  }
}
