import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
})
export class LanguagesComponent {
  languages: Array<{ name: string; level: string }> = [];

  ngOnInit(): void {
    this.languages = [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio' },
      { name: 'Francés', level: 'Básico' }
    ];
    console.log(this.languages);
  }
}
