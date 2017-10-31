import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyNavigationComponent } from './faculty-navigation.component';

describe('FacultyNavigationComponent', () => {
  let component: FacultyNavigationComponent;
  let fixture: ComponentFixture<FacultyNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
