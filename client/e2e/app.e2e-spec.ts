import { NgContactAppPage } from './app.po';

describe('ng-contact-app App', () => {
  let page: NgContactAppPage;

  beforeEach(() => {
    page = new NgContactAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
