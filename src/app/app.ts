
import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Reveal } from './directives/reveal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    About,
    Projects,
    Skills,
    Contact,
    Footer,
    Reveal
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
