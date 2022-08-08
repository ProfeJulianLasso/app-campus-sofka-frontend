import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
