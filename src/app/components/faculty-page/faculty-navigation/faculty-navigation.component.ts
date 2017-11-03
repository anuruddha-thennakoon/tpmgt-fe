import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Router } from '@angular/router';
import { studentModel } from '../../../models/student.model';
import { StudentService } from '../../../services/callers/student.service';

@Component({
  selector: 'app-faculty-navigation',
  templateUrl: './faculty-navigation.component.html',
  styleUrls: ['./faculty-navigation.component.css']
})
export class FacultyNavigationComponent implements OnInit {

  constructor(
    private store: StoreService,
    private router: Router,
    private student: StudentService
  ) { }
  ngOnInit() {
  }


  goToTaineeRecords() {
   

    this.student.getALLStudents()
    .then(result => {
      this.store.studentList = new Array<studentModel>();
      this.store.studentList = JSON.parse(JSON.stringify(result));
      this.router.navigateByUrl('/facultypage/traineerecords');
    }).catch(error => {
      console.log(error);
    });
  }

  goToReportsfac() {
    this.router.navigateByUrl('/facultypage/reportsfac');
  }

  goToPublishments() {
    this.router.navigateByUrl('/facultypage/publishments');
  }

  goToManagestudent(){
    this.router.navigateByUrl('/facultypage/managestudent');
  }
  goTofacultyhome(){
    this.router.navigateByUrl('/facultypage/academic');
  }


  

}
