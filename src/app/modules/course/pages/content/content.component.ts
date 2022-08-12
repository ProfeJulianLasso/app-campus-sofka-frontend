import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/templates/main2022/services/menu.service';

@Component({
  selector: 'sofka-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  styles_content: boolean
  constructor(private menuService: MenuService) {
    this.styles_content = menuService.getCalendar();
  }

  ngOnInit(): void {
    this.menuService.flagCalendarChangue.subscribe({
      next: (flag: boolean) => {
        this.styles_content = flag;
      }
    });
    this.menuService.flagCalendarChangue.subscribe({
      next: (flag: boolean) => {
        this.styles_content = flag;
      }
    });
  }


}
