import { Component, Input, Output, EventEmitter, output  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TItems } from '../Models/models';

@Component({
  selector: 'app-to-do-list-item',
  imports: [CommonModule],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.css'
})
export class ToDoListItemComponent {

  @Input() itemsList: TItems| undefined;
  @Output() dltItem = new EventEmitter<number>();

  deleteItem(id:number): void {
    if (this.itemsList)
    {
      this.dltItem.emit(id);
      console.log(this.itemsList);
    }
  }
  
}
