import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  languages = [
    { label: 'EN', code: 'en', flag: 'assets/images/flag_en.png' },
    { label: 'FR', code: 'fr', flag: 'assets/images/flag_fr.png' }
  ];

  selectedLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }
}