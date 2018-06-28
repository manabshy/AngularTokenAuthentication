import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  messages = []

  path = 'http://localhost:5000/auth' 

  TOKEN_KEY = 'token'


  constructor(private http: HttpClient) {
    console.log('auth service called');
   }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY)
   }
  
  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY)
  }
  
  logout() {
    localStorage.removeItem(this.TOKEN_KEY)
  }
   registerUser(registerData) {
    console.log('In registerData:', registerData);
      this.http.post<any>(this.path + '/register', registerData).subscribe(res => { 
      this.saveToken(res.token)
    })
    }
    loginUser(loginData) {
      this.http.post<any>(this.path + '/login', loginData).subscribe (res => {
        console.log('res:',res);
        this.saveToken(res.token)
      })
    }
    saveToken(token) {
      localStorage.setItem(this.TOKEN_KEY,token)

    }

}   
  



