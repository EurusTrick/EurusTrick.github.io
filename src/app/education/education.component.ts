import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})

export class EducationComponent {
  education: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let education1 = {
      fecha: "2010-2016",
      faculty: "Ingeniería",
      university: "Universidad Veracruzana",
    };

    let education2 = {
      fecha: "2016-2020",
      faculty: "Negocios y Tecnologías",
      university: "Universidad Veracruzana",
    };

    let education3 = {
      fecha: "2017-2020",
      faculty: "Contabilidad",
      university: "CETEC",
    };

    this.education.push(education1);
    this.education.push(education2);
    this.education.push(education3);
    console.log(this.education);
  }
}
