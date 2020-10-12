import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/Category';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent {

  @Input() category: Category = <Category>{};
  @Output() outputCategory: EventEmitter<Category> = new EventEmitter();

  onSubmit() {
    this.outputCategory.emit(this.category);
  }

}
