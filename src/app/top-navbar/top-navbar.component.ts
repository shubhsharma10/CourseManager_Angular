import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor(private userService: UserServiceClient) { }
  user: User = new User();
  ngOnInit() {
    this.userService
      .isUserLoggedIn()
      .then((result) => {
        if (result.status === 200) {
          return this.userService.profile();
        } else {
          throw new Error('No user logged in');
        }
      })
      .then((result) => {
        this.user = result as User;
      })
      .catch(() => {
        console.log('No user logged in');
      });
  }

}
