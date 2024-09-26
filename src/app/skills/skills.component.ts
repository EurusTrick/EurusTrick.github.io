import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Array<string> = [];

  ngOnInit(): void {
    this.skills = [
      'JavaScript',
      'TypeScript',
      'Angular',
      'HTML',
      'CSS',
      'Node.js',
      'Django',
      'GraphQL'
    ];
    console.log(this.skills);
  }

  getIcon(skill: string): string {
    switch(skill) {
      case 'JavaScript':
        return 'fab fa-js'; // Ícono de JavaScript
      case 'TypeScript':
        return 'fab fa-js-square'; // Ícono de TypeScript
      case 'Angular':
        return 'fab fa-angular'; // Ícono de Angular
      case 'HTML':
        return 'fab fa-html5'; // Ícono de HTML
      case 'CSS':
        return 'fab fa-css3-alt'; // Ícono de CSS
      case 'Node.js':
        return 'fab fa-node-js'; // Ícono de Node.js
      case 'Django':
        return 'fab fa-python'; // Ícono de Python para Django
      case 'GraphQL':
        return 'fas fa-database'; // Ícono de base de datos para GraphQL
      default:
        return 'fas fa-certificate'; // Ícono por defecto
    }
  }
}
