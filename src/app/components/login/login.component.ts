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

  login() {
    if (this.username == "admin" && this.password == "1234") {
      this.router.navigateByUrl('/adminpage');
    } else if (this.username == "faculty" && this.password == "1234") {
      this.router.navigateByUrl('/adminpage');
    } else if (this.username == "student" && this.password == "1234") {
      this.router.navigateByUrl('/adminpage');
    } else if (this.username == "company" && this.password == "1234") {
      this.router.navigateByUrl('/adminpage');
    } else {
      alert('errorrrr');
    }
  }
}
