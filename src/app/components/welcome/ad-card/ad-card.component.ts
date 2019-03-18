import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.css']
})
export class AdCardComponent implements OnInit, DoCheck {

  isLogged = false;
  @Input() ad;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isLogged = this.userService.isLogged();
  }
}
