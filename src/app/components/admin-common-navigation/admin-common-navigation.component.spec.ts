import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommonNavigationComponent } from './admin-common-navigation.component';

describe('AdminCommonNavigationComponent', () => {
  let component: AdminCommonNavigationComponent;
  let fixture: ComponentFixture<AdminCommonNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCommonNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommonNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
