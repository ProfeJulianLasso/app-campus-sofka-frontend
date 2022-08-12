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
  user: User = {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    emailVerified: false
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.authService.getUserLogged())
  }
  logoutUser() {
    this.authService.logout();
    this.router.navigate(["/singin"]);
  }
}
