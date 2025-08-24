import { Injectable, signal } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Language } from './language.model';
import { TranslateTitleStrategy } from './translate-title-strategy.service';
import { Router } from '@angular/router';

/**
 * Control Object: "Languages Control" (model domain)
 * 
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
   * @private
   * @type {Language[]}
   */
  private languages: Language[] = [  
    new Language(1, 'English', 'en', '🇺🇸'),
    new Language(2, 'Español', 'es', '🇪🇸')
  ];
  
  /**
   * Signal holding the currently active language as a `Language` object.
   *
   * This replaces the previous non-reactive property, enabling automatic
   * UI updates in any component that subscribes to it.
   *
   * @private
   * @type {Signal<Language>}
   */
  private currentLanguage = signal<Language>(this.languages[0]);

  /**
   * Read-only reference to the `currentLanguage` signal.
   *
   * Exposed for use in components so they can subscribe reactively to
   * language changes without directly modifying the signal's value.
   * 
   * ```ts
   * public label = computed(() => this.languageService.currentLanguageSignal().getName());
   * ```
   * 
   * @public
   * @readonly
   * @type {Signal<Language>}
   */
  public readonly currentLanguageSignal = this.currentLanguage;

  /**
   * Creates an instance of LanguageService.
   * Initializes translation service and sets the active language based on
   * localStorage or defaults to English.
   * 
   * @param {TranslateService} translate The ngx-translate service instance.
   * @param {Title} titleService The Angular Title service to set the document title.
   */
  constructor(
    private translate: TranslateService, 
    private titleStrategy: TranslateTitleStrategy,
    private router: Router
  ) {

    // Step 1: Check if a language is stored in localStorage
    let storedLang = this.currentLanguage().getCode(); // Default to the first language in the list
    if (typeof window !== 'undefined' && window.localStorage) {
      storedLang = localStorage.getItem('lang') || this.currentLanguage().getCode(); // Fallback to the default language if nothing is stored
    }

    // Step 2: Initialize the translation service
    let languageCodes = this.languages.map(lang => lang.getCode());   // List of language codes
    this.translate.addLangs(languageCodes);                           // Add available languages to the translation service
    this.translate.setDefaultLang('en');                              // Default language, fallback if nothing else matches

    // Step 3: Calls the changeLanguage method with the stored language or defaults to English
    this.changeLanguage(this.getLanguageByCode(storedLang));
  }

  /**
   * Gets the currently active Language object.
   *
   * @returns {Language} The active language entity.
   */
  public getCurrentLanguage(): Language {
    return this.currentLanguage();
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
   * @param {string} code The language code to search for.
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
   * @param {Language} lang The new `Language` to apply. An instance of the Entity Object "Language" (model domain),
   * mapped to the "language.model" (source code domain).
   * @returns {void}
   */
  public changeLanguage(lang: Language): void {

    // Step 1: Check if the new language is the same as the current one. If so, no change needed
    if (this.currentLanguage() === lang) return; // No change needed

    // Step 2: Update the current language
    this.currentLanguage.set(lang);

    // Step 3: Store the new language in localStorage (only in browser)
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('lang', this.currentLanguage().getCode());
    }
    
    // Step 4: Use the new language in the translation service
    this.translate.use(this.currentLanguage().getCode()).subscribe(() => {
      // Step 5: Set the browser title based on the current language and route
      this.titleStrategy.updateTitle(this.router.routerState.snapshot);
    });

  }

}