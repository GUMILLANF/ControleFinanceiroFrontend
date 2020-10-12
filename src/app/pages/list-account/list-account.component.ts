import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  public accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getListaContas();
  }

  getListaContas() {
    this.accountService.getListAccounts()
      .subscribe((accounts: Account[]) => {
        this.accounts = accounts;
      }, () => { alert('Falha ao lista contas'); });
  }

  deletaConta(id: string) {
    this.accountService.deleteAccount(id)
      .subscribe(() => {
        this.getListaContas();
      }, () => { alert('Falha ao deletar conta'); });
  }

  existemContas(): boolean {
    return this.accounts && this.accounts.length > 0;
  }

}
