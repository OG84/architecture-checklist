import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CheckItemComponent, CheckItem } from './check-item';

@Component({
  moduleId: module.id,
  selector: 'checklist',
  templateUrl: 'architecture-checklist.component.html',
  styleUrls: ['architecture-checklist.component.css'],
  directives: [HeaderComponent, FooterComponent, CheckItemComponent]
})
export class ArchitectureChecklistAppComponent {

  checkItems = new Array<CheckItem>();

  constructor() {
    this.checkItems = [
      {
        title: 'Replication',
        pros: [
          'decreases the chance of data loss',
          'increases availability in case of local network problems or environmental desasters'
        ],
        cons: ['increased system complexity and cost']
      },
      {
        title: 'Access time',
        infos: ['not all tasks require a fast access time. E.g. asynchronous background tasks.'],
        pros: [
          'depending on the ux requirements, fast access times can be essential in the customers acceptance of the software'
        ],
        cons: ['increased system cost'],
      },
    ];
  }
}
