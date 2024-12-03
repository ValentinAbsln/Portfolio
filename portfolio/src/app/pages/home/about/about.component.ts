import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule, TranslateModule]
})
export class AboutComponent {
  showPortfolioMessage = false;

  onPortfolioClick(event: Event) {
    event.preventDefault();
    this.showPortfolioMessage = !this.showPortfolioMessage;
  }
}
