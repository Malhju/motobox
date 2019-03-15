import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'MotoBox';
  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(url) {
    this.router.navigate([url]);
  }
}
