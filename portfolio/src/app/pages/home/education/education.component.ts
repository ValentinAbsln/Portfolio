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
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education-card.scss', './education-modal.scss'],
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
      logo: 'assets/images/TELECOMNANCY.svg',
      degree: "Diplôme d'Ingénieur",
      field: "Informatique",
      duration: "2019 - 2022",
      location: "Nancy, France",
      description: "Formation école d'ingénieurs en informatique et sciences du numérique",
      highlights: [
        "Programmation (C , Java, Python)",
        "Mathématiques appliquées",
        "Réseaux et systèmes",
        "Gestion de projet"
      ]    },
    {
      id: 2,
      school: "Université",
      logo: 'assets/images/ULIEGE.svg',
      degree: "Master",
      field: "Science des données",
      duration: "09/2021 - 01/2022",
      location: "Liège, Belgique",
      description: "Formation en anglais en tant que spécialise de la donnée",
      highlights: [
        "Machine Learning (Python)",
        "Statistiques (R)",
        "Data Engineering "
      ]    }
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
