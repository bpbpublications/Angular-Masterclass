import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storeName = 'The Fruit Store';

  getStoreName() {
    return this.storeName;
  }
}
