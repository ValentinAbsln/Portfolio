import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Experience {
  id: number;
  translationKey: string;
  logo: string;
  techStack: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience-card.scss', './experience-modal.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class ExperienceComponent {
  selectedExperience: Experience | null = null;
  showExperienceDetails = false;

  experiences: Experience[] = [
    {
      id: 1,
      translationKey: 'WAVESTONE',
      logo: 'assets/images/wavestone.svg',
      techStack: ['Python', 'WSO2', 'FastAPI']
    },
    {
      id: 2,
      translationKey: 'AUCHAN',
      logo: 'assets/images/auchan.svg',
      techStack: ['SQL', 'BigQuery', 'Dbt', 'Airflow', 'Git', 'Tableau', 'Looker']
    }
  ];

  constructor(private translate: TranslateService) {}

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

  getTranslationKey(key: string): string {
    return `EXPERIENCE.COMPANIES.${key}`;
  }
}
