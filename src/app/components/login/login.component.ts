import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm() {
    if (this.username == "admin" && this.password == "1234") {
      this.router.navigateByUrl('/adminpage/dashboard');
    } else if (this.username == "faculty" && this.password == "1234") {
      this.router.navigateByUrl('/facultypage');
    } else if (this.username == "student" && this.password == "1234") {
      this.router.navigateByUrl('/studentpage');
    } else if (this.username == "company" && this.password == "1234") {
      this.router.navigateByUrl('/companypage');
    } else {
      alert('errorrrr');
    }
  }

}
