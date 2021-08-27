import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class BlackalertService {

  baseURL:String = "https://blackoutwarning.herokuapp.com/users/"

  newBlackoutAlert(bool:boolean):Observable<any>{

    if(bool == true){
      return this.http.get<any>(`https://blackoutwarning.herokuapp.com/blackouts/new`
    )
    }else{
      console.log("You currently have access to electricity")
    }
    return this.http.get<any>(`https://blackoutwarning.herokuapp.com/blackouts`)
    
  }

  addUser(user:User){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(user) 
 
    return this.http.post<User>(this.baseURL + 'new', body,{'headers':headers})
  }

  getUsersWithBlackoutId():Observable<any>{
    return this.http.get<any>(`https://blackoutwarning.herokuapp.com/blackouts/1/users`)
  }

  constructor(private http:HttpClient ) { }

}
