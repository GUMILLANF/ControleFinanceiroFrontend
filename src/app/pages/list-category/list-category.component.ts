import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  public categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getListaCategorias();
  }

  getListaCategorias() {
    this.categoryService.getListCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      }, () => { alert('Falha ao lista categorias'); });
  }

  deletaCategoria(id: string) {
    this.categoryService.deleteCategory(id)
      .subscribe(() => {
        this.getListaCategorias();
      }, () => { alert('Falha ao deletar categorias'); });
  }

  existemCategorias(): boolean {
    return this.categories && this.categories.length > 0;
  }

}
