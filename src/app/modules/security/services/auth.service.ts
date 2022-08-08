import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { User } from '../interfaces/IUser';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from './firebase-code-error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private toastr: ToastrService,
    private firebaseError: FirebaseCodeErrorService,
    public router: Router
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('id', user.uid!);
        localStorage.setItem('name', user.displayName!);
        localStorage.setItem('email', user.email!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
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
          this.router.navigate(['/dashboard']);
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }



  verificacionEmail(result: any): Boolean {
    if (result.user?.emailVerified) {
      return true;
    }
    return false;
  }
  /**
   * Metodo para realizar el registro de usuario
   * @param email
   * @param password
   */
  async SignUp(name: string, email: string, password: string) {
    try {
      const result = await this.afAuth
        .createUserWithEmailAndPassword(email, password);
      await this.SetUserData(result.user, name);
      this.verifyAccount()
    } catch (error) {
      console.log(error)
    }
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
      name: name,
      email: user.email,
      displayName: user.displayName,
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
    this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.router.navigate(['/login']);
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

  /**
   * metodo que retonar el usuario logeado
   * @returns usuario logeado
   */
  getUserLogged() {
    this.afAuth.authState.subscribe((user) =>
      console.log(user)
    );
  }
  /**
   * metodo para cerrar la sesion y eliminar la sesion de localstora
   */

  logout() {
    this.afAuth.signOut();
    localStorage.removeItem("id")
    localStorage.removeItem("email")
  }
  /**
   * metodo para verificar si un usuario esta activo
   * @returns
   */
  // verifySession(): Observable<boolean> {
  //   const id = localStorage.getItem("id");
  //   if (!localStorage.getItem("id")) {
  //     return of(false);
  //   }
  //   return this.http.get<Player>(`${this.urlRequestMongo}/listplayer/${id}`).pipe(
  //     map(auth => {
  //       return true;
  //     })
  //   )
  // }

  // SetUserData(user: any) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(
  //     `users/${user.uid}`
  //   );
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName
  //   };
  //   return userRef.set(userData, {
  //     merge: true,
  //   });
  // }

}
