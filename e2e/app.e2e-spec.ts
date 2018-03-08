import { AppPage } from './app.po';

describe('rocket-todos App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the toolbar with the right title', () => {
    page.navigateTo();
    expect(page.getToolbarText()).toEqual('Rocket Todos');
  });
});
