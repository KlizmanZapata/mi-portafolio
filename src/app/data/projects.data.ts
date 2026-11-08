import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Gestión de Tickets de Soporte',
    category: 'Experiencia profesional · BL Group S.A.S.',
    description:
      'Desarrollo backend de funcionalidades para una solución empresarial de gestión de solicitudes de soporte, participando en la implementación de lógica de negocio y procesamiento de requerimientos.',
    technologies: ['Java', 'Spring'],
    image: '/images/projects/Backend.jpg',
    type: 'professional',
    privateProject: true
  },
  {
    id: 2,
    title: 'Gestión de Tipos de Clase',
    category: 'Experiencia profesional · BL Group S.A.S.',
    description:
      'Participación en el desarrollo de un módulo CRUD para la gestión de tipos de clase, implementando interfaces con Angular, formularios reactivos y mejoras de diseño responsive para optimizar la experiencia de usuario.',
    technologies: ['Angular', 'TypeScript', 'Angular Material'],
    image: '/images/projects/Tipos-Clase.jpg',
    type: 'professional',
    privateProject: true
  },
  {
    id: 3,
    title: 'ViHolic E-Commerce',
    category: 'Proyecto personal',
    description:
      'Aplicación web de comercio electrónico que permite explorar productos, gestionar usuarios, recuperar contraseñas, personalizar pedidos y administrar un carrito de compras, con integración de un flujo de pedidos mediante WhatsApp.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    image: '/images/projects/ViHolic-Ecommerce.jpg',
    githubUrl: 'https://github.com/KlizmanZapata/ViHolic-ECommerce',
    demoUrl: 'https://klizmanzapata.github.io/ViHolic-ECommerce/',
    type: 'personal'
  },
  {
    id: 4,
    title: 'Registro de Entrenamientos',
    category: 'Proyecto personal',
    description:
      'Aplicación web desarrollada con Vue 3 y TypeScript para registrar y administrar entrenamientos, permitiendo gestionar fechas, duración y distancias mediante almacenamiento en Firebase Firestore.',
    technologies: ['Vue 3', 'TypeScript', 'Firebase', 'Firestore'],
    image: '/images/projects/registro.jpg',
    githubUrl: 'https://github.com/KlizmanZapata/registro-entrenamiento-vue',
    type: 'personal'
  }
];
