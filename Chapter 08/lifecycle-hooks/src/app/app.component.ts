import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-parent></app-parent>
  `
})
export class AppComponent {
  user: { name: string };

  constructor() {
    this.user = { name: 'Veda' };
  }

  changeName() {
    this.user.name = 'Adi';
  }
}
