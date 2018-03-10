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
    const todoConent = 'This is a new todo';

    todoInput.sendKeys(todoConent).then(() => todoAddButton.click()).then(() => {
      browser.sleep(4000);
      expect(page.getLastTodoContent()).toEqual(todoConent);
    });
  });

  it('should delete the last todo', () => {
    const todoDeleteButton = page.getLastTodoDeleteButton();
    const modalDeleteButton = page.getDeleteModalDeleteButton();
    const todosNumber = page.getTodosContainer().count();
    todosNumber.then((number) => {
      todoDeleteButton.click().then(() => {
        browser.sleep(2000);
        return modalDeleteButton.click();
      }).then(() => {
        browser.sleep(2000);
        expect(page.getTodosContainer().count()).toBeLessThan(number, 'The todo list size has not been changed');
      });
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
    const todoEditButton = page.getLastTodoEditButton();
    const todoSaveButton = page.getLastTodoSaveButton();
    const lastTodoInput = page.getLastTodoInput();
    const newTodoContent = 'I have changed the content';

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
