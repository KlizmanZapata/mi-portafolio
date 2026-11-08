
import { Component } from '@angular/core';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  readonly skillGroups = [
    {
      id: 1,
      number: '01',
      title: 'Frontend',
      description: 'Desarrollo de interfaces web modernas, dinámicas y adaptables.',
      icon: '💻',
      technologies: [
        { name: 'Angular', iconClass: 'devicon-angular-plain colored' },
        { name: 'React', iconClass: 'devicon-react-original colored' },
        { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored' },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
        { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
        { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
        { name: 'SCSS', iconClass: 'devicon-sass-original colored' },
        { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original colored' }
      ]
    },
    {
      id: 2,
      number: '02',
      title: 'Backend',
      description: 'Desarrollo de servicios, lógica de negocio e integración de APIs.',
      icon: '⚙️',
      technologies: [
        { name: 'Java', iconClass: 'devicon-java-plain colored' },
        { name: 'Spring Framework', iconClass: 'devicon-spring-original colored' },
        { name: 'Spring Boot', iconClass: 'devicon-spring-original colored' },
        { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
        { name: 'Python', iconClass: 'devicon-python-plain colored' },
        { name: 'Django', iconClass: 'devicon-django-plain colored' },
        { name: 'REST APIs', iconClass: null }
      ]
    },
    {
      id: 3,
      number: '03',
      title: 'Bases de datos',
      description: 'Gestión y almacenamiento de información en bases de datos.',
      icon: '🗄️',
      technologies: [
        { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
        { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
        { name: 'Firebase', iconClass: 'devicon-firebase-plain colored' },
        { name: 'Firestore', iconClass: 'devicon-firebase-plain colored' },
        { name: 'SQL', iconClass: null }
      ]
    },
    {
      id: 4,
      number: '04',
      title: 'Herramientas',
      description: 'Herramientas para el desarrollo, control de versiones y pruebas.',
      icon: '🛠️',
      technologies: [
        { name: 'Git', iconClass: 'devicon-git-plain colored' },
        { name: 'GitHub', iconClass: 'devicon-github-original' },
        { name: 'Visual Studio Code', iconClass: 'devicon-vscode-plain colored' },
        { name: 'Postman', iconClass: 'devicon-postman-plain colored' }
      ]
    }
  ];

}
