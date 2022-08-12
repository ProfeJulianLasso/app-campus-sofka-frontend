import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/IUser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sofka-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  users: User[] = []
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
    this.authService.afAuth.authState.subscribe((user) => {
      const userData: User = {
        uid: user?.uid,
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        emailVerified: user?.emailVerified,
      };

      this.users.push(userData);
    });
  }
  logoutUser() {
    this.authService.logout();
    this.router.navigate(["/singin"]);
  }
}
