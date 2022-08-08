import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../templates/main2022/services/dashboard.service';
import { DashboardComponent } from '../../../../templates/main2022/components/dashboard/dashboard.component';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}

  courseAll(){
    
  }

}
