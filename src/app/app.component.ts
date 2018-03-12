import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LoginComponent } from './_modules/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private static readonly langStorageKey = 'app-language';
  title = 'medgencare';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    const currentLang = localStorage[AppComponent.langStorageKey];
    if (currentLang) {
      translate.use(currentLang);
    }
    translate.onLangChange.subscribe(newLang => {
      localStorage[AppComponent.langStorageKey] = newLang.lang;
    });
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
