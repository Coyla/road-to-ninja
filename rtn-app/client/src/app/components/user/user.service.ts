import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http : HttpClient) { }
  getAllUsers(){
    return this.http.get('http://localhost:3000/api/users')
  }
}