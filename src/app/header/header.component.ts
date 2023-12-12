import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  languages = [
    { label: 'English', code: 'en' },
    { label: 'Français', code: 'fr' }
  ];
  selectedLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }
}