export class ArchitectureChecklistPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('architecture-checklist-app h1')).getText();
  }
}
