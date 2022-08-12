import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TippyPropsModel } from '../../models/tippy-props.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'sofka-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  coursesProps: TippyPropsModel;
  chatProps: TippyPropsModel;
  calendarProps: TippyPropsModel;
  notificationsProps: TippyPropsModel;

  constructor(private MenuService: MenuService, private router: Router) {
    this.coursesProps = TippyPropsModel.get('Cursos');
    this.chatProps = TippyPropsModel.get('Chat');
    this.calendarProps = TippyPropsModel.get('Calendario');
    this.notificationsProps = TippyPropsModel.get('Notificaciones');
  }

  ngOnInit(): void { }

  openCalendar(): void {
    this.MenuService.changueCalendar(true)
  }
  course() {
    this.router.navigate(["/course"])
  }
}
