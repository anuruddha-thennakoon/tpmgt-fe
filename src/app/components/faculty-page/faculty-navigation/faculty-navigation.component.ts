import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-navigation',
  templateUrl: './faculty-navigation.component.html',
  styleUrls: ['./faculty-navigation.component.css']
})
export class FacultyNavigationComponent implements OnInit {

  constructor(
    private store: StoreService,
    private router: Router
  ) { }
  ngOnInit() {
  }


  goToTaineeRecords() {
    this.router.navigateByUrl('/facultypage/traineerecords');
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
