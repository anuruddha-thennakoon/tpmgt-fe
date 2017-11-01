import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsFacComponent } from './reports.component';

describe('ReportsFacComponent', () => {
  let component: ReportsFacComponent;
  let fixture: ComponentFixture<ReportsFacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsFacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
