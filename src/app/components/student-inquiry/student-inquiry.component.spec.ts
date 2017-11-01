import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInquiryComponent } from './student-inquiry.component';

describe('StudentInquiryComponent', () => {
  let component: StudentInquiryComponent;
  let fixture: ComponentFixture<StudentInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
