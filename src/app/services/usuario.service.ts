import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
  }

  salvarUser(user): Observable<any> {
    const url = `${AppConstants.baseUser}/new`;
    return this.http.post<any>(url, user);
  }
}
