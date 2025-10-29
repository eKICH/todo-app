import { Routes } from '@angular/router';
import { Todo } from './components/todo/todo';

export const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: Todo, title: 'Todo List'}
];
