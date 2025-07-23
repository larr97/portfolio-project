import { Component } from '@angular/core';
import { Theme } from '../../../core/theming/theme.model';
import { ThemeService } from '../../../core/theming/theme.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

/**
 * Component that provides a UI for switching the application's themes.
 * 
 * Displays the current theme and allows the user to select a different one
 * from the list of available themes.
 *
 * @export
 * @component
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
   * @protected
   * @type {string}
   */
  protected label: string;

  /**
   * Constructs the theme switcher component.
   * 
   * Initializes the display label using the currently active theme.
   * 
   * @param {ThemeService} themeService - Service that manages theme state and switching logic.
   */
  constructor(private themeService: ThemeService) {
    this.label = this.themeService.getCurrentTheme().getIcon();
  }

  /**
   * Gets the currently active theme from the service.
   * 
   * @returns {Theme} The currently selected `Theme` object.
   */
  public getActiveTheme(): Theme {
    return this.themeService.getCurrentTheme();
  }

  /**
   * Gets the full list of available themes from the service.
   * 
   * @returns {Theme[]} An array of `Theme` objects.
   */
  public getThemeList(): Theme[] {
    return this.themeService.getThemes();
  }

  /**
   * Applies the selected theme and updates the label to reflect the new active theme.
   * 
   * @param {Theme} theme The selected theme.
   * @returns {void}
   */
  public setTheme(theme: Theme): void {
    this.themeService.changeTheme(theme);
    this.label = theme.getIcon();
  }

}