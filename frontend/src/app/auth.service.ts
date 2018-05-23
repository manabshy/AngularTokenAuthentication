import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) {
    console.log('auth service called');
   }
   registerUser(registerData) {
    console.log('In registerData:', registerData);
      this.http.post('http://localhost:5000/register', registerData).subscribe(res => {
      })
    }
    loginUser(loginData) {
      this.http.post('http://localhost:5000/login', loginData).subscribe (res => {
        console.log('res:',res);
        localStorage.setItem('token', res.json().token);
      })
    }

}   
  


