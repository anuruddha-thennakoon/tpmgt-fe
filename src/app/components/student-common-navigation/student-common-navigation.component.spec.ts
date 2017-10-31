import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCommonNavigationComponent } from './student-common-navigation.component';

describe('StudentCommonNavigationComponent', () => {
  let component: StudentCommonNavigationComponent;
  let fixture: ComponentFixture<StudentCommonNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCommonNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCommonNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
