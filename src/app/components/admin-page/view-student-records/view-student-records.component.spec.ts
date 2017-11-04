import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentRecordsComponent } from './view-student-records.component';

describe('ViewStudentRecordsComponent', () => {
  let component: ViewStudentRecordsComponent;
  let fixture: ComponentFixture<ViewStudentRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudentRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
