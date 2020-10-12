import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from 'src/app/model/Account';

@Component({
  selector: 'app-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.css']
})
export class FormAccountComponent {

  @Input() account: Account = <Account>{};
  @Input() edit: boolean;
  @Output() outputAccount: EventEmitter<Account> = new EventEmitter();

  onSubmit() {
    this.outputAccount.emit(this.account);
  }

}
