import { ArchitectureChecklistPage } from './app.po';

describe('architecture-checklist App', function() {
  let page: ArchitectureChecklistPage;

  beforeEach(() => {
    page = new ArchitectureChecklistPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('architecture-checklist works!');
  });
});
