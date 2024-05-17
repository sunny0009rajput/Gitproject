import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {
  private apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) {}

  getResponse(input: string) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };

    const body = {
      prompt: input,
      max_tokens: 50,
      temperature: 0.7,
      n: 1
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map(response => response.choices[0].text),
      catchError(error => {
        console.error('Error:', error);
        return throwError('An error occurred. Please try again.');
      })
    );
  }
}
