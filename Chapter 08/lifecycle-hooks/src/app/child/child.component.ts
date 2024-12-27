import { Component, Input, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <p>{{message}}</p>
  `,
})
export class ChildComponent implements AfterViewInit, AfterViewChecked {
  @Input() message?: string;

  ngAfterViewInit() {
    console.log('Child: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child: ngAfterViewChecked');
  }
}