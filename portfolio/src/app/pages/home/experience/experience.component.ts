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
  details: ExperienceDetails;
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
      role: 'Analytics Engineer',
      company: 'Wavestone',
      logo: 'assets/images/wavestone.svg',
      duration: '2022 - Present',
      description: 'Leading data engineering initiatives and implementing modern data stack solutions.',
      achievements: [
        'Built and maintained data pipelines using dbt, processing over 1M daily records',
        'Implemented data quality monitoring reducing errors by 40%',
        'Created interactive dashboards used by 200+ stakeholders'
      ],
      techStack: ['dbt', 'Python', 'BigQuery', 'Airflow'],
      details: {
        responsibilities: [
          'Lead the development and maintenance of data pipelines',
          'Design and implement data models using dbt',
          'Collaborate with stakeholders to define data requirements',
          'Ensure data quality and reliability'
        ],
        projects: [
          'Data warehouse migration to BigQuery',
          'Implementation of data quality framework',
          'Development of automated reporting system'
        ],
        impact: [
          '50% reduction in data processing time',
          '40% reduction in data errors',
          '30% increase in data team productivity'
        ]
      }
    },
    {
      id: 2,
      role: 'Data Analyst',
      company: 'Auchan',
      logo: 'assets/images/auchan.svg',
      duration: '2020 - 2022',
      description: 'Driving data-driven decision making through analytics and visualization.',
      achievements: [
        'Developed automated reporting solutions saving 20+ hours weekly',
        'Led data analysis projects driving 30% increase in user engagement',
        'Collaborated with 5 teams to implement data-driven solutions'
      ],
      techStack: ['SQL', 'Tableau', 'Python', 'Git'],
      details: {
        responsibilities: [
          'Analyze complex datasets to derive insights',
          'Create and maintain dashboards in Tableau',
          'Develop automated reporting solutions',
          'Support data-driven decision making'
        ],
        projects: [
          'User engagement analytics platform',
          'Automated reporting system',
          'A/B testing framework'
        ],
        impact: [
          '30% increase in user engagement',
          '20 hours weekly time savings',
          '25% improvement in decision-making speed'
        ]
      }
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
