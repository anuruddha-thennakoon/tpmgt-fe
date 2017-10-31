import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCommonNavigationComponent } from './faculty-common-navigation.component';

describe('FacultyCommonNavigationComponent', () => {
  let component: FacultyCommonNavigationComponent;
  let fixture: ComponentFixture<FacultyCommonNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyCommonNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCommonNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
