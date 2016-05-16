import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ChecklistAppComponent } from '../app/checklist.component';

beforeEachProviders(() => [ChecklistAppComponent]);

describe('App: Checklist', () => {
  it('should create the app',
      inject([ChecklistAppComponent], (app: ChecklistAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
