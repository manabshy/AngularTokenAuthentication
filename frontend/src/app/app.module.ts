import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Router } from '@angular/router'
import { HttpModule } from '@angular/http'
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatCardModule, MatFormField} from '@angular/material';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { AuthService } from './auth.service'

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent, MessagesComponent, RegisterComponent, LoginComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    RouterModule.forRoot(routes), 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatCheckboxModule, 
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
