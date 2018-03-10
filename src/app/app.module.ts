import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {TodosService} from './core/services/todos.service';
import {TodoListComponent} from './core/components/todo-list/todo-list.component';
import {TodoItemComponent} from './core/components/todo-item/todo-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoCreateComponent } from './core/components/todo-create/todo-create.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DeleteModalComponent } from './core/components/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoCreateComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [TodosService],
  entryComponents: [DeleteModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
