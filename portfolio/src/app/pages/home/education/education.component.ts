import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  id: number;
  school: string;
  logo: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class EducationComponent {
  selectedEducation: Education | null = null;
  showEducationDetails = false;

  educations: Education[] = [
    {
      id: 1,
      school: "École d'Ingénieur",
      logo: 'assets/images/engineering-school.svg',
      degree: "Diplôme d'Ingénieur",
      field: "Data Engineering",
      duration: "2020 - 2023",
      location: "Paris, France",
      description: "Formation en ingénierie des données et systèmes d'information",
      highlights: [
        "Spécialisation en Data Engineering et Analytics",
        "Projets pratiques en entreprise",
        "Formation en management et gestion de projet"
      ],
      skills: ["Data Engineering", "Machine Learning", "Project Management", "Big Data"]
    },
    {
      id: 2,
      school: "Université",
      logo: 'assets/images/university.svg',
      degree: "Licence",
      field: "Informatique",
      duration: "2017 - 2020",
      location: "Paris, France",
      description: "Formation fondamentale en informatique et mathématiques",
      highlights: [
        "Bases solides en programmation",
        "Mathématiques appliquées",
        "Algorithmique et structures de données"
      ],
      skills: ["Programming", "Mathematics", "Algorithms", "Computer Science"]
    }
  ];

  toggleEducationDetails(education: Education): void {
    if (this.selectedEducation?.id === education.id) {
      this.closeEducationDetails();
    } else {
      this.selectedEducation = education;
      this.showEducationDetails = true;
    }
  }

  closeEducationDetails(): void {
    this.selectedEducation = null;
    this.showEducationDetails = false;
  }
}
