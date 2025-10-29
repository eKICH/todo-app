import { Component, input } from '@angular/core';
import { _Todo } from '../../model/todo.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-details',
  imports: [TitleCasePipe],
  templateUrl: './todo-details.html',
  styleUrl: './todo-details.css'
})
export class TodoDetails {

  todo = input<_Todo | null>(null);

  formatDate(dateStr?: string): string {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

}
