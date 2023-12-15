import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  languages = [
    { label: 'EN', code: 'en', flag: 'assets/images/flag_en.png' },
    { label: 'FR', code: 'fr', flag: 'assets/images/flag_fr.png' }
  ];

  selectedLanguage = 'en'; // Langue par défaut
  selectedLanguage$: BehaviorSubject<string>;
  selectedLanguageObject: { label: string; code: string; flag: string } | undefined;
  languageSubscription: Subscription;

  constructor(private translate: TranslateService) {
    this.selectedLanguage$ = new BehaviorSubject<string>(this.selectedLanguage);
    this.selectedLanguageObject = this.languages.find(lang => lang.code === this.selectedLanguage);
    this.translate.setDefaultLang(this.selectedLanguage);

    // Souscrire à l'Observable pour gérer les changements de langue
    this.languageSubscription = this.selectedLanguage$.subscribe(languageCode => {
      const foundLanguage = this.languages.find(lang => lang.code === languageCode);
      if (foundLanguage) {
        this.selectedLanguageObject = foundLanguage;
        this.translate.use(languageCode);
      }
    });
  }

  changeLanguage(languageCode: string) {
    this.selectedLanguage$.next(languageCode);
  }

  ngOnDestroy() {
    // Désabonnement pour éviter les fuites de mémoire
    this.languageSubscription.unsubscribe();
  }
}
