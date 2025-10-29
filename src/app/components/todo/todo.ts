import { Component, computed, effect, ElementRef, signal, viewChild } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { Modal } from '../../shared/modal/modal';
import { TodoList } from "../todo-list/todo-list";
import { TodoForm } from '../todo-form/todo-form';
import { _Todo } from '../../model/todo.model';
import { DUMMY_TODOS } from '../../data/todos.data';
import { TodoDetails } from '../todo-details/todo-details';
import { DeleteTodo } from '../delete-todo/delete-todo';
import { Toast } from '../../shared/toast/toast';
import { _Toast } from '../../model/toast.model';
import { Pagination } from '../../shared/pagination/pagination';

@Component({
  selector: 'app-todo',
  imports: [Button, Modal, TodoList, Toast, Pagination, ReactiveFormsModule, FormsModule, Pagination],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {

  todos = signal<_Todo[]>([...DUMMY_TODOS].sort((a, b) => {

    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

  }));
  
  // Modal
  isModalOpen = signal(false);
  modalTitle = signal('');
  modalTop = signal('');
  label = signal('');
  contentComponent = signal<any | null>(null);
  contentInputs = signal<Record<string, unknown> | undefined>(undefined);

  // Toast
  activeToast = signal<_Toast | null>(null);
  private toastTimer: any;
  private readonly TOAST_DURATION = 6000;


  // Pagination
  currentPage = signal(1);
  pageSize = signal(10);

  // Search and Filter
  searchTerm = signal('');
  statusFilter = signal('all');

  filteredTodos = computed(() => {

    const todos = this.todos();
    const term = this.searchTerm();
    const status = this.statusFilter();

    let filtered = todos;

    if (status !== 'all') {
      filtered = filtered.filter(todo => todo.status === status)
    }

    if (term) {
      filtered = filtered.filter(todo => 
        todo.title.toLowerCase().includes(term) ||
        todo.description?.toLowerCase().includes(term)
      );
    }


    queueMicrotask(() => {
      if (this.currentPage() !== 1) {
        this.currentPage.set(1);
      }
    });

    return filtered;


  });

  displayedTodos = computed(() => {
    const todos = this.filteredTodos();
    const size = this.pageSize();
    const page = this.currentPage();

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    return todos.slice(startIndex, endIndex);
  });

  totalPages = computed(() => {

    const totalItems = this.filteredTodos().length;
    const size = this.pageSize();
    return Math.ceil(totalItems / size);

  });

  pageNumbers = computed(() => {

    const total = this.totalPages();
    const currentPage = this.currentPage();
    const maxPagesToShow = 5;

    if (total <= maxPagesToShow) return Array.from({length: total}, (_, i) => i + 1 );
      
    let startPage: number;
    let endPage: number;

    startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    endPage = Math.min(total, startPage + maxPagesToShow - 1);

    if (endPage === total) startPage = Math.max(1, total - maxPagesToShow + 1);

    return Array.from({ length: (endPage - startPage + 1) }, (_, i) => startPage + i);

  });

  goToPage(page: number){
    if(page >= 1 && page <= this.totalPages()) this.currentPage.set(page);

  }

  onPageSizeChange(event: Event){
    const select = event.target as HTMLSelectElement;
    const newSize = parseInt(select.value, 10);

    this.pageSize.set(newSize);
    this.currentPage.set(1);

  }

  onSearchTermChange(e: Event | string){
    const term = typeof e === 'string' ? e : (e.target as HTMLInputElement).value;
    this.searchTerm.set(term);
  }

  onStatusFilterChange(e: Event){
    const status = (e.target as HTMLSelectElement).value;
    this.statusFilter.set(status);
  }


  showToast(message: string, type:_Toast['type']){

    clearTimeout(this.toastTimer);

    this.activeToast.set({message, type});

    this.toastTimer = setTimeout(() => {
      this.activeToast.set(null);
    }, this.TOAST_DURATION);

  }


  openAddModal(){
    this.modalTitle.set('Add New Todo');
    this.modalTop.set('Add your Todo');
    this.label.set('Save Todo');
    this.contentComponent.set(TodoForm);
    this.contentInputs.set({
      todo: undefined,
      submitLabel: this.label(),
      onSaveTodo: (newTodo: _Todo) => this.saveNewTodo(newTodo),
      closeHandler: () => this.closeModal()
    });
    this.isModalOpen.set(true);

  }

  saveNewTodo(newTodo: _Todo){
    this.todos.update(t => {
      const newList = [newTodo, ...t];
      return newList.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    });

    this.showToast(`Todo "${newTodo.title}" added successfully!`, 'success');
    this.closeModal();
  }

  openEditModal(todo: _Todo){
    this.modalTitle.set('Edit Todo');
    this.modalTop.set('Edit your Todo');
    this.label.set('Edit Todo');
    this.contentComponent.set(TodoForm);
    this.contentInputs.set({
      todo,
      submitLabel: this.label(),
      onSaveTodo: (updatedTodo: _Todo) => this.updateTodo(updatedTodo),
      closeHandler: () => this.closeModal()
    });
    this.isModalOpen.set(true);
  }

  updateTodo(updatedTodo: _Todo){
    this.todos.update(t => t.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    this.showToast(`Todo "${updatedTodo.title}" updated successfully!`, 'success');
    this.closeModal();
  }

  openViewTodoModal(todo: _Todo){
    this.modalTitle.set('Todo Details');
    this.modalTop.set('These are the details of your Todo');
    this.contentComponent.set(TodoDetails);
    this.contentInputs.set({todo})
    this.isModalOpen.set(true);
  }

  openDeleteTodoModal(todo: _Todo){
    this.modalTitle.set('Delete Todo');
    this.contentComponent.set(DeleteTodo);
    this.contentInputs.set({
      todo,
      closeHandler: () => this.closeModal(),
      onConfirmed: (deletedTodo: _Todo) => this.deleteTodo(deletedTodo)
    })
    this.isModalOpen.set(true);
  }

  deleteTodo(deletedTodo: _Todo){
    this.todos.update(t => t.filter(todo => todo.id !== deletedTodo.id));
    this.showToast(`Todo "${deletedTodo.title}" deleted successfully!`, 'info');
    this.closeModal();
  }
  
  closeModal(){
    this.isModalOpen.set(false);
    this.contentComponent.set(null);
    this.contentInputs.set(undefined);
  }

}
