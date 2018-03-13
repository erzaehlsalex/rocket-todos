import {AppPage} from './app.po';
import {browser} from 'protractor';

describe('rocket-todos App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the toolbar with the right title', () => {
    page.navigateTo();
    expect(page.getToolbarText()).toEqual('Rocket Todos');
  });

  it('should create a new todo', () => {
    const todoAddButton = page.getCreateTodoAddButton();
    const todoInput = page.getCreateTodoInput();
    const todoConent = 'Create presentation slides';
    browser.sleep(4000);
    todoInput.sendKeys(todoConent).then(() => todoAddButton.click()).then(() => {
      browser.sleep(2000);
      expect(page.getLastTodoContent()).toEqual(todoConent);
    });
  });

  it('should check the first todo', () => {
    const firstTodoCheckbox = page.getFirstTodoCheckbox();
    const firstTodoCheckboxState = page.getFirstTodoCheckboxState();
    firstTodoCheckbox.click().then(() => {
      browser.sleep(3000);
      expect(page.getFirstTodoCheckboxState()).not.toEqual(firstTodoCheckboxState);
    });
  });

  it('should change the todo content', () => {
    const todoAddButton = page.getCreateTodoAddButton();
    const todoInput = page.getCreateTodoInput();
    const todoConent = 'Present the slids';
    browser.sleep(4000);
    todoInput.sendKeys(todoConent).then(() => todoAddButton.click()).then(() => {
      browser.sleep(2000);
      expect(page.getLastTodoContent()).toEqual(todoConent);
      const todoEditButton = page.getLastTodoEditButton();
      const todoSaveButton = page.getLastTodoSaveButton();
      const lastTodoInput = page.getLastTodoInput();
      const newTodoContent = 'Present the slides';

      todoEditButton.click().then(() => {
        lastTodoInput.clear();
        browser.sleep(1000);
        return lastTodoInput.sendKeys(newTodoContent);
      }).then(() => todoSaveButton.click()).then(() => {
        browser.sleep(2000);
        expect(page.getLastTodoContent()).toEqual(newTodoContent);
      });
    });
  });

  it('should delete the last todo', () => {
    const todoAddButton = page.getCreateTodoAddButton();
    const todoInput = page.getCreateTodoInput();
    const todoConent = 'Create presentation slides';
    browser.sleep(4000);
    todoInput.sendKeys(todoConent).then(() => todoAddButton.click()).then(() => {
      browser.sleep(2000);
      expect(page.getLastTodoContent()).toEqual(todoConent);
      const todoDeleteButton = page.getLastTodoDeleteButton();
      const todosNumber = page.getTodosContainer().count();
      todosNumber.then((number) => {
        todoDeleteButton.click().then(() => {
          browser.sleep(2000);
          const modalDeleteButton = page.getDeleteModalDeleteButton();
          return modalDeleteButton.click();
        }).then(() => {
          browser.sleep(2000);
          expect(page.getTodosContainer().count()).toEqual(number - 1, 'The todo list size has not been changed');
        });
      });
    });
  });
});
