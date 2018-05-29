import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
@Injectable()
export class ApiService {
  messages = []
  users = []
  constructor(private http: Http) {

  }
  getMessages () {
    this.http.get('http://localhost:5000/posts').subscribe (res => {
      this.messages = res.json()
      console.log('Messages:',this.messages)
    })
  }
  getUsers () {
    this.http.get('http://localhost:5000/users').subscribe (res => {
      this.users = res.json();
      for(let user of this.users) {
        console.log('Users:', user.email)
      }
    })
  }
  getProfile(id) {
      return this.http.get('http://localhost:5000/profile/' + id)
  }
}
