import { Component } from '@angular/core';
import { MenuService } from 'src/app/templates/main2022/services/menu.service';

@Component({
  selector: 'sofka-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  btnCancelar: boolean;

  constructor(private menu$: MenuService) {
    this.btnCancelar = true;
  }

  change(): void {
    this.menu$.changeFlag(this.menu$.getFlag() ? false : true);
  }
}
