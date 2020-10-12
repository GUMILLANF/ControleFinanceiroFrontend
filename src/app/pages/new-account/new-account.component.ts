import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountService: AccountService, private router: Router) { }

  addConta(account: Account) {
    this.accountService.addAccount(account)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { alert('Falha ao cadastrar conta'); });
  }

}

