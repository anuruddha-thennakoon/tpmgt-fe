import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishmentsComponent } from './publishments.component';

describe('PublishmentsComponent', () => {
  let component: PublishmentsComponent;
  let fixture: ComponentFixture<PublishmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
