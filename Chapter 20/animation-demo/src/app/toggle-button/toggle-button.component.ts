import { Component } from '@angular/core';
import { triggerToggleAnimation } from '../animations/trigger-toggle-animation2';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  animations: [triggerToggleAnimation]
})
export class ToggleButtonComponent {
  checked = false;
}
