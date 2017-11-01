import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInquiryViewComponent } from './admin-inquiry-view.component';

describe('AdminInquiryViewComponent', () => {
  let component: AdminInquiryViewComponent;
  let fixture: ComponentFixture<AdminInquiryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInquiryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInquiryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
