import { Injectable } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'
import { nextTick } from 'q';
import { AuthService} from './auth.service'
@Injectable()

export class AuthInterceptorService implements HttpInterceptor {
    constructor(private auth: AuthService) {}
    intercept( req, next) {
        console.log("req:",req);
        var authRequest = req.clone({
            headers: req.headers.set('Authorization','token ' + this.auth.token)
        })
        return next.handle(authRequest)
    }
}