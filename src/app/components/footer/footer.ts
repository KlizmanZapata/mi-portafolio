import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  readonly currentYear = new Date().getFullYear();

  readonly socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/KlizmanZapata',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/klizmanzapata',
    },
  ];

  readonly navigationLinks = [
    { name: 'Inicio', url: '#inicio' },
    { name: 'Sobre mí', url: '#sobre-mi' },
    { name: 'Proyectos', url: '#proyectos' },
    { name: 'Habilidades', url: '#habilidades' },
    { name: 'Contacto', url: '#contacto' },
  ];

}
