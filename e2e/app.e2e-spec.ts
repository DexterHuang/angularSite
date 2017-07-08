import { TempPage } from './app.po';

describe('temp App', () => {
  let page: TempPage;

  beforeEach(() => {
    page = new TempPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
