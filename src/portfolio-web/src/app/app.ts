import { Component, Inject, Renderer2 } from '@angular/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { RouterOutlet } from '@angular/router';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';
import { DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Theme } from './core/theming/theme.model';

/**
 * The root component of the application.
 *
 * Acts as the main container including routing and other application features.
 * 
 * @export
 * @component
 */
@Component({
  selector: 'app-root',
  imports: [
    TranslatePipe, 
    TranslateDirective,
    RouterOutlet,
    LanguageSwitcher,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  /**
   * List of available themes for the application.
   * Each theme includes a name, code, and icon.
   */
  private themes: Theme[] = [
    new Theme(1, 'Light', 'light', 'flare'),
    new Theme(2, 'Light High Contrast', 'hc-light', 'light_mode'),
    new Theme(3, 'Dark', 'dark', 'dark_mode'),
    new Theme(4, 'Dark High Contrast', 'hc-dark', 'brightness_1')
  ];

  /**
   * The currently active theme.
   * Initialized with a default fallback (first in list) and updated from localStorage if available.
   */
  private currentTheme = this.themes[0];

  /**
   * Creates an instance of the App component.
   * 
   * Initializes the current theme from localStorage if available,
   * and applies it by delegating to `changeTheme()`.
   *
   * @param document - Injected reference to the DOM `document` object.
   * @param renderer - Angular's `Renderer2` used for DOM class manipulation.
   */
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    
    let storedTheme = this.currentTheme.getCode();
    if (typeof window !== 'undefined' && window.localStorage) {
      storedTheme = localStorage.getItem('theme') || this.currentTheme.getCode();
    }

    this.changeTheme(this.getThemeByCode(storedTheme));
  }

  /**
   * Gets the currently active theme.
   * 
   * @returns The current `Theme` object.
   */
  public getCurrentTheme(): Theme {
    return this.currentTheme;
  } 

  /**
   * Gets the list of all available themes.
   * 
   * @returns An array of `Theme` objects.
   */
  public getThemes(): Theme[] {
    return this.themes;
  }

  /**
   * Finds a theme by its unique string code.
   * 
   * @param code - The code of the theme to retrieve.
   * @returns The `Theme` matching the code. Assumes a match always exists (`!` used).
   */
  public getThemeByCode(code: string): Theme {
    return this.themes.find(theme => theme.getCode() === code)!;
  }

  /**
   * Changes the active theme of the application.
   * 
   * Handles updating the DOM body class, internal state, and saving the selected theme to localStorage.
   * 
   * @param theme - The new `Theme` to apply.
   */
  public changeTheme(theme: Theme): void {
    if (this.currentTheme === theme) return;

    // Remove old theme class and apply new one
    this.renderer.removeClass(this.document.body, this.currentTheme.getCode());
    this.renderer.addClass(this.document.body, theme.getCode());

    // Update current theme state
    this.currentTheme = theme;

    // Persist to localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', theme.getCode());
    }
  }
}