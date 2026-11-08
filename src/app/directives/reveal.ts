import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
  inject
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class Reveal implements AfterViewInit, OnDestroy {

  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = this.element.nativeElement;

    this.renderer.addClass(element, 'reveal');

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Si el usuario prefiere movimiento reducido,
    // mostramos el contenido sin animaciones.
    if (reduceMotion || !('IntersectionObserver' in window)) {
      this.renderer.addClass(element, 'reveal-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {

          if (entry.isIntersecting) {
            this.renderer.addClass(element, 'reveal-visible');
          } else {
            this.renderer.removeClass(element, 'reveal-visible');
          }

        }
      },
      {
        threshold: 0.12
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
