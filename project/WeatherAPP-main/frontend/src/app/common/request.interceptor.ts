import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';


@Injectable({
    providedIn:"root"
})
export class RequestInterceptor implements HttpInterceptor{
    
    constructor(private authService:AuthenticationService){
        
    }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const loggedIn:boolean= this.authService.isLoggedIn();  //true or false 
       if(!loggedIn){
           return next.handle(request);
       } 
       const token:string=this.authService.getToken();
       console.log("fromrequestintercept"+token);
       const headers:HttpHeaders=new HttpHeaders({token});
       request=request.clone({headers});
       return next.handle(request);
    }

}