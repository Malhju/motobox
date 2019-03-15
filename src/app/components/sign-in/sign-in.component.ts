import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isScrapYard = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  setBuyer() {
    this.isScrapYard = false;
  }

  setSeller() {
    this.isScrapYard = true;
  }

  sendMock() {
    this.userService.createUser();
  }

}
