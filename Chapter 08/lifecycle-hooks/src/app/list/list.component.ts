import { Component, DoCheck, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `
})
export class ListComponent implements OnChanges, DoCheck {
  @Input() items: string[] = [];
  previousLength: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called: ', changes);
  }

  ngDoCheck() {
    if (this.items.length !== this.previousLength) {
      console.log('ngDoCheck called: ', this.items);
      this.previousLength = this.items.length;
    }
  }
}
