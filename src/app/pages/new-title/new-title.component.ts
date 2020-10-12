import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/Account';
import { Category } from 'src/app/model/Category';
import { Title } from 'src/app/model/Title';
import { AccountService } from 'src/app/services/account.service';
import { CategoryService } from 'src/app/services/category.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-new-title',
  templateUrl: './new-title.component.html',
  styleUrls: ['./new-title.component.css']
})
export class NewTitleComponent implements OnInit {

  title = new Title();
  account = new Account();
  category = new Category();
  public accounts: Account[];
  public categories: Category[];

  constructor(private titleService: TitleService, private accountService: AccountService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getListaContas();
    this.getListaCategorias();
  }

  onSubmit() {
    this.title.account = this.account;
    this.title.category = this.category;
    this.title.type = this.category.type;
    this.titleService.addTitle(this.title)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { alert('Falha ao cadastrar titulo'); });
  }

  getListaContas() {
    this.accountService.getListAccounts()
        .subscribe((accounts: Account[]) => {
          this.accounts = accounts;
        }, () => alert('Falha ao listar contas'))
  }

  getListaCategorias() {
    this.categoryService.getListCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      }, () => { alert('Falha ao lista categorias'); });
  }

}
