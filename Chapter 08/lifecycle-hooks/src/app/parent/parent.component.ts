import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent Component</h1>
    <div appLifecycle *ngIf="showTimer"></div>
    <button (click)="removeTimer()">Remove Component</button>
  `,
})
export class ParentComponent {
  showTimer: boolean = true;

  removeTimer() {
    this.showTimer = false;
  }
}
