import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTodo } from './delete-todo';

describe('DeleteTodo', () => {
  let component: DeleteTodo;
  let fixture: ComponentFixture<DeleteTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
