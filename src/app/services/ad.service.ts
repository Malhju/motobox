import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import adsData from '../../assets/mocks/adsList.json';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AdService {

//   adsList = adsData;

  constructor(private http: HttpClient) { }

  getAds(): Observable<any> {
    return this.http.get(url + '/ads');
  }
}
