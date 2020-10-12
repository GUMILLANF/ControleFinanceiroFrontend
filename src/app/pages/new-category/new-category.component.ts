import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent {

  constructor(private categoryService: CategoryService, private router: Router) { }

  addCategoria(category: Category) {
    this.categoryService.addCategory(category)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { alert('Falha ao cadastrar categoria'); });
  }

}
