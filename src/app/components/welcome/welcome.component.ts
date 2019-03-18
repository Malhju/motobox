import { Component, OnInit } from '@angular/core';

import { AdService } from './../../services/ad.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  ads;

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.getAds().subscribe( res => {
        console.log(res);
        this.ads = res;
    });
  }
}
