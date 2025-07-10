import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Language } from './language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // The attribute of the Control Object: "Language Control" (model domain)
  // that will be mapped in the "language.service" (source code domain),
  // that have a list of available languages as Entity Objects: "Language" (model domain) 
  // implemented in "language.model" (source code domain)
  protected languages: Language[] = [  
    new Language(1, 'English', 'en', '🇺🇸'),
    new Language(2, 'Español', 'es', '🇪🇸')
  ];
  
  protected currentLang = this.languages[0].getCode();       // The code of the active language

  constructor(private translate: TranslateService) {
      
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
  }

  public getCurrentLanguage(): Language {
    return this.languages.find(lang => lang.getCode() === this.currentLang)!;
  }

  public getLanguages(): Language[] {
    return this.languages;
  }

  // lang is an instance of the Entity Object "Language" (model domain)
  // that will be mapped to the "language.model" (source code domain)
  public changeLanguage(lang: Language): void {  
    
    // Step 1: Update the current language
    this.currentLang = lang.getCode();

    // Step 2: Store the new language in localStorage (only in browser)
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('lang', this.currentLang);
    }
    
    // Step 3: Use the new language in the translation service
    this.translate.use(this.currentLang);
  }

}