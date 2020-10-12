import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { User } from '../model/User';
import { Title } from '../model/Title';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {}

  getListTitles(): Observable<Title[]> {
    const url = `${AppConstants.baseTitle}`;
    return this.http.get<Title[]>(url);
  }

  getTitle(id: number): Observable<Title> {
    const url = `${AppConstants.baseTitle}/${id}`;
    return this.http.get<Title>(url);
  }

  addTitle(title: Title): Observable<Title> {
    const url = `${AppConstants.baseTitle}`;
    return this.http.post<Title>(url, title);
  }

  deleteTitle(id: string): Observable<Title> {
    const url = `${AppConstants.baseTitle}/${id}`;
    return this.http.delete<Title>(url);
  }
}
