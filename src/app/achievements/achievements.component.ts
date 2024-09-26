import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent {
  achievements: Array<any> = [];

  ngOnInit(): void {
    let achievement1 = {
      title: 'Premio a la Innovación 2022',
      description: 'Reconocimiento por el desarrollo de un software innovador.',
    };

    let achievement2 = {
      title: 'Certificación en Gestión de Proyectos',
      description: 'Certificación obtenida en 2023 en gestión de proyectos.',
    };

    let achievement3 = {
      title: 'Desarrollo de una aplicación de inscripción de alumnos',
      description: 'Implementación de una solución completa utilizando Django y React para una secundaria.',
    };

    let achievement4 = {
      title: 'Contribución a un proyecto de código abierto',
      description: 'Colaboración en un proyecto de software de código abierto en GitHub.',
    };

    let achievement5 = {
      title: 'Participación en Hackathon Regional 2023',
      description: 'Ganador del primer lugar en un hackathon por un proyecto de IA.',
    };

    this.achievements.push(achievement1, achievement2, achievement3, achievement4, achievement5);
    console.log(this.achievements);
  }
}
