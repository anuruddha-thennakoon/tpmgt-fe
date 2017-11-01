import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishVacanciesComponent } from './publish-vacancies.component';

describe('PublishVacanciesComponent', () => {
  let component: PublishVacanciesComponent;
  let fixture: ComponentFixture<PublishVacanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishVacanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
