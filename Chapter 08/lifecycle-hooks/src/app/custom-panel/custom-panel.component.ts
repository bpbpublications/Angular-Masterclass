import { Component, AfterContentInit, ContentChild, ElementRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-custom-panel',
  template: `
    <div class="panel">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .panel {
      border: 1px solid #ccc;
      padding: 10px;
    }
  `]
})
export class CustomPanelComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild('header') headerElement: ElementRef | undefined;

  ngAfterContentInit() {
    console.log('ngAfterContentInit called:');
    if (this.headerElement) {
      console.log('Header content found:', this.headerElement.nativeElement.textContent);
    } else {
      console.log('No header content found.');
    }
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called:');
    // You can use this hook to perform any additional tasks after the content is checked
    // For example, you can update a variable or call a function here
    this.updateHeader();
  }

  updateHeader() {
    // This is a dummy function that changes the header content to uppercase
    if (this.headerElement) {
      this.headerElement.nativeElement.textContent = this.headerElement.nativeElement.textContent.toUpperCase();
      console.log('Header content updated:', this.headerElement.nativeElement.textContent);
    }
  }
}
