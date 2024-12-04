import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Education {
  id: number;
  translationKey: string;
  logo: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education-card.scss', './education-modal.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class EducationComponent {
  selectedEducation: Education | null = null;
  showEducationDetails = false;

  educations: Education[] = [
    {
      id: 1,
      translationKey: 'TELECOMNANCY',
      logo: 'assets/images/TELECOMNANCY.svg'
    },
    {
      id: 2,
      translationKey: 'ULIEGE',
      logo: 'assets/images/ULIEGE.svg'
    }
  ];

  constructor(private translate: TranslateService) {}

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

  getTranslationKey(key: string): string {
    return `EDUCATION.SCHOOLS.${key}`;
  }
}
