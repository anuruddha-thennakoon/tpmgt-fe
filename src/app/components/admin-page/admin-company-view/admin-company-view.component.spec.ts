import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyViewComponent } from './admin-company-view.component';

describe('AdminCompanyViewComponent', () => {
  let component: AdminCompanyViewComponent;
  let fixture: ComponentFixture<AdminCompanyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
