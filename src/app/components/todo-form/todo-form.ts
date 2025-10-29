import { afterNextRender, Component, effect, ElementRef, inject, input, OnInit, output, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Button } from '../../shared/button/button';
import { _Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-form',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css'
})
export class TodoForm{

  private fb = inject(FormBuilder);

  todo = input<_Todo | null>(null);
  submitLabel = input<string>('');
  onSaveTodo = input<((todo: _Todo) => void) | null>(null);
  closeHandler = input<(() => void) | null>(null);

  
  // Add Task(s)
  newTask = signal('');
  tasks = signal<string[]>([]);
  taskError = signal('');
  viewReady = signal(false);
  submitted = signal(false);
  todayMinDate = signal(this.formatDate(new Date()));

  taskInputRef = viewChild<ElementRef<HTMLInputElement>>('taskInput');



  form: FormGroup = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['open', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  
  constructor() {

    afterNextRender(() => this.viewReady.set(true));

    effect(() => {

      if (!this.viewReady()) return;

      const t = this.todo();
      if (!t) {
        this.resetForm();
        return;
      }
      this.form.patchValue({
        title: t.title,
        description: t.description ?? '',
        startDate: this.formatDateForInput(t.startDate),
        endDate: this.formatDateForInput(t.endDate),
        status: t.status
      });

      this.tasks.set(t.task ?? []);
    });

    effect(() => {

      const statusControl = this.form.get('status');
      const isSaveMode = this.submitLabel() === 'Save Todo';

      if (statusControl) {

        if (isSaveMode) {
          statusControl.disable({emitEvent: false});
        } else {
          statusControl.enable({emitEvent: false});
        }
        
      }

    });
  }


  private resetForm() {
    this.form.reset({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      status: 'open'
    });
    this.tasks.set([]);
  }

  private formatDate(date: Date): string{
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  private formatDateForInput(dateStr?: string): string {
    if (!dateStr) return '';
    
    return this.formatDate(new Date(dateStr));
  }


  onSubmit(){

    this.submitted.set(true);

    if (this.form.invalid) return;

    const newTodo: _Todo = {
      id: this.todo()?.id ?? Date.now(),
      title: this.form.value.title,
      description: this.form.value.description,
      startDate:  this.form.value.startDate,
      endDate:  this.form.value.endDate,
      status: this.form.value.status || 'open',
      task: this.tasks(),
      createdAt: this.todo()?.createdAt ?? new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    if(this.onSaveTodo()) {
      this.onSaveTodo()!(newTodo);
      this.submitted.set(false);
    }

  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.touched || this.submitted());
  }


  onInput(event: Event){
    const input = event.target as HTMLInputElement;
    this.newTask.set(input.value);

    if (this.taskError()){
      this.taskError.set('');
    }
  }

  addTask() {
    const task = this.newTask().trim(); 

      if (!task) { 
        this.taskError.set("Please Enter a Task");
        this.taskInputRef()?.nativeElement.focus();
      }
      else if(this.tasks().includes(task)){
        this.taskError.set("Duplicate tasks not allowed!");
      }
      else {
        this.tasks.update(arr => [...arr, task]);
        this.newTask.set('');
        this.taskInputRef()?.nativeElement.focus();
      }
  }

  removeTask(taskToRemove: string){
    this.tasks.update(tasks => tasks.filter(task => task !== taskToRemove));
  }

  onCancel(){
    if (this.closeHandler()) {
      this.closeHandler()!();
    }
  }

}
