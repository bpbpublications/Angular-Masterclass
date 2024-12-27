import { Injectable } from '@angular/core';
import OpenAI from "openai";

@Injectable({
  providedIn: 'root'
})
export class OpenAiApiService {
  openai: OpenAI
  assistant: any;

  constructor() {
    this.openai = new OpenAI({
      apiKey: "<your-open-ai-api-key>",
      dangerouslyAllowBrowser: true
    });

    this.initialize();
  }

  async initialize() {
    this.assistant = await this.openai.beta.assistants.create({
      name: "Fruits Expert",
      instructions: "You know everything about fruits",
      model: "gpt-3.5-turbo-0125"
    });
  }

  async generateChatResponse(prompt: string){
    const thread = await this.openai.beta.threads.create();

    const message = await this.openai.beta.threads.messages.create(
      thread.id,
      {
        role: "user",
        content: prompt
      }
    );

    return await this.openai.beta.threads.runs.createAndStream(thread.id, {
      assistant_id: this.assistant.id
    })
  }
}