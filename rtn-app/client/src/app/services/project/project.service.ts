import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjectById(id) {
    return this.http.get(`http://localhost:3000/api/projects/${id}`);
  }
}
