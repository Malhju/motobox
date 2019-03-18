import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  title = 'MotoBox';
  isLoggedIn: boolean;

  constructor(private router: Router, private userService: UserService) { }

  ngDoCheck() {
    this.isLoggedIn = this.userService.isLogged();
  }

  navigateTo(url) {
    this.router.navigate([url]);
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('motoboxToken');
    this.router.navigate(['']);
  }
}
