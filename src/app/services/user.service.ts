import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Router } from '@angular/router';

const url = 'http://localhost:8080';

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
};

// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Authorization': 'my-auth-token'
//     })
//   };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  isLogged() {
    if (localStorage.getItem('motoboxToken')) {
        return true;
    }
    return false;
  }

  createUser() {
    this.http.post( url + '/user', mockUser).subscribe(
        data => {
            console.log('POST Request is successful ', data);
        },
        error => {
            console.log('Error', error);
        }
    );
  }

  login(loginDatas) {
    this.http.post( url + '/login', loginDatas, {observe: 'response'})
        .subscribe( res => {
            localStorage.setItem('motoboxToken', res.headers.get('Authorization'));
            this.router.navigate(['/']);
        },
        err => {
            if (err.status === 403) {
                console.log('Erreur de connection');
            }
        });
  }

  logout() {
    return true;
  }
}
