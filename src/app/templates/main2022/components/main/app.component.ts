import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'sofka-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuFlag: boolean;

  constructor(private menu$: MenuService) {
    this.menuFlag = this.menu$.getFlag();
  }

  ngOnInit() {
    this.menu$.flagChanged.subscribe({
      next: (flag: boolean) => {
        this.menuFlag = flag;
      }
    });
  }
}
