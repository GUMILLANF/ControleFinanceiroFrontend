import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
  }

  login(user) {
    return this.http
      .post(`${AppConstants.baseUser}/login`, JSON.stringify(user), {
        headers: this.headers,
      })
      .subscribe((data) => {
        var token = JSON.parse(JSON.stringify(data)).token;

        localStorage.setItem('token', token);
        console.info('Token: ' + localStorage.getItem('token'));
        this.router.navigate(['home']);
      },
      (erro) => {
        alert('Login ou senha inválido')
      });
  }
}
