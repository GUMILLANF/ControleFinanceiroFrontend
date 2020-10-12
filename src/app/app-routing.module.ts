import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { HomeComponent } from './pages/home/home.component';
import { ListAccountComponent } from './pages/list-account/list-account.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { LoginComponent } from './pages/login/login.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { NewTitleComponent } from './pages/new-title/new-title.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'title/new', component: NewTitleComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'category/new', component: NewCategoryComponent },
  { path: "category/edit/:id", component: EditCategoryComponent },
  { path: 'category', component: ListCategoryComponent },
  { path: 'account/new', component: NewAccountComponent },
  { path: "account/edit/:id", component: EditAccountComponent },
  { path: 'account', component: ListAccountComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
