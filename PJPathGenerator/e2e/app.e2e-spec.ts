import { PJPathGeneratorPage } from './app.po';

describe('pjpath-generator App', function() {
  let page: PJPathGeneratorPage;

  beforeEach(() => {
    page = new PJPathGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
