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
  description = "Data Analytics Engineer avec plus de deux ans d'expérience dans le secteur du retail. J'ai contribué à la conception et au développement d'une plateforme de self-service data, des tableaux de bord et des pipelines de données en utilisant Looker, Tableau, DBT et BigQuery. Mon approche repose sur une écoute attentive et une compréhension approfondie des besoins métiers, me permettant de concevoir des solutions data efficaces et pertinentes.";
}
