import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

const mockUser = {
	"email": "julien@mocktest.fr",
	"password": "abc",
	"firstName": "Julien",
	"lastName": "Laforge",
	"phone": "0123456789",
	"address": 
	{
		"street": "rue test",
		"number": "21",
		"postalcode": "01000",
		"city": "LYON"
	}
}

const mockLogin = {
    "email": "julien@mocktest.fr",
    "password": "abc"
}

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser() {
    this.http.post('http://localhost:8080/user', mockUser).subscribe(
        data => {
            console.log('POST Request is successful ', data);
        },
        error => {
            console.log('Error', error);
        }
    );
  }

  login() {
    this.http.post('http://localhost:8080/login', mockLogin, {observe: 'response'})
        .subscribe( (res => {
            console.log(res);
            console.log(res.headers.get('Authorization'));
            // console.log(res.headers.get('Authorization', {}));
        }));

    // this.httpClient.post(url, data, {observe: 'response'})
    // .map((res: HttpResponse<any>) => {
    //     let myHeader = res.headers.get('my-header');
    //     return res;
    // });

//     http
//   .get<any>('url', {observe: 'response'})
//   .subscribe(resp => {
//     console.log(resp.headers.get('X-Token'));
//   });
  }
}
