import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelemetryService } from './telemetry.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-insights';
  constructor(private telemetryService: TelemetryService) {
    this.telemetryService.logPageView('AppComponent', '/');
    this.telemetryService.logEvent('AppComponent', { event: 'AppComponent Loaded' });
  }
}
