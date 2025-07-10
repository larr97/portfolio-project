import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageService } from './core/language/language.service';
import { Language } from './core/language/language.model';

@Component({
  selector: 'app-root',
  imports: [
    TranslatePipe, 
    TranslateDirective,
    RouterOutlet,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected languages: Language[];

  constructor(private languageService: LanguageService) {
    this.languages = this.languageService.getLanguages();
  }

  public getCurrentLang(): Language {
    return this.languageService.getCurrentLanguage();
  }

  public onSelectLanguage(lang: Language): void {
    this.languageService.changeLanguage(lang);
  }

}