import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { User } from '../interfaces/IUser';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from './firebase-code-error.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private status: boolean;
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private firebaseError: FirebaseCodeErrorService,
  ) {
    this.token = "";
    this.status = false;

  }

  get status_user() {
    return this.status;
  }
  /**
   * metodo para realizar un registro con google
   * @param email
   * @param password
   */
  async SingInGoogle() {
    try {
      let res = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      await this.SignUp(res.user?.uid!, res.user?.displayName!, res.user?.email!)
    } catch (error) {
      console.log("Ocurrio un error con con el servidor")
    }
  }


  /**
  * metodo para iniciar sesion en la app
  * @param email
  * @param password
  */

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (this.verificacionEmail(result)) {
          this.getUserToken();
          this.status = true;
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }
  /**
   * Metodo para verificar si la cuenta se encuentra activa
   * @param result 
   * @returns verdadero o false
   */

  verificacionEmail(result: any): boolean {
    if (result.user?.emailVerified) {
      return true;
    }
    return false;
  }
  /**
   * Metodo para realizar el registro de usuario
   * @param name 
   * @param email 
   * @param password 
   */
  SignUp(name: string, email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password).then((result) => {
        this.SetUserData(result.user, name);
        this.verifyAccount()
      }).catch((error) =>
        console.log(error)
      )
  }


  /**
   * Metodo par enviar el correo de verificacion al usuario
   * @param email
   */

  verifyAccount() {
    this.afAuth.currentUser.then(user =>
      user?.sendEmailVerification())
  }

  /**
   * Metodo para la creacion de una coleccion de usuarios
   * @param user
   * @returns
   */
  async SetUserData(user: any, name: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: name,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return await userRef.set(userData, {
      merge: true,
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
  recovery(email: string) {
    return this.afAuth
      .sendPasswordResetEmail(email)

  }


  /**
   * metodo para cerrar la sesion y eliminar la sesion de localstora
   */

  logout() {
    this.afAuth.signOut();
    localStorage.removeItem("token")
  }
  /**
   * Metodo para obtener el token del usuario 
   * que ingreso al aplicativo por medio del incio de sesion
   */
  getUserToken(): void {
    this.afAuth.currentUser.then((user) => {
      user?.getIdToken().then((token) => {
        console.log(token)
        this.token = token;
        localStorage.setItem(environment.token, token);
      });
    });
  }
  /**
   * verificacion del
   * @returns 
   */

  verifyToken(): Observable<boolean> {
    if (localStorage.getItem("token")) {
      return of(true);
    }

    return of(false);
  }

  searchUser() {

  }

}