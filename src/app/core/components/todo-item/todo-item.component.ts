import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Todo} from '../../models/todo.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges {

  @Input() todo: Todo;

  isEditing: boolean;

  @Output() saveTodo: EventEmitter<{ id: number, content: string }> = new EventEmitter<{ id: number, content: string }>();

  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todo'] && this.todo) {
      this.todoForm.patchValue({
        content: this.todo.content
      });
    }
  }


  toggleEditTodo() {
    this.isEditing = !this.isEditing;
  }

  onDeleteTodo() {
    this.deleteTodo.next(this.todo.id);
  }

  onSaveTodo() {
    this.isEditing = false;
    this.saveTodo.next({
      id: (this.todo) ? this.todo.id : null,
      content: this.todoForm.get('content').value.trim()
    });
  }

}
