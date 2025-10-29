import { Component, input, output } from '@angular/core';
import { _Todo } from '../../model/todo.model';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-delete-todo',
  imports: [Button],
  templateUrl: './delete-todo.html',
  styleUrl: './delete-todo.css'
})
export class DeleteTodo {

  todo = input<_Todo | null>(null);
  closeHandler = input<(() => void) | null>(null);
  onConfirmed = input<((todo: _Todo) => void) | null>(null);


  onConfirm(){
    if (this.todo() && this.onConfirmed()) {
      this.onConfirmed()!(this.todo()!);
    }
  }

  onNo(){
    if (this.closeHandler()) {
      this.closeHandler()!();
    }
  }

}
