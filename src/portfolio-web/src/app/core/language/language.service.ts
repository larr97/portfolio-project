import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Language } from './language.model';
import { Title } from '@angular/platform-browser';

/**
 * Service to manage application languages and integration with ngx-translate.
 *
 * It maintains the list of available languages, tracks the current language,
 * and persists the user's choice in localStorage.
 *
 * @export
 * @class LanguageService
 */
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  /**
   * The attribute of the Control Object "Language Control" (model domain),
   * which holds a list of available languages as Entity Objects "Language" (model domain).
   *
   * Each item represents a language supported by the application.
   *
   * @protected
   * @type {Language[]}
   */
  protected languages: Language[] = [  
    new Language(1, 'English', 'en', '🇺🇸'),
    new Language(2, 'Español', 'es', '🇪🇸')
  ];
  
  /**
   * The code of the currently active language (e.g. 'en', 'es').
   * @protected
   * @type {string}
   */
  protected currentLang = this.languages[0].getCode();       // The code of the active language

  /**
   * Creates an instance of LanguageService.
   * Initializes translation service and sets the active language based on
   * localStorage or defaults to English.
   * 
   * @param {TranslateService} translate - The ngx-translate service instance.
   */
  constructor(private translate: TranslateService, private titleService: Title) {
      
    // Step 1: Check if a language is stored in localStorage
    let storedLang: string | null = null;
    if (typeof window !== 'undefined' && window.localStorage) {
      storedLang = localStorage.getItem('lang');
    }

    // Step 2: If no language is stored, default to 'en'
    this.currentLang = storedLang || this.currentLang;

    // Step 3: Initialize the translation service
    let languageCodes = this.languages.map(lang => lang.getCode());   // List of language codes
    this.translate.addLangs(languageCodes);                           // Add available languages to the translation service
    this.translate.setDefaultLang('en');                              // Default language, fallback if nothing else matches
    this.translate.use(this.currentLang);

    // Step 4: Set the browser title based on the current language
    let title = this.translate.instant('app.title');
    this.titleService.setTitle(title);

  }

  /**
   * Gets the currently active Language object.
   *
   * @returns {Language} The active language entity.
   */
  public getCurrentLanguage(): Language {
    return this.languages.find(lang => lang.getCode() === this.currentLang)!;
  }

  /**
   * Gets the list of supported languages.
   *
   * @returns {Language[]} Array of Language entities.
   */
  public getLanguages(): Language[] {
    return this.languages;
  }

  /**
   * Changes the application's active language.
   * Updates internal state, persists choice to localStorage, 
   * and updates ngx-translate to use the new language.
   *
   * @param {Language} lang - An instance of the Entity Object "Language" (model domain),
   *                          mapped to the "language.model" (source code domain).
   * @returns {void}
   */
  public changeLanguage(lang: Language): void {  
    
    // Step 1: Update the current language
    this.currentLang = lang.getCode();

    // Step 2: Store the new language in localStorage (only in browser)
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('lang', this.currentLang);
    }
    
    // Step 3: Use the new language in the translation service
    this.translate.use(this.currentLang);

    // Step 4: Set the browser title based on the current language
    let title = this.translate.instant('app.title');
    this.titleService.setTitle(title);

  }

}