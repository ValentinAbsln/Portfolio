import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceDetails {
  responsibilities: string[];
  projects: string[];
  impact: string[];
}

interface Experience {
  id: number;
  role: string;
  company: string;
  logo: string;
  duration: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ExperienceComponent {
  selectedExperience: Experience | null = null;
  showExperienceDetails = false;

  experiences: Experience[] = [
    {
      id: 1,
      role: 'Consultant IT & Data',
      company: 'Wavestone',
      logo: 'assets/images/wavestone.svg',
      duration: '03/2022 - 08/2022',
      description: 'Stagiaire consultant au sein du département IT & Data',
      achievements: [
        "Réalisation d'un benchmark pour des solutions d'API Manager : cadrage, benchmark et recommandations.",
        "Développement d'un Proof of Concept (Poc) via FastAPI et python sur WSO2.",
        "Réalisation d’une veille concurrentielle sur la stratégie data."
      ],
      techStack: ['Python', 'WSO2', 'FastAPI']
    },
    {
      id: 2,
      role: 'Data Analyst',
      company: 'Auchan',
      logo: 'assets/images/auchan.svg',
      duration: "10/2022 - Aujourd'hui",
      description: 'Data Analytics Engineer ayant participé à la modernisation de la modern data stack chez Auchan',
      achievements: [
        "Développement et déploiement de la première plateforme Looker d'Auchan France avec plus de 2000 utilisateurs (BigQuery, Looker et Dbt)",
        "Modélisation, conception et maintenance de la couche sémantique (Dbt, BiQuery, LookML et Airflow)",
        'Mise en place de pipelines de transformation de la donnée (Dbt,Sql et BigQuery)',
        "Création et maintenance des tableaux de bord (Tableau, Looker)",
        "Maintenance et mise à jour des flux de données pour assurer la fiabilité de la donnée (Airflow, Dbt et BigQuery)",
        "Animation de la communauté Tableau et d’une communauté interne Looker Auchan via des formations, optimisation des tableaux de bord et veille technologique."
      ],
      techStack: ['SQL','BigQuery','Dbt','Airflow','Git', 'Tableau', 'Looker']
    }
  ];

  toggleExperienceDetails(experience: Experience): void {
    if (this.selectedExperience?.id === experience.id) {
      this.closeExperienceDetails();
    } else {
      this.selectedExperience = experience;
      this.showExperienceDetails = true;
    }
  }

  closeExperienceDetails(): void {
    this.selectedExperience = null;
    this.showExperienceDetails = false;
  }
}
