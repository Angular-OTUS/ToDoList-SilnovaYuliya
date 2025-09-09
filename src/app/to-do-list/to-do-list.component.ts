import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 

type TItems = {
  id: number,
  name: string
}

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule, FormsModule, MatInputModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

items: TItems[] = [
  {id: 1, name: 'Добавить картинки'},
  {id: 2, name: 'Написать текст'},
  {id: 3, name: 'Сложить числа'},
]

ActiveAdd: boolean = false;
newItem: string = '';
idMax: number = 0;

delItem(id:number): void {
  if (this.items)
  {
    this.items = this.items.filter(item => item.id !== id)
    console.log(this.items);
  }
}

addItem(textItem: string): void {
  if (this.ActiveAdd)
  {
    this.idMax = this.items.reduce((max, item) => {
      return Math.max(max, item.id);
    }, 0)
    this.items.push({id:this.idMax+1, name: textItem})
    console.log(this.items);
  }
}

editInput(text: string): void {
  if (text.length > 0)
  {
    this.ActiveAdd = true;
  }
  else this.ActiveAdd = false;
  
}  

}
