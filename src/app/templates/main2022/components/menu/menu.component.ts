import { Component, OnInit } from '@angular/core';
import { TippyPropsModel } from '../../models/tippy-props.model';

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

  constructor() {
    this.coursesProps = TippyPropsModel.get('Cursos');
    this.chatProps = TippyPropsModel.get('Chat');
    this.calendarProps = TippyPropsModel.get('Calendario');
    this.notificationsProps = TippyPropsModel.get('Notificaciones');

    console.log(this.coursesProps);
  }

  ngOnInit(): void {}
}
