import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  public getToken(): string {
    return localStorage.getItem('token');
  }
}
