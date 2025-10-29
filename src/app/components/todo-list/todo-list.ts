import { Component, input, output } from '@angular/core';
import { _Todo } from '../../model/todo.model';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {

  todos = input<_Todo[]>([]);

  editTodo = output<_Todo>();
  viewTodo = output<_Todo>();
  deleteTodo = output<_Todo>();

  onEditTodo(todo: _Todo){
    this.editTodo.emit(todo);
  }

  onViewTodo(todo: _Todo){
    this.viewTodo.emit(todo);
  }

  onDeleteTodo(todo: _Todo){
    this.deleteTodo.emit(todo);
  }

}
