import { Component, Inject } from '@angular/core';
import { OpenAiApiService } from '../open-ai-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="response">{{ response }}</div>
    <div class="prompt">
        <input type="text" [(ngModel)]="prompt"  />
        <button (click)="submit()">Submit</button>
    </div>
  `,
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  prompt?: string;
  response: string = "";
  constructor(@Inject(OpenAiApiService) private openAiApiService: OpenAiApiService) { }

  async submit() {
    if (this.prompt) {
      const run = await this.openAiApiService.generateChatResponse(this.prompt);

      run
      .on('textDelta', (textDelta, snapshot) => this.response += textDelta.value)
    }
  }
}
