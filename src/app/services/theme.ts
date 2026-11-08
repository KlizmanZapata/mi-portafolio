import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly document = inject(DOCUMENT);

  readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    this.applyTheme(this.theme());
  }

  toggleTheme(): void {
    const nextTheme: Theme =
      this.theme() === 'dark' ? 'light' : 'dark';

    this.setTheme(nextTheme);
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.applyTheme(theme);
  }

  private getInitialTheme(): Theme {
    try {
      const savedTheme =
        this.document.defaultView?.localStorage.getItem('portfolio-theme');

      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    } catch {
      // Si localStorage no está disponible, utilizamos el tema predeterminado.
    }

    return 'dark';
  }

  private applyTheme(theme: Theme): void {
    this.document.documentElement.setAttribute('data-theme', theme);

    try {
      this.document.defaultView?.localStorage.setItem(
        'portfolio-theme',
        theme
      );
    } catch {}
  }
}
