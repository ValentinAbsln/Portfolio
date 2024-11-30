import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class AboutComponent {
  title = 'Analytics Engineer';
  description = 'I am a passionate Analytics Engineer specialized in building robust data pipelines and creating impactful data visualizations. With expertise in modern data stack technologies, I transform complex data challenges into actionable insights and scalable solutions.';
}
