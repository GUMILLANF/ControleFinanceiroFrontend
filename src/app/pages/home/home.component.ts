import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/model/Title';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulos: Title[];

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.getListTitles();
  }

  getListTitles() {
    this.titleService.getListTitles()
      .subscribe((titulos: Title[]) => {
        this.titulos = titulos;
      }, () => { alert('Falha ao buscar titulos.') });
  }

  deleteTitle(id: string) {
    this.titleService.deleteTitle(id)
      .subscribe(() => {
        this.getListTitles();
      }, () => { alert('Falha ao deletar titulo.'); });
  }

  existemTitulos(): boolean {
    return this.titulos && this.titulos.length > 0;
  }

}
