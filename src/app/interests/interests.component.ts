import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent {
  interests: string[] = [];

  ngOnInit(): void {
    this.interests = [
      'Desarrollo de software',
      'Inteligencia Artificial',
      'Fotografía',
      'Viajar',
      'Leer libros',
    ];
    console.log(this.interests);
  }
}
