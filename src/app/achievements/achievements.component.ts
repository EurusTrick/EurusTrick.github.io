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

    this.achievements.push(achievement1, achievement2);
    console.log(this.achievements);
  }
}
