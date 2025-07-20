import { Injectable, Inject } from '@angular/core';
import { Theme } from './theme.model';
import { DOCUMENT } from '@angular/common';

/**
 * Service to manage application theme
 *
 * This service handles:
 * - Managing the list of available themes.
 * - Persisting the user's theme choice in localStorage.

 *
 * @export
 * @class ThemeService
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

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
   * Initialized with a default fallback (first in the list) and
   * updated from localStorage if available.
   */
  private currentTheme = this.themes[0];

  /**
   * Initializes the `ThemeService`.
   * 
   * Loads the saved theme from localStorage if available and applies it
   * by delegating to `changeTheme()`.
   *
   * @param document - Injected reference to the DOM `document` object.
   */
  constructor(@Inject(DOCUMENT) private document: Document) {

    let storedTheme = this.currentTheme.getCode();
    if (typeof window !== 'undefined' && window.localStorage) {
      storedTheme = localStorage.getItem('theme') || this.currentTheme.getCode();
    }

    this.changeTheme(this.getThemeByCode(storedTheme));
  }

  /**
   * Gets the currently active theme.
   * 
   * @returns The currently selected `Theme` object.
   */
  public getCurrentTheme(): Theme {
    return this.currentTheme;
  } 

  /**
   * Gets the list of all available themes.
   * 
   * @returns A list of all available themes configured in the application.
   */
  public getThemes(): Theme[] {
    return this.themes;
  }

  /**
   * Finds a theme by its unique string code.
   * 
   * @param code - The code of the theme to retrieve.
   * @returns The `Theme` matching the code.
   * 
   * @remarks
   * Assumes a matching theme code is always available.
   * If no match is found, this method will throw at runtime.
   */
  public getThemeByCode(code: string): Theme {
    return this.themes.find(theme => theme.getCode() === code)!;
  }

  /**
   * Changes the active theme of the application.
   * 
   * Handles updating the DOM body class, internal state, and saving
   * the selected theme to localStorage.
   * 
   * @param theme - The new `Theme` to apply.
   */
  public changeTheme(theme: Theme): void {
    if (this.currentTheme === theme) return;

    // Remove old theme class and apply new one
    this.document.body.classList.remove(this.currentTheme.getCode());
    this.document.body.classList.add(theme.getCode());

    // Update current theme state
    this.currentTheme = theme;

    // Persist to localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', theme.getCode());
    }
  }
}