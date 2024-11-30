import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  gridColumns: number;
  maxWidth?: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Programming',
      skills: [
        { name: 'Python', icon: 'assets/icons/python.svg' },
        { name: 'SQL', icon: 'assets/icons/sql.svg' },
        { name: 'Bash', icon: 'assets/icons/bash.svg' }
      ],
      gridColumns: 3
    },
    {
      name: 'Infrastructure & Transformation',
      skills: [
        { name: 'BigQuery', icon: 'assets/icons/bigquery.svg' },
        { name: 'dbt', icon: 'assets/icons/dbt.svg' },
        { name: 'Git', icon: 'assets/icons/git.svg' }
      ],
      gridColumns: 3
    },
    {
      name: 'Orchestration',
      skills: [
        { name: 'Airflow', icon: 'assets/icons/airflow.svg' }
      ],
      gridColumns: 1,
      maxWidth: '100px'
    },
    {
      name: 'Visualization',
      skills: [
        { name: 'Tableau', icon: 'assets/icons/tableau.svg' },
        { name: 'Looker', icon: 'assets/icons/looker.svg' }
      ],
      gridColumns: 2,
      maxWidth: '220px'
    }
  ];
}
