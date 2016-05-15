import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  moduleId: module.id,
  selector: 'architecture-checklist-app',
  templateUrl: 'architecture-checklist.component.html',
  styleUrls: ['architecture-checklist.component.css'],
  directives: [HeaderComponent, FooterComponent]
})
export class ArchitectureChecklistAppComponent {
  title = 'architecture-checklist works!';
}
