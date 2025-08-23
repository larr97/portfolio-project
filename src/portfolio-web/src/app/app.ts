import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeSwitcher } from './shared/components/theme-switcher/theme-switcher';
import { RouterLink } from '@angular/router';

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
    RouterOutlet,
    MatButtonModule,
    MatToolbarModule,
    LanguageSwitcher,
    ThemeSwitcher,
    RouterLink
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}