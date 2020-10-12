import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpInterceptorModule } from './services/header-interceptor.service';
import { HomeComponent } from './pages/home/home.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { NewTitleComponent } from './pages/new-title/new-title.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { FormAccountComponent } from './components/form-account/form-account.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { ListAccountComponent } from './pages/list-account/list-account.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, RegisterUserComponent, NewTitleComponent, ListCategoryComponent, NewCategoryComponent, EditCategoryComponent, FormCategoryComponent, FormAccountComponent, EditAccountComponent, NewAccountComponent, ListAccountComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
