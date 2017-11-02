import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInternComponent } from './company-intern.component';

describe('CompanyInternComponent', () => {
  let component: CompanyInternComponent;
  let fixture: ComponentFixture<CompanyInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
