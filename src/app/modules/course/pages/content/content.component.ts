import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/templates/main2022/services/menu.service';
import { CourseTopicsService } from '../../services/course-topics.service';
import { Step } from '../../interfaces/IStep';
import { Router } from '@angular/router';
@Component({
  selector: 'sofka-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  styles_content: boolean
  step: Step[] = [];
  constructor(private menuService: MenuService, private courseService: CourseTopicsService, private routers: Router) {
    this.styles_content = menuService.getCalendar();
    localStorage.setItem("idTopic", "d60858d1-60fe-4156-9d10-206bbb9e2ab1");
  }

  ngOnInit(): void {
    this.menuService.flagCalendarChangue.subscribe({
      next: (flag: boolean) => {
        this.styles_content = flag;
      }
    });
    this.getstep();
  }

  getstep() {
    this.courseService.getStep().subscribe(res => {
      this.step.push(...res);
    })
  }
  router(id: string, item: string) {
    console.log(item);
    this.routers.navigate([`course/course-content/${item}/${id}`])
  }

}
