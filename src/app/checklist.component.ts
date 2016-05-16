import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CheckItemComponent, CheckItem } from './check-item';

@Component({
  moduleId: module.id,
  selector: 'checklist',
  templateUrl: 'checklist.component.html',
  styleUrls: ['checklist.component.css'],
  directives: [HeaderComponent, FooterComponent, CheckItemComponent]
})
export class ChecklistAppComponent implements OnInit {

  currentItem: CheckItem;
  private checkItems = new Array<CheckItem>();
  private currentItemIndex = 0;

  constructor() {
    this.checkItems = [
      {
        title: 'Dependecy Management',
        infos: [
          'do not rely on libraries or tools that are (or not) part of the execution environment',
          'better pull all deps at build time',
          'use a dependency management framework'
        ]
      }
    ];
  }

  ngOnInit(): void {
    this.currentItem = this.checkItems[0];
  }

  previousItem(): void {
    if (!this.hasPrevious()) {
      return;
    }
    this.currentItem = this.checkItems[--this.currentItemIndex];
  }

  nextItem(): void {
    if (!this.hasNext()) {
      return;
    }
    this.currentItem = this.checkItems[++this.currentItemIndex];
  }

  private hasNext(): boolean {
    return this.currentItemIndex < this.checkItems.length - 1;
  }

  private hasPrevious(): boolean {
    return this.currentItemIndex > 0;
  }
}
