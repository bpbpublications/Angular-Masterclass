import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: '<button (click)="emitCustomEvent()">Emit</button>'
})
export class ChildComponent {
  @Output() customEvent = new EventEmitter<string>();

  emitCustomEvent() {
    this.customEvent.emit('Hello from child');
  }
}
