import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  private _registerUrl = `http://localhost:3000/api/register`;
  private _retrieveUrl = `http://localhost:3000/api/getUsers`;
  //private _UpdateUrl = `http://localhost:3000/api/update/${User._id}`;


  constructor(private http: HttpClient) { }


  registerUser(use: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/api/register` , use);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/api/getUsers`);
  }

   updateUser(user: User) {
     return this.http.get(`http://localhost:3000/api/update/${user.id}` );
   }
}
