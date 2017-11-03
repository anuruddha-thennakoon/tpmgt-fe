import { Component, OnInit } from '@angular/core';
import { studentModel } from '../../../models/student.model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-traineerecords-page',
  templateUrl: './trainee-records.component.html',
  styleUrls: ['./trainee-records.component.css']
})
export class TraineeRecordsComponent implements OnInit {


  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {}

}
