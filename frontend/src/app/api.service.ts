import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
@Injectable()
export class ApiService {
  messages = []
  constructor(private http: Http) {

  }
  getMessages () {
    this.http.get('http://localhost:5000/posts').subscribe (res => {
      this.messages = res.json()
      console.log('Messages:',this.messages)
    })
  }
}
