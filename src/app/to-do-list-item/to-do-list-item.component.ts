import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TItems } from '../Interface/Interface';
import { ButtonComponent } from '../button/button.component';
import { TooltipsItemDirective } from "../shared/tooltips-item.directive";

@Component({
  selector: 'app-to-do-list-item',
  imports: [CommonModule, ButtonComponent, TooltipsItemDirective],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.css',
})
export class ToDoListItemComponent {

  itemsList = input<TItems>();
  dltItem = output<number>();


  deleteItem(id:number): void {
    if (this.itemsList())
    {
      this.dltItem.emit(id);
      //console.log(this.itemsList);
    }
  }
  
}
