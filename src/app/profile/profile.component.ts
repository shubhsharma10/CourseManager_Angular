import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) { }
  user: User = new User();
  userNotLoggedIn = false;
  isAdminUser = false;
  update(user: User) {
    console.log(user);
    this.userService
      .updateProfile(user)
      .then(function(result) {
       console.log(result);
      });
  }
  logout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['login']));
  }
  ngOnInit() {
    this.userService
      .profile()
      .then((result) => {
      this.userNotLoggedIn = false;
      this.user = result as User;
      console.log(this.user.userType);
      if (this.user.userType === 'Admin') {
        this.isAdminUser = true;
      }
      })
      .catch(() => {
      this.userNotLoggedIn = true;
      });
  }
}
