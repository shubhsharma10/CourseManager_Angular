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
  isUsernameInUse = false;
  isPasswordNotSame = false;
  register(username, password, password2){
    console.log(username);
    console.log(password);
    console.log(password2);
    if (password !== password2) {
      this.isPasswordNotSame = true;
    } else {
      this.isPasswordNotSame = false;
      this.userService
        .createUser(username, password)
        .then((result) => {
          if (result.status === 422) {
            this.isUsernameInUse = true;
            throw new Error('username already in use');
          } else {
            this.isUsernameInUse = false;
            return this.router.navigate(['profile']);
          }
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  ngOnInit() {
  }

}
