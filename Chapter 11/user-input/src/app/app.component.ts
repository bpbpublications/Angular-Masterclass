import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onChange(event: any) {
    console.log(event.target.value);
  }

  onKeyup(event: any) {
    console.log(event.target.value);
  }

  onCheckboxChange(event: any) {
    console.log(event.target.checked);
  }

  checkboxValue: boolean = false;
  onCheckboxValueChange() {
    console.log(this.checkboxValue);
  }
}
