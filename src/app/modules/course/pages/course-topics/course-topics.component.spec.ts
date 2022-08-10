import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTopicsComponent } from './course-topics.component';

describe('CourseTopicsComponent', () => {
  let component: CourseTopicsComponent;
  let fixture: ComponentFixture<CourseTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
