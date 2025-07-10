import { Component, signal } from '@angular/core';
import { LanguageService } from '../../../core/language/language.service';
import { Language } from '../../../core/language/language.model';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {

  protected label: string;
  protected languages: Language[];

  constructor(private languageService: LanguageService) {
    this.languages = this.languageService.getLanguages();
    this.label = this.languageService.getCurrentLanguage().getName();
    }
  
    public getCurrentLang(): Language {
      return this.languageService.getCurrentLanguage();
    }
  
    public onSelectLanguage(lang: Language): void {
      this.languageService.changeLanguage(lang);
      this.label = lang.getName();
    }

}