import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ArchitectureChecklistAppComponent } from '../app/architecture-checklist.component';

beforeEachProviders(() => [ArchitectureChecklistAppComponent]);

describe('App: ArchitectureChecklist', () => {
  it('should create the app',
      inject([ArchitectureChecklistAppComponent], (app: ArchitectureChecklistAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'architecture-checklist works!\'',
      inject([ArchitectureChecklistAppComponent], (app: ArchitectureChecklistAppComponent) => {
    expect(app.title).toEqual('architecture-checklist works!');
  }));
});
