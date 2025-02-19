import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Controle Financeiro';

  constructor(location: Location, private router: Router) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('token') == null &&
      !location.pathname.includes('/validating')
    ) {
      this.router.navigate(['login']);
    }
  }

  public sair() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  public esconderBarra() {
    if (
      localStorage.getItem('token') !== null &&
      localStorage.getItem('token').toString().trim() !== null
    ) {
      return false;
    } else {
      return true;
    }
  }
}
