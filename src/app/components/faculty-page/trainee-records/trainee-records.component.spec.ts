import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeRecordsComponent } from './trainee-records.component';

describe('TraineeRecordsComponent', () => {
  let component: TraineeRecordsComponent;
  let fixture: ComponentFixture<TraineeRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
