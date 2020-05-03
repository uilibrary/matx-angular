import { NgMatXPage } from './app.po';

describe('ng-matx App', () => {
  let page: NgMatXPage;

  beforeEach(() => {
    page = new NgMatXPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
