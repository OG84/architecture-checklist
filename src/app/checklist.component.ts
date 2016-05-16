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
        title: 'Availability',
        infos: ['in case of server crash, local network problems or environmental desasters'],
        pros: [
          'decreases the chance of data loss',
          'increases availability in case of local network problems or environmental desasters'
        ],
        cons: ['increased system complexity and cost'],
        value: 0
      },
      {
        title: 'Access time',
        infos: ['not all tasks require a fast access time. E.g. asynchronous background tasks.'],
        pros: [
          'depending on the ux requirements, fast access times can be essential in the customers acceptance of the software'
        ],
        cons: ['increased system cost'],
        value: 0
      },
      {
        title: 'Test',
        infos: ['not all tasks require a fast access time. E.g. asynchronous background tasks.'],
        pros: [
          'depending on the ux requirements, fast access times can be essential in the customers acceptance of the software'
        ],
        cons: ['increased system cost'],
        value: 0
      },
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
