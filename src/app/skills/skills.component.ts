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
}
