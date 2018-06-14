import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  user: User = new User();
  login() {
    this.userService
      .login(this.user)
      .then((result) => {
        console.log(result);
        this.router.navigate(['profile']);})
      .catch((error) => {
      console.log(error);});
  }

  ngOnInit() {
  }

}
