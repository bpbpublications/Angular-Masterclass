import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `<app-child (customEvent)="handleCustomEvent($event)"></app-child>`,
})
export class ParentComponent {
  handleCustomEvent(event: string) {
    console.log(event)
  }
}
