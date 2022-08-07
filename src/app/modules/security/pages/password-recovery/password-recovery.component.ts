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

  recovery() {
    const email = this.recoveryUser.value.correo;
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

  fieldValidator(fiel: string) {
    return (
      this.recoveryUser.controls?.[fiel].errors &&
      this.recoveryUser.controls?.[fiel].touched
    );
  }
}
