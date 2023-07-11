import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    return this.http.post('/api/login', { username, password });
  }
}
