import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  activeSection = 'about';
  sections: string[] = ['about', 'skills', 'experience', 'education', 'contact'];

  ngOnInit() {
    this.checkActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Ajoute la classe scrolled quand on descend la page
    this.isScrolled = window.scrollY > 20;
    this.checkActiveSection();
  }

  checkActiveSection() {
    const pageYOffset = window.pageYOffset;
    const offset = 100; // Offset pour la détection de la section active

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
      const offset = 70; // Offset pour le scroll
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
