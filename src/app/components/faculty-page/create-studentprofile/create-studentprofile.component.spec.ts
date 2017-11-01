import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentprofileComponent } from './create-studentprofile.component';

describe('CreatestudentprofileComponent', () => {
  let component: CreateStudentprofileComponent;
  let fixture: ComponentFixture<CreateStudentprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStudentprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
