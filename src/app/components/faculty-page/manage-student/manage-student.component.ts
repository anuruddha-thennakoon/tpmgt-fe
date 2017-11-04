import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/callers/student.service';
import { studentModel } from '../../../models/student.model';
import { StoreService } from '../../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managestudent-page',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {

  newStudent: studentModel = new studentModel();

  constructor(

    private store: StoreService,
    private student: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  createStudent() {
    this.student.createstudent(this.newStudent)
      .then(result => {
        this.newStudent.studentName = "";
        this.newStudent.nic = "";
        this.newStudent.faculty = "";
        this.newStudent.feildOfStudy = "";
        this.newStudent.year = "";
        console.log(result);
      }).catch(error => {
        console.log(error);
      });
  }

  deleteStudent(req, res) {
    this.student.deletetudent(this.newStudent)
    .then((
      
    ) => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}




}
