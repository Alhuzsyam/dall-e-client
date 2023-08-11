import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  postImage(): Observable<string> {
    const url = `${this.baseUrl}/image`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const requestBody = {
      prompt: 'javanese batik stroke pattern with B&W color'
    };

    return this.http.post(url, requestBody, { headers, responseType: 'text' });
  }
}
