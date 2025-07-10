import { Component } from '@angular/core';
import { TranslateService, TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

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
  
  // This corresponds the Entity Object: "Language" (model domain)
  // that will be mapped to the "language.model" (source code domain)
  protected currentLang = 'en';    // The active language

  constructor(private translate: TranslateService) {
      
    // Step 1: Check if a language is stored in localStorage
    let storedLang: string | null = null;
    if (typeof window !== 'undefined' && window.localStorage) {
      storedLang = localStorage.getItem('lang');
    }

    // Step 2: If no language is stored, default to 'en'
    this.currentLang = storedLang || this.currentLang;

    // Step 3: Initialize the translation service
    // The Control Object: "Language Control" (model domain)
    // is mapped to the "language.service" (source code domain),
    // and its "languages" attribute is ['en', 'es']
    this.translate.addLangs(['en', 'es']);  
    this.translate.setDefaultLang('en');  // // Default language, fallback if nothing else matches
    this.translate.use(this.currentLang);
  }

  // lang is an instance of the Entity Object "Language" (model domain)
  // that will be mapped to the "language.model" (source code domain)
  public changeLanguage(lang: string) {  
    
    // Step 1: Update the current language
    this.currentLang = lang;

    // Step 2: Store the new language in localStorage (only in browser)
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('lang', lang);
    }
    
    // Step 3: Use the new language in the translation service
    this.translate.use(this.currentLang);
  }
}