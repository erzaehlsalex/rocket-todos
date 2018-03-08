import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  todoForm: FormGroup;

  @Output() addTodo: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onAddTodo() {
    this.addTodo.next(this.todoForm.get('content').value.trim());
    this.todoForm.patchValue({
      content: ''
    });
  }

}
