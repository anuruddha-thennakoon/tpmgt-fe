import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCommonNavigationComponent } from './company-common-navigation.component';

describe('CompanyCommonNavigationComponent', () => {
  let component: CompanyCommonNavigationComponent;
  let fixture: ComponentFixture<CompanyCommonNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCommonNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCommonNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
