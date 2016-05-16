import { Component, OnInit, Input } from '@angular/core';
import { CheckItem } from './check-item.model';

@Component({
  moduleId: module.id,
  selector: 'check-item',
  templateUrl: 'check-item.component.html',
  styleUrls: ['check-item.component.css']
})
export class CheckItemComponent implements OnInit {

  @Input() item: CheckItem;
  @Input() index: number;
  
  constructor() {}

  ngOnInit() {
  }

}
