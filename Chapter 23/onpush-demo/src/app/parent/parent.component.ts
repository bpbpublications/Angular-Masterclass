import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { Fruit } from '../fruit';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <button (click)="changeFruitName()">Change fruit name</button>
    <br />
    <app-child [fruit]="fruit"></app-child>
  `,
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  fruit:Fruit = { name: 'Apple' };
 
  changeFruitName() {
    this.fruit.name = 'Orange';
  }

  // changeFruitName() {
  //   this.fruit = {
  //     ...this.fruit,
  //     name: 'Orange'
  //   };
  // }

}
