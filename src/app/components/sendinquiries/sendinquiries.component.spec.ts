import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendinquiriesComponent } from './sendinquiries.component';

describe('SendinquiriesComponent', () => {
  let component: SendinquiriesComponent;
  let fixture: ComponentFixture<SendinquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendinquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendinquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
