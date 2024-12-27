import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // Add FormsModule to imports array
  template: `
  <label for="username">Name:</label>
  <input id="username" [(ngModel)]="username" placeholder="Name">
  <p>{{ username }}</p>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  username = '';
}
