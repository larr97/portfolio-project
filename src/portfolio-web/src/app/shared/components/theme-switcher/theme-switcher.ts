import { Component } from '@angular/core';
import { Theme } from '../../../core/theming/theme.model';
import { ThemeService } from '../../../core/theming/theme.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

/**
 * UI component for switching between available application themes.
 * 
 * Displays the current theme and allows users to select a new one via a dropdown menu.
 * Integrates with `ThemeService` to get the list of themes, track the active theme,
 * and apply a new one on selection.
 */
@Component({
  selector: 'app-theme-switcher',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss'
})
export class ThemeSwitcher {

  /**
   * Label used to display the currently active theme.
   */
  protected label: string;

  /**
   * Constructs the theme switcher component.
   * 
   * Initializes the display label using the currently active theme.
   * 
   * @param themeService - Service that manages theme state and switching logic.
   */
  constructor(private themeService: ThemeService) {
    this.label = this.themeService.getCurrentTheme().getName();
  }

  /**
   * Gets the currently active theme from the service.
   * 
   * @returns The currently selected `Theme` object.
   */
  public getActiveTheme(): Theme {
    return this.themeService.getCurrentTheme();
  }

  /**
   * Gets the full list of available themes from the service.
   * 
   * @returns An array of `Theme` objects.
   */
  public getThemeList(): Theme[] {
    return this.themeService.getThemes();
  }

  /**
   * Applies the selected theme and updates the label to reflect the new active theme.
   * 
   * @param theme - The theme to activate.
   */
  public setTheme(theme: Theme): void {
    this.themeService.changeTheme(theme);
    this.label = theme.getName();
  }

}