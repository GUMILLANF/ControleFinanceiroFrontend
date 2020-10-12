import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {}

  getListCategories(): Observable<Category[]> {
    const url = `${AppConstants.baseCategory}`;
    return this.http.get<Category[]>(url);
  }

  getCategory(id: string): Observable<Category> {
    const url = `${AppConstants.baseCategory}/${id}`;
    return this.http.get<Category>(url);
  }

  addCategory(category: Category): Observable<Category> {
    const url = `${AppConstants.baseCategory}`;
    return this.http.post<Category>(url, category);
  }

  deleteCategory(id: string): Observable<Category> {
    const url = `${AppConstants.baseCategory}/${id}`;
    return this.http.delete<Category>(url);
  }

  editCategory(category: Category): Observable<Category> {
    const url = `${AppConstants.baseCategory}/${category._id}`;
    return this.http.put<Category>(url, category);
  }
}
