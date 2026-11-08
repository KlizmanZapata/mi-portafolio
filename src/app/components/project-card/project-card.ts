
import { Component, computed, input, signal } from '@angular/core';

import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {

  readonly project = input.required<Project>();

  private readonly failedImage = signal<string | null>(null);

  readonly imageError = computed(
    () => this.failedImage() === this.project().image
  );

  onImageError(): void {
    this.failedImage.set(this.project().image);
  }
}
