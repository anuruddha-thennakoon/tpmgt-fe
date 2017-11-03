import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResumeButtonComponent } from './create-resume-button.component';

describe('CreateResumeButtonComponent', () => {
  let component: CreateResumeButtonComponent;
  let fixture: ComponentFixture<CreateResumeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResumeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResumeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
