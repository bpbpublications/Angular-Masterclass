import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'micro-frontend';
  message?: string;

  @HostListener('window:message', ['$event']) onPostMessage(event: any) {
    const eventData = event.data;
    if (eventData && eventData.type === "SET_MESSAGE") {
      const data = eventData.data;
      this.message = data.message;
    }
  }

  sendMessage = () => {
    const iframe = document?.getElementById('react_app') as HTMLIFrameElement;
    iframe?.contentWindow?.postMessage({ type: 'SET_MESSAGE', data: { message: 'Hi, from Angular app!' } }, '*');
  }
}