import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class NavbarComponent implements OnInit {
  isScrolled = true; // Always keep navbar visible
  activeSection = 'about';
  sections: string[] = ['about', 'skills', 'experience', 'education', 'contact'];
  currentLang: string;
  isMobileMenuOpen = false;

  constructor(private translationService: TranslationService) {
    this.currentLang = this.translationService.getCurrentLang();
  }

  ngOnInit() {
    this.checkActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkActiveSection();
  }

  checkActiveSection() {
    const pageYOffset = window.pageYOffset;
    const offset = 100;

    this.sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const topOffset = top + pageYOffset;
        const bottomOffset = bottom + pageYOffset;

        if (pageYOffset >= topOffset - offset && pageYOffset < bottomOffset - offset) {
          this.activeSection = sectionId;
        }
      }
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after clicking a link
      this.isMobileMenuOpen = false;
    }
  }

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
    this.currentLang = lang;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
