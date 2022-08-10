import { TestBed } from '@angular/core/testing';

import { CourseTopicsService } from './course-topics.service';

describe('CourseTopicsService', () => {
  let service: CourseTopicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseTopicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
