import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  constructor(private http: HttpClient) { }


  registerUser(use: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/api/register` , use);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/api/getUsers`);
  }

   updateUser(person: User) {
     return this.http.put(`http://localhost:3000/api/update/${person._id}`, person);
   }
}
