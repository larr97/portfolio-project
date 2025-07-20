import { Component, signal } from '@angular/core';
import { LanguageService } from '../../../core/language/language.service';
import { Language } from '../../../core/language/language.model';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

/**
 * Component that provides a UI for switching the application's language.
 * 
 * Displays the current language and allows the user to select a different one
 * from the list of available languages.
 *
 * @export
 * @component
 */
@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonModule, MatMenuModule, MatIconModule, MatGridListModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {

  /**
   * Label showing the name of the currently selected language.
   * @protected
   * @type {string}
   */
  protected label: string;

  /**
   * Creates an instance of LanguageSwitcher.
   *
   * @param {LanguageService} languageService - Service to manage languages.
   */
  constructor(private languageService: LanguageService) {
    this.label = this.languageService.getCurrentLanguage().getName();
  }
  
  /**
   * Returns the currently selected language.
   *
   * @returns {Language} The current language entity.
   */
  public getActiveLanguage(): Language {
    return this.languageService.getCurrentLanguage();
  }
  
  /**
   * Gets the full list of available languages from the service.
   *
   * @returns {Language[]} An array of `Language` objects.
   */
  public getLanguageList(): Language[] {
    return this.languageService.getLanguages();
  }

  /**
   * Handler invoked when a language is selected from the UI.
   * Updates the language in the service and updates the label.
   *
   * @param {Language} lang The selected language.
   * @returns {void}
   */
  public setLanguage(lang: Language): void {
    this.languageService.changeLanguage(lang);
    this.label = lang.getName();
  }

}