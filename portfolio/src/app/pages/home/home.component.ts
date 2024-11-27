import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillDetail {
  title: string;
  experience: string;
  description: string;
  features: string[];
  projects: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent {
  activeSkill: string | null = null;
  showOverlay = false;

  skillDetails: { [key: string]: SkillDetail } = {
    python: {
      title: 'Python',
      experience: '5 ans d\'expérience',
      description: 'Expertise en développement Python pour l\'analyse de données et l\'automatisation',
      features: [
        'Pandas & NumPy pour l\'analyse de données',
        'Scikit-learn pour le machine learning',
        'FastAPI pour les APIs',
        'Automatisation de processus data'
      ],
      projects: [
        'Pipeline ETL automatisé',
        'Modèles prédictifs pour l\'analyse des ventes',
        'API de données pour tableaux de bord'
      ]
    },
    sql: {
      title: 'SQL',
      experience: '5 ans d\'expérience',
      description: 'Maîtrise des requêtes complexes et de l\'optimisation',
      features: [
        'Requêtes complexes et optimisation',
        'Window functions',
        'Modélisation de données',
        'Performance tuning'
      ],
      projects: [
        'Optimisation de requêtes critiques',
        'Création de data marts',
        'Migration de bases de données'
      ]
    },
    bigquery: {
      title: 'BigQuery',
      experience: '3 ans d\'expérience',
      description: 'Expert en BigQuery pour l\'analyse de données à grande échelle',
      features: [
        'Optimisation des coûts',
        'Partitionnement et clustering',
        'Scheduled queries',
        'Data governance'
      ],
      projects: [
        'Entrepôt de données client',
        'Analyses en temps réel',
        'Optimisation des coûts'
      ]
    },
    dbt: {
      title: 'dbt',
      experience: '2 ans d\'expérience',
      description: 'Transformation de données avec dbt',
      features: [
        'Modélisation de données',
        'Tests et documentation',
        'CI/CD pour dbt',
        'Optimisation des performances'
      ],
      projects: [
        'Mise en place du framework dbt',
        'Automatisation des transformations',
        'Documentation des modèles'
      ]
    },
    tableau: {
      title: 'Tableau',
      experience: '4 ans d\'expérience',
      description: 'Création de tableaux de bord interactifs',
      features: [
        'Visualisations avancées',
        'Calculs complexes',
        'Optimisation des performances',
        'Server administration'
      ],
      projects: [
        'Tableaux de bord commerciaux',
        'Analyses marketing',
        'Reporting automatisé'
      ]
    },
    looker: {
      title: 'Looker',
      experience: '2 ans d\'expérience',
      description: 'Développement LookML et création de dashboards',
      features: [
        'Développement LookML',
        'Modélisation de données',
        'Création de dashboards',
        'Administration'
      ],
      projects: [
        'Mise en place de Looker',
        'Formation des utilisateurs',
        'Création de dashboards métier'
      ]
    }
  };

  constructor(private elementRef: ElementRef) {}

  toggleSkillDetails(skillId: string) {
    if (this.activeSkill === skillId) {
      this.closeSkillDetails();
    } else {
      this.activeSkill = skillId;
      this.showOverlay = true;
      document.body.style.overflow = 'hidden';
    }
  }

  closeSkillDetails() {
    this.activeSkill = null;
    this.showOverlay = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.closeSkillDetails();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const skillDetails = this.elementRef.nativeElement.querySelector('.skill-details.active');
    const skillItem = this.elementRef.nativeElement.querySelector('.skill-item');

    if (skillDetails && !skillDetails.contains(clickedElement) && !skillItem?.contains(clickedElement)) {
      this.closeSkillDetails();
    }
  }
}
