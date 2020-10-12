import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/model/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent {

  public account: Account;

  constructor(private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
      this.getConta(this.activatedRoute.snapshot.params.id);
    }

    getConta(id: string) {
      this.accountService.getAccount(id)
        .subscribe((account: Account) => {
          this.account = account;
        }, () => { alert('Falha ao buscar Conta.'); });
    }

    atualizaConta(account: Account) {
      this.accountService.editAccount(account)
        .subscribe(
          () => { this.router.navigateByUrl('/'); },
          () => { alert('Falha ao atualizar conta.'); })
    }

}
