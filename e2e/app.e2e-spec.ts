import { TimerWithMusicAppPage } from './app.po';

describe('timer-with-music-app App', () => {
  let page: TimerWithMusicAppPage;

  beforeEach(() => {
    page = new TimerWithMusicAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
