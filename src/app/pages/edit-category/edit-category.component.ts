import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {

  public category: Category;

  constructor(private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
      this.getCategoria(this.activatedRoute.snapshot.params.id);
    }

    getCategoria(id: string) {
      this.categoryService.getCategory(id)
        .subscribe((category: Category) => {
          this.category = category;
        }, () => { alert('Falha ao buscar lembrete.'); });
    }

    atualizaCategoria(category: Category) {
      this.categoryService.editCategory(category)
        .subscribe(
          () => { this.router.navigateByUrl('/'); },
          () => { alert('Falha ao atualizar lembrete.'); })
    }

}
