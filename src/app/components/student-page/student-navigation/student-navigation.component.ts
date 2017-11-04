import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-navigation',
  templateUrl: './student-navigation.component.html',
  styleUrls: ['./student-navigation.component.css']
})
export class StudentNavigationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


goJobs() {
    this.router.navigateByUrl('/studentpage/jobs');
  }

  goProfile() {
    this.router.navigateByUrl('/studentpage/studentprofile');
  }

 createResume() {
    this.router.navigateByUrl('/studentpage/createresume');
  }

   studentHelp() {
    this.router.navigateByUrl('/studentpage/studenthelp');
  }
}
