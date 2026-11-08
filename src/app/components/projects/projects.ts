import { Component, computed, signal } from '@angular/core';

import { ProjectCard } from '../project-card/project-card';
import { Reveal } from '../../directives/reveal';

import { PROJECTS } from '../../data/projects.data';

type ProjectFilter = 'all' | 'professional' | 'personal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  readonly projects = PROJECTS;

  readonly activeFilter = signal<ProjectFilter>('all');

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();

    if (filter === 'all') {
      return this.projects;
    }

    return this.projects.filter(
      project => project.type === filter
    );
  });

  readonly projectSummary = computed(() => ({
    filter: this.activeFilter(),
    count: this.filteredProjects().length
  }));

  setFilter(filter: ProjectFilter): void {
    this.activeFilter.set(filter);
  }
}
