
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  imageError = false;

  onImageError(): void {
    this.imageError = true;
  }
}
