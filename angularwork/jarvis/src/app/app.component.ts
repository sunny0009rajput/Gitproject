import { Component } from '@angular/core';
import { SpeechRecognitionService } from 'ngx-speech-recognition';
import { OpenAIService } from './openai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listening: boolean = false;
  response: string = '';

  constructor(
    private speechRecognitionService: SpeechRecognitionService,
    private openaiService: OpenAIService
  ) {}

  startListening() {
    this.listening = true;
    this.speechRecognitionService.record().subscribe((result: string) => {
      this.generateResponse(result);
    });
  }

  generateResponse(input: string) {
    this.openaiService.getResponse(input).subscribe((response: string) => {
      this.response = response;
      this.speakResponse();
    });
  }

  speakResponse() {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(this.response);
    synthesis.speak(utterance);
  }
}


