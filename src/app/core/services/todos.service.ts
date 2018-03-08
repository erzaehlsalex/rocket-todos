import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Todo} from '../models/todo.model';

@Injectable()
export class TodosService {

  entities: { [todoId: number]: Todo };

  idMapping: BehaviorSubject<{ [todoId: number]: Todo }> = new BehaviorSubject<{ [todoId: number]: Todo }>({});


  constructor() {
    this.entities = {
      [1]: {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
        checked: false
      },
      [2]: {
        id: 2,
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        checked: false
      }
    };
    this.publishTodos();
  }

  getTodos(): Observable<Todo[]> {
    return this.idMapping.asObservable().map(entites => {
      return Object.keys(entites).map(key => {
        return this.entities[key];
      });
    });
  }

  addTodo(content: string) {
    const nextId = this.getNextId();
    this.entities = {
      ...this.entities,
      [nextId]: {
        id: nextId,
        content,
        checked: false
      }
    };
    this.publishTodos();
  }

  deleteTodo(todoId: number) {
    delete this.entities[todoId];
    this.publishTodos();
  }

  checkTodo(todoId: number) {
    this.entities[todoId].checked = !this.entities[todoId].checked;
    this.publishTodos();
  }

  updateTodo(todoId: number, content: string) {
    this.entities[todoId].content = content;
    this.publishTodos();
  }

  publishTodos() {
    this.idMapping.next(this.entities);
  }

  getNextId(): number {
    const ids = Object.keys(this.entities);
    if (ids.length) {
      return this.entities[ids[ids.length - 1]].id + 1;
    } else {
      return 1;
    }

  }

}

