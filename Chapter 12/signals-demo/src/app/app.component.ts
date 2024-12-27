import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Click Count: {{ count() }}</h1>
  <p>Square of {{ count() }} is {{ square() }}</p>
  <button (click)="increment()">Increment</button>`,
})
export class AppComponent {
  count = signal(0);
  square = computed(() => this.count() * this.count());

  constructor() {
    effect(() => {
      console.log(`The count changed to: ${this.count()}`);
    });
  }

  increment() {
    this.count.update(c => c + 1);
  }
}
