import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];

  @Output() saveTodo: EventEmitter<{ id: number, content: string }> = new EventEmitter<{ id: number, content: string }>();

  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onSaveTodo(data: { id: number; content: string }) {
    this.saveTodo.next(data);
  }

  onDeleteTodo(id: number) {
    this.deleteTodo.next(id);
  }
}
