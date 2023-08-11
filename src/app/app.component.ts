import { Component,OnInit } from '@angular/core';
import { ImageServiceService } from './image-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dalle-client';
  constructor(private imageService: ImageServiceService) { }
  imageUrl: string | null = null;

  callImageService(): void {
    this.imageService.postImage().subscribe(
      response => {
        // The response is the URL to the image
        console.log('Image URL:', response);
        this.imageUrl = response;
        // You can use this URL to display the image or perform further actions
      },
      error => {
        console.error('Error calling image service:', error);
        // Handle the error as needed
      }
    );
  }

}
