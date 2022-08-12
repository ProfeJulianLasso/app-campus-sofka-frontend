import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modules/security/components/modal/modal.component';
ModalComponent
@Component({
  selector: 'sofka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() name?: string;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  openModal() {
    this.dialog.open(ModalComponent, {
      width: '400px',
      height: '350px',
      disableClose: true,
      autoFocus: false
    });
  }
}
