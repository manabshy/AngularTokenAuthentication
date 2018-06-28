import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';
@Injectable()
export class ApiService {
  messages = []
  users = []
  path = environment.path
  constructor(private http: HttpClient) {

  }
  postMessage (message) {
    this.http.post(this.path + '/post', message).subscribe (res => {
    })
  }

  getMessages (userId) {
    this.http.get<any>(this.path + '/posts/' + userId).subscribe (res => {
      this.messages = res
      console.log('Messages:',this.messages)
    })
  }
  getUsers () {
    this.http.get<any>(this.path + '/users').subscribe (res => {
      this.users = res;
      for(let user of this.users) {
        console.log('Users:', user.email)
      }
    })
  }
  getProfile(id) {
      return this.http.get(this.path + '/profile/' + id)
  }
}
