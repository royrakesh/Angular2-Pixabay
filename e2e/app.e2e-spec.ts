import { GithubRakeshPage } from './app.po';

describe('github-rakesh App', function() {
  let page: GithubRakeshPage;

  beforeEach(() => {
    page = new GithubRakeshPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
