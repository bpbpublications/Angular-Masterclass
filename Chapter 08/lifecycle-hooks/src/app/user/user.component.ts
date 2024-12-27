import { Component, Input, DoCheck, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>Hello, {{ user?.name }}!</p>`
})
export class UserComponent implements DoCheck {
  @Input() user: { name: string; } | undefined;
  differ: any;

  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
    const changes = this.differ.diff(this.user);
    if (changes) {
      changes.forEachChangedItem((item: { key: any; previousValue: any; currentValue: any; }) => {
        console.log('Property', item.key, 'changed from', item.previousValue, 'to', item.currentValue);
      });
    }
  }
}
