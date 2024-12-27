import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `<span>Fruit name: {{fruit?.name}}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() fruit: Fruit | undefined;
  previousName: string | undefined = '';

  constructor(private cd: ChangeDetectorRef) {}
 
  ngDoCheck() {
    if (this.fruit?.name !== this.previousName) {
      this.cd.markForCheck();
      this.previousName = this.fruit?.name;
    }
  }
}
