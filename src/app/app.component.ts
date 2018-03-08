import {Component} from '@angular/core';
import {TodosService} from './core/services/todos.service';
import {Observable} from 'rxjs/Observable';
import {Todo} from './core/models/todo.model';
import {MatDialog} from '@angular/material';
import {DeleteModalComponent} from './core/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos$: Observable<Todo[]>;

  constructor(private todosService: TodosService, private dialog: MatDialog) {
    this.todos$ = this.todosService.getTodos();
  }

  onSaveTodo(data: { id: number; content: string }) {
    this.todosService.updateTodo(data.id, data.content);
  }

  onDeleteTodo(id: number) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todosService.deleteTodo(id);
      }
    });
  }

  onAddTodo(content: string) {
    this.todosService.addTodo(content);
  }
}
