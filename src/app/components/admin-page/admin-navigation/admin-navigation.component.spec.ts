import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyService } from '../../../services/callers/company.service';
import { CompanyModel } from '../../../models/company.model';
import { AdminNavigationComponent } from './admin-navigation.component';

describe('AdminNavigationComponent', () => {
  let component: AdminNavigationComponent;
  let fixture: ComponentFixture<AdminNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
