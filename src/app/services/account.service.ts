import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Account } from '../model/Account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {}

  getListAccounts(): Observable<Account[]> {
    const url = `${AppConstants.baseAccount}`;
    return this.http.get<Account[]>(url);
  }

  getAccount(id: string): Observable<Account> {
    const url = `${AppConstants.baseAccount}/${id}`;
    return this.http.get<Account>(url);
  }

  addAccount(account: Account): Observable<Account> {
    const url = `${AppConstants.baseAccount}`;
    return this.http.post<Account>(url, account);
  }

  deleteAccount(id: string): Observable<Account> {
    const url = `${AppConstants.baseAccount}/${id}`;
    return this.http.delete<Account>(url);
  }

  editAccount(account: Account): Observable<Account> {
    const url = `${AppConstants.baseAccount}/${account._id}`;
    return this.http.put<Account>(url, account);
  }
}
