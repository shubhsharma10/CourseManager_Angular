import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) { }
  username: string;
  password: string;
  password2: string;
  register(username, password, password2){
    console.log(username);
    console.log(password);
    console.log(password2);
    this.userService
      .logout()
      .then(() => {
        return this.userService
          .createUser(username, password);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.router.navigate(['profile']);
      });
  }

  ngOnInit() {
  }

}
