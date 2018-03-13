import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getToolbarText() {
    return element(by.css('mat-toolbar span')).getText();
  }

  getCreateTodoContainer() {
    return element(by.css('app-todo-create'));
  }

  getCreateTodoInput() {
    return this.getCreateTodoContainer().element(by.css('.todo-input'));
  }

  getCreateTodoAddButton() {
    return this.getCreateTodoContainer().element(by.css('.todo-add-button'));
  }

  getTodosContainer() {
    return element.all((by.css('app-todo-item')));
  }

  getLastTodo() {
    return this.getTodosContainer().last();
  }

  getLastTodoContent() {
    return this.getLastTodo().element(by.css('.todo-checkbox')).getText();
  }

  getLastTodoDeleteButton() {
    return this.getLastTodo().element(by.css('.todo-delete-button'));
  }

  getLastTodoEditButton() {
    return this.getLastTodo().element(by.css('.todo-edit-button'));
  }

  getLastTodoEditButtonDisabledState() {
    return this.getLastTodoEditButton().getAttribute('disabled');
  }

  getLastTodoSaveButton() {
    return this.getLastTodo().element(by.css('.todo-save-button'));
  }

  getLastTodoCancelButton() {
    return this.getLastTodo().element(by.css('.todo-cancel-button'));
  }

  getLastTodoInput() {
    return this.getLastTodo().element(by.css('.todo-input'));
  }

  getFirstTodo() {
    return this.getTodosContainer().first();
  }

  getFirstTodoCheckbox() {
    return this.getFirstTodo().element(by.css('.todo-checkbox'));
  }

  getFirstTodoCheckboxState() {
    return this.getFirstTodoCheckbox().element(by.model('todoChecked'));
  }

  getLastTodoCheckbox() {
    return this.getLastTodo().element(by.css('.todo-checkbox'));
  }

  getLastTodoCheckboxState() {
    return this.getLastTodoCheckbox().element(by.model('todoChecked'));
  }

  getDeleteModal() {
    return element(by.css('app-delete-modal'));
  }

  getDeleteModalDeleteButton() {
    return this.getDeleteModal().element(by.css('.modal-delete-button'));
  }
}
