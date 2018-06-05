import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Router } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import {MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatInputModule, 
  MatCardModule, 
  MatFormField, 
  MatListModule} from '@angular/material';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { UsersComponent } from './users.component'
import { PostComponent } from './post.component'

import { ProfileComponent } from './profile.component'
import { AuthService } from './auth.service'

const routes = [
  {path: '', component: PostComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'profile/:id', component: ProfileComponent},
]
@NgModule({
  declarations: [
    AppComponent, 
    MessagesComponent, 
    RegisterComponent, 
    LoginComponent, 
    UsersComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes), 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatCheckboxModule, 
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
