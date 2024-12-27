import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `
})
export class CounterComponent implements DoCheck {
  @Input() counter: number = 0;

  ngDoCheck() {
    console.log('ngDoCheck called: Counter changed - ', this.counter);
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}