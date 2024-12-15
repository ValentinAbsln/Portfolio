import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<string>('fr');
  currentLang$ = this.currentLang.asObservable();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang.next(lang);
  }

  getCurrentLang(): string {
    return this.currentLang.value;
  }
}
