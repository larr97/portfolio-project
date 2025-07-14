import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Language } from './language.model';
import { Title } from '@angular/platform-browser';

/**
 * Service to manage application languages and integrate with ngx-translate.
 *
 * This service handles:
 * - Managing the list of available languages.
 * - Persisting the user's language choice in localStorage.
 * - Updating the translation service and document title.
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
   * The currently active language as a Language object.
   * @protected
   * @type {Language}
   */
  protected currentLanguage = this.languages[0];       // The active language

  /**
   * Creates an instance of LanguageService.
   * Initializes translation service and sets the active language based on
   * localStorage or defaults to English.
   * 
   * @param {TranslateService} translate - The ngx-translate service instance.
   * @param {Title} titleService - The Angular Title service to set the document title.
   */
  constructor(private translate: TranslateService, private titleService: Title) {
      
    // Step 1: Check if a language is stored in localStorage
    let storedLang = this.currentLanguage.getCode(); // Default to the first language in the list
    if (typeof window !== 'undefined' && window.localStorage) {
      storedLang = localStorage.getItem('lang') || this.currentLanguage.getCode(); // Fallback to the default language if nothing is stored
    }

    // Step 3: Initialize the translation service
    let languageCodes = this.languages.map(lang => lang.getCode());   // List of language codes
    this.translate.addLangs(languageCodes);                           // Add available languages to the translation service
    this.translate.setDefaultLang('en');                              // Default language, fallback if nothing else matches

    // Step 4: Calls the changeLanguage method with the stored language or defaults to English
    this.changeLanguage(this.getLanguageByCode(storedLang));
  }

  /**
   * Gets the currently active Language object.
   *
   * @returns {Language} The active language entity.
   */
  public getCurrentLanguage(): Language {
    return this.currentLanguage;
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
   * Finds the Language object by its code (e.g., 'en', 'es').
   *
   * @param {string} code - The language code to search for.
   * @returns {Language} The corresponding Language object.
   */
  public getLanguageByCode(code: string): Language {
    return this.languages.find(lang => lang.getCode() === code)!;
  }

  /**
   * Changes the application's active language.
   * Updates internal state, persists choice to localStorage, 
   * updates ngx-translate to use the new language,
   * and sets the document title based on the new language.
   *
   * @param {Language} lang - An instance of the Entity Object "Language" (model domain),
   *                          mapped to the "language.model" (source code domain).
   * @returns {void}
   */
  public changeLanguage(lang: Language): void {

    // Step 1: Check if the new language is the same as the current one. If so, no change needed
    if (this.currentLanguage === lang) return; // No change needed

    // Step 2: Update the current language
    this.currentLanguage = lang;

    // Step 3: Store the new language in localStorage (only in browser)
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('lang', this.currentLanguage.getCode());
    }
    
    // Step 4: Use the new language in the translation service
    this.translate.use(this.currentLanguage.getCode());

    // Step 5: Set the browser title based on the current language
    let title = this.translate.instant('app.title');
    this.titleService.setTitle(title);

  }

}